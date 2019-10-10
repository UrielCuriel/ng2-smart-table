import { LocalSorter } from './local.sorter';
import { LocalFilter } from './local.filter';
import { LocalPager } from './local.pager';
import { DataSource } from '../data-source';
import { deepExtend } from '../../helpers';
export class LocalDataSource extends DataSource {
    constructor(data = []) {
        super();
        this.data = [];
        this.filteredAndSorted = [];
        this.sortConf = [];
        this.filterConf = {
            filters: [],
            andOperator: true,
        };
        this.pagingConf = {};
        this.data = data;
    }
    load(data) {
        this.data = data;
        return super.load(data);
    }
    prepend(element) {
        this.reset(true);
        this.data.unshift(element);
        return super.prepend(element);
    }
    append(element) {
        this.reset(true);
        this.data.push(element);
        return super.append(element);
    }
    add(element) {
        this.data.push(element);
        return super.add(element);
    }
    remove(element) {
        this.data = this.data.filter(el => el !== element);
        return super.remove(element);
    }
    update(element, values) {
        return new Promise((resolve, reject) => {
            this.find(element).then((found) => {
                found = deepExtend(found, values);
                super.update(found, values).then(resolve).catch(reject);
            }).catch(reject);
        });
    }
    find(element) {
        const found = this.data.find(el => el === element);
        if (found) {
            return Promise.resolve(found);
        }
        return Promise.reject(new Error('Element was not found in the dataset'));
    }
    getElements() {
        const data = this.data.slice(0);
        return Promise.resolve(this.prepareData(data));
    }
    getFilteredAndSorted() {
        let data = this.data.slice(0);
        this.prepareData(data);
        return Promise.resolve(this.filteredAndSorted);
    }
    getAll() {
        const data = this.data.slice(0);
        return Promise.resolve(data);
    }
    reset(silent = false) {
        if (silent) {
            this.filterConf = {
                filters: [],
                andOperator: true,
            };
            this.sortConf = [];
            this.pagingConf['page'] = 1;
        }
        else {
            this.setFilter([], true, false);
            this.setSort([], false);
            this.setPage(1);
        }
    }
    empty() {
        this.data = [];
        return super.empty();
    }
    count() {
        return this.filteredAndSorted.length;
    }
    /**
     *
     * Array of conf objects
     * [
     *  {field: string, direction: asc|desc|null, compare: Function|null},
     * ]
     * @param conf
     * @param doEmit
     * @returns {LocalDataSource}
     */
    setSort(conf, doEmit = true) {
        if (conf !== null) {
            conf.forEach((fieldConf) => {
                if (!fieldConf['field'] || typeof fieldConf['direction'] === 'undefined') {
                    throw new Error('Sort configuration object is not valid');
                }
            });
            this.sortConf = conf;
        }
        super.setSort(conf, doEmit);
        return this;
    }
    /**
     *
     * Array of conf objects
     * [
     *  {field: string, search: string, filter: Function|null},
     * ]
     * @param conf
     * @param andOperator
     * @param doEmit
     * @returns {LocalDataSource}
     */
    setFilter(conf, andOperator = true, doEmit = true) {
        if (conf && conf.length > 0) {
            conf.forEach((fieldConf) => {
                this.addFilter(fieldConf, andOperator, false);
            });
        }
        else {
            this.filterConf = {
                filters: [],
                andOperator: true,
            };
        }
        this.filterConf.andOperator = andOperator;
        this.pagingConf['page'] = 1;
        super.setFilter(conf, andOperator, doEmit);
        return this;
    }
    addFilter(fieldConf, andOperator = true, doEmit = true) {
        if (!fieldConf['field'] || typeof fieldConf['search'] === 'undefined') {
            throw new Error('Filter configuration object is not valid');
        }
        let found = false;
        this.filterConf.filters.forEach((currentFieldConf, index) => {
            if (currentFieldConf['field'] === fieldConf['field']) {
                this.filterConf.filters[index] = fieldConf;
                found = true;
            }
        });
        if (!found) {
            this.filterConf.filters.push(fieldConf);
        }
        this.filterConf.andOperator = andOperator;
        super.addFilter(fieldConf, andOperator, doEmit);
        return this;
    }
    setPaging(page, perPage, doEmit = true) {
        this.pagingConf['page'] = page;
        this.pagingConf['perPage'] = perPage;
        super.setPaging(page, perPage, doEmit);
        return this;
    }
    setPage(page, doEmit = true) {
        this.pagingConf['page'] = page;
        super.setPage(page, doEmit);
        return this;
    }
    getSort() {
        return this.sortConf;
    }
    getFilter() {
        return this.filterConf;
    }
    getPaging() {
        return this.pagingConf;
    }
    prepareData(data) {
        data = this.filter(data);
        data = this.sort(data);
        this.filteredAndSorted = data.slice(0);
        return this.paginate(data);
    }
    sort(data) {
        if (this.sortConf) {
            this.sortConf.forEach((fieldConf) => {
                data = LocalSorter
                    .sort(data, fieldConf['field'], fieldConf['direction'], fieldConf['compare']);
            });
        }
        return data;
    }
    // TODO: refactor?
    filter(data) {
        if (this.filterConf.filters) {
            if (this.filterConf.andOperator) {
                this.filterConf.filters.forEach((fieldConf) => {
                    if (fieldConf['search'].length > 0) {
                        data = LocalFilter
                            .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']);
                    }
                });
            }
            else {
                let mergedData = [];
                this.filterConf.filters.forEach((fieldConf) => {
                    if (fieldConf['search'].length > 0) {
                        mergedData = mergedData.concat(LocalFilter
                            .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']));
                    }
                });
                // remove non unique items
                data = mergedData.filter((elem, pos, arr) => {
                    return arr.indexOf(elem) === pos;
                });
            }
        }
        return data;
    }
    paginate(data) {
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            data = LocalPager.paginate(data, this.pagingConf['page'], this.pagingConf['perPage']);
        }
        return data;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwuZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvbGliL2RhdGEtc291cmNlL2xvY2FsL2xvY2FsLmRhdGEtc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxVQUFVO0lBVzdDLFlBQVksT0FBbUIsRUFBRTtRQUMvQixLQUFLLEVBQUUsQ0FBQztRQVZBLFNBQUksR0FBZSxFQUFFLENBQUM7UUFDdEIsc0JBQWlCLEdBQWUsRUFBRSxDQUFDO1FBQ25DLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFDMUIsZUFBVSxHQUFRO1lBQzFCLE9BQU8sRUFBRSxFQUFFO1lBQ1gsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQztRQUNRLGVBQVUsR0FBUSxFQUFFLENBQUM7UUFLN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELElBQUksQ0FBQyxJQUFnQjtRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVqQixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFZO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0Is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SSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBYyxFQUFFLEVBQUU7b0JBQ2pELElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQ2xDLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVc7NkJBQ3ZDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNoRjtnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDSCwwQkFBMEI7Z0JBQzFCLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBUyxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsRUFBRTtvQkFDekQsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztnQkFDbkMsQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRVMsUUFBUSxDQUFDLElBQWdCO1FBQ2pDLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDNUUsSUFBSSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQ3ZGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhbFNvcnRlciB9IGZyb20gJy4vbG9jYWwuc29ydGVyJztcbmltcG9ydCB7IExvY2FsRmlsdGVyIH0gZnJvbSAnLi9sb2NhbC5maWx0ZXInO1xuaW1wb3J0IHsgTG9jYWxQYWdlciB9IGZyb20gJy4vbG9jYWwucGFnZXInO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uL2RhdGEtc291cmNlJztcbmltcG9ydCB7IGRlZXBFeHRlbmQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIExvY2FsRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCBkYXRhOiBBcnJheTxhbnk+ID0gW107XG4gIHByb3RlY3RlZCBmaWx0ZXJlZEFuZFNvcnRlZDogQXJyYXk8YW55PiA9IFtdO1xuICBwcm90ZWN0ZWQgc29ydENvbmY6IEFycmF5PGFueT4gPSBbXTtcbiAgcHJvdGVjdGVkIGZpbHRlckNvbmY6IGFueSA9IHtcbiAgICBmaWx0ZXJzOiBbXSxcbiAgICBhbmRPcGVyYXRvcjogdHJ1ZSxcbiAgfTtcbiAgcHJvdGVjdGVkIHBhZ2luZ0NvbmY6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IEFycmF5PGFueT4gPSBbXSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG5cbiAgbG9hZChkYXRhOiBBcnJheTxhbnk+KTogUHJvbWlzZTxhbnk+IHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuXG4gICAgcmV0dXJuIHN1cGVyLmxvYWQoZGF0YSk7XG4gIH1cblxuICBwcmVwZW5kKGVsZW1lbnQ6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcblxuICAgIHRoaXMuZGF0YS51bnNoaWZ0KGVsZW1lbnQpO1xuICAgIHJldHVybiBzdXBlci5wcmVwZW5kKGVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQ6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcblxuICAgIHRoaXMuZGF0YS5wdXNoKGVsZW1lbnQpO1xuICAgIHJldHVybiBzdXBlci5hcHBlbmQoZWxlbWVudCk7XG4gIH1cblxuICBhZGQoZWxlbWVudDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICB0aGlzLmRhdGEucHVzaChlbGVtZW50KTtcblxuICAgIHJldHVybiBzdXBlci5hZGQoZWxlbWVudCk7XG4gIH1cblxuICByZW1vdmUoZWxlbWVudDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEuZmlsdGVyKGVsID0+IGVsICE9PSBlbGVtZW50KTtcblxuICAgIHJldHVybiBzdXBlci5yZW1vdmUoZWxlbWVudCk7XG4gIH1cblxuICB1cGRhdGUoZWxlbWVudDogYW55LCB2YWx1ZXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuZmluZChlbGVtZW50KS50aGVuKChmb3VuZCkgPT4ge1xuICAgICAgICBmb3VuZCA9IGRlZXBFeHRlbmQoZm91bmQsIHZhbHVlcyk7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShmb3VuZCwgdmFsdWVzKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZChlbGVtZW50OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IGZvdW5kID0gdGhpcy5kYXRhLmZpbmQoZWwgPT4gZWwgPT09IGVsZW1lbnQpO1xuICAgIGlmIChmb3VuZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmb3VuZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignRWxlbWVudCB3YXMgbm90IGZvdW5kIGluIHRoZSBkYXRhc2V0JykpO1xuICB9XG5cbiAgZ2V0RWxlbWVudHMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhLnNsaWNlKDApO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5wcmVwYXJlRGF0YShkYXRhKSk7XG4gIH1cblxuICBnZXRGaWx0ZXJlZEFuZFNvcnRlZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIGxldCBkYXRhID0gdGhpcy5kYXRhLnNsaWNlKDApO1xuICAgIHRoaXMucHJlcGFyZURhdGEoZGF0YSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmZpbHRlcmVkQW5kU29ydGVkKTtcbiAgfVxuXG4gIGdldEFsbCgpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEuc2xpY2UoMCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkYXRhKTtcbiAgfVxuXG4gIHJlc2V0KHNpbGVudCA9IGZhbHNlKSB7XG4gICAgaWYgKHNpbGVudCkge1xuICAgICAgdGhpcy5maWx0ZXJDb25mID0ge1xuICAgICAgICBmaWx0ZXJzOiBbXSxcbiAgICAgICAgYW5kT3BlcmF0b3I6IHRydWUsXG4gICAgICB9O1xuICAgICAgdGhpcy5zb3J0Q29uZiA9IFtdO1xuICAgICAgdGhpcy5wYWdpbmdDb25mWydwYWdlJ10gPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldEZpbHRlcihbXSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgdGhpcy5zZXRTb3J0KFtdLCBmYWxzZSk7XG4gICAgICB0aGlzLnNldFBhZ2UoMSk7XG4gICAgfVxuICB9XG5cbiAgZW1wdHkoKTogUHJvbWlzZTxhbnk+IHtcbiAgICB0aGlzLmRhdGEgPSBbXTtcblxuICAgIHJldHVybiBzdXBlci5lbXB0eSgpO1xuICB9XG5cbiAgY291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJlZEFuZFNvcnRlZC5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQXJyYXkgb2YgY29uZiBvYmplY3RzXG4gICAqIFtcbiAgICogIHtmaWVsZDogc3RyaW5nLCBkaXJlY3Rpb246IGFzY3xkZXNjfG51bGwsIGNvbXBhcmU6IEZ1bmN0aW9ufG51bGx9LFxuICAgKiBdXG4gICAqIEBwYXJhbSBjb25mXG4gICAqIEBwYXJhbSBkb0VtaXRcbiAgICogQHJldHVybnMge0xvY2FsRGF0YVNvdXJjZX1cbiAgICovXG4gIHNldFNvcnQoY29uZjogQXJyYXk8YW55PiwgZG9FbWl0ID0gdHJ1ZSk6IExvY2FsRGF0YVNvdXJjZSB7XG4gICAgaWYgKGNvbmYgIT09IG51bGwpIHtcblxuICAgICAgY29uZi5mb3JFYWNoKChmaWVsZENvbmYpID0+IHtcbiAgICAgICAgaWYgKCFmaWVsZENvbmZbJ2ZpZWxkJ10gfHwgdHlwZW9mIGZpZWxkQ29uZlsnZGlyZWN0aW9uJ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTb3J0IGNvbmZpZ3VyYXRpb24gb2JqZWN0IGlzIG5vdCB2YWxpZCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc29ydENvbmYgPSBjb25mO1xuICAgIH1cblxuICAgIHN1cGVyLnNldFNvcnQoY29uZiwgZG9FbWl0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBcnJheSBvZiBjb25mIG9iamVjdHNcbiAgICogW1xuICAgKiAge2ZpZWxkOiBzdHJpbmcsIHNlYXJjaDogc3RyaW5nLCBmaWx0ZXI6IEZ1bmN0aW9ufG51bGx9LFxuICAgKiBdXG4gICAqIEBwYXJhbSBjb25mXG4gICAqIEBwYXJhbSBhbmRPcGVyYXRvclxuICAgKiBAcGFyYW0gZG9FbWl0XG4gICAqIEByZXR1cm5zIHtMb2NhbERhdGFTb3VyY2V9XG4gICAqL1xuICBzZXRGaWx0ZXIoY29uZjogQXJyYXk8YW55PiwgYW5kT3BlcmF0b3IgPSB0cnVlLCBkb0VtaXQgPSB0cnVlKTogTG9jYWxEYXRhU291cmNlIHtcbiAgICBpZiAoY29uZiAmJiBjb25mLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbmYuZm9yRWFjaCgoZmllbGRDb25mKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRmlsdGVyKGZpZWxkQ29uZiwgYW5kT3BlcmF0b3IsIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlckNvbmYgPSB7XG4gICAgICAgIGZpbHRlcnM6IFtdLFxuICAgICAgICBhbmRPcGVyYXRvcjogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyQ29uZi5hbmRPcGVyYXRvciA9IGFuZE9wZXJhdG9yO1xuICAgIHRoaXMucGFnaW5nQ29uZlsncGFnZSddID0gMTtcblxuICAgIHN1cGVyLnNldEZpbHRlcihjb25mLCBhbmRPcGVyYXRvciwgZG9FbWl0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZEZpbHRlcihmaWVsZENvbmY6IGFueSwgYW5kT3BlcmF0b3IgPSB0cnVlLCBkb0VtaXQ6IGJvb2xlYW4gPSB0cnVlKTogTG9jYWxEYXRhU291cmNlIHtcbiAgICBpZiAoIWZpZWxkQ29uZlsnZmllbGQnXSB8fCB0eXBlb2YgZmllbGRDb25mWydzZWFyY2gnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmlsdGVyIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGlzIG5vdCB2YWxpZCcpO1xuICAgIH1cblxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgIHRoaXMuZmlsdGVyQ29uZi5maWx0ZXJzLmZvckVhY2goKGN1cnJlbnRGaWVsZENvbmY6IGFueSwgaW5kZXg6IGFueSkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRGaWVsZENvbmZbJ2ZpZWxkJ10gPT09IGZpZWxkQ29uZlsnZmllbGQnXSkge1xuICAgICAgICB0aGlzLmZpbHRlckNvbmYuZmlsdGVyc1tpbmRleF0gPSBmaWVsZENvbmY7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICB0aGlzLmZpbHRlckNvbmYuZmlsdGVycy5wdXNoKGZpZWxkQ29uZik7XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyQ29uZi5hbmRPcGVyYXRvciA9IGFuZE9wZXJhdG9yO1xuICAgIHN1cGVyLmFkZEZpbHRlcihmaWVsZENvbmYsIGFuZE9wZXJhdG9yLCBkb0VtaXQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0UGFnaW5nKHBhZ2U6IG51bWJlciwgcGVyUGFnZTogbnVtYmVyLCBkb0VtaXQ6IGJvb2xlYW4gPSB0cnVlKTogTG9jYWxEYXRhU291cmNlIHtcbiAgICB0aGlzLnBhZ2luZ0NvbmZbJ3BhZ2UnXSA9IHBhZ2U7XG4gICAgdGhpcy5wYWdpbmdDb25mWydwZXJQYWdlJ10gPSBwZXJQYWdlO1xuXG4gICAgc3VwZXIuc2V0UGFnaW5nKHBhZ2UsIHBlclBhZ2UsIGRvRW1pdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRQYWdlKHBhZ2U6IG51bWJlciwgZG9FbWl0OiBib29sZWFuID0gdHJ1ZSk6IExvY2FsRGF0YVNvdXJjZSB7XG4gICAgdGhpcy5wYWdpbmdDb25mWydwYWdlJ10gPSBwYWdlO1xuICAgIHN1cGVyLnNldFBhZ2UocGFnZSwgZG9FbWl0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldFNvcnQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5zb3J0Q29uZjtcbiAgfVxuXG4gIGdldEZpbHRlcigpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmZpbHRlckNvbmY7XG4gIH1cblxuICBnZXRQYWdpbmcoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5wYWdpbmdDb25mO1xuICB9XG5cbiAgcHJvdGVjdGVkIHByZXBhcmVEYXRhKGRhdGE6IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHtcbiAgICBkYXRhID0gdGhpcy5maWx0ZXIoZGF0YSk7XG4gICAgZGF0YSA9IHRoaXMuc29ydChkYXRhKTtcbiAgICB0aGlzLmZpbHRlcmVkQW5kU29ydGVkID0gZGF0YS5zbGljZSgwKTtcblxuICAgIHJldHVybiB0aGlzLnBhZ2luYXRlKGRhdGEpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNvcnQoZGF0YTogQXJyYXk8YW55Pik6IEFycmF5PGFueT4ge1xuICAgIGlmICh0aGlzLnNvcnRDb25mKSB7XG4gICAgICB0aGlzLnNvcnRDb25mLmZvckVhY2goKGZpZWxkQ29uZikgPT4ge1xuICAgICAgICBkYXRhID0gTG9jYWxTb3J0ZXJcbiAgICAgICAgICAuc29ydChkYXRhLCBmaWVsZENvbmZbJ2ZpZWxkJ10sIGZpZWxkQ29uZlsnZGlyZWN0aW9uJ10sIGZpZWxkQ29uZlsnY29tcGFyZSddKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8vIFRPRE86IHJlZmFjdG9yP1xuICBwcm90ZWN0ZWQgZmlsdGVyKGRhdGE6IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHtcbiAgICBpZiAodGhpcy5maWx0ZXJDb25mLmZpbHRlcnMpIHtcbiAgICAgIGlmICh0aGlzLmZpbHRlckNvbmYuYW5kT3BlcmF0b3IpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJDb25mLmZpbHRlcnMuZm9yRWFjaCgoZmllbGRDb25mOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoZmllbGRDb25mWydzZWFyY2gnXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBkYXRhID0gTG9jYWxGaWx0ZXJcbiAgICAgICAgICAgICAgLmZpbHRlcihkYXRhLCBmaWVsZENvbmZbJ2ZpZWxkJ10sIGZpZWxkQ29uZlsnc2VhcmNoJ10sIGZpZWxkQ29uZlsnZmlsdGVyJ10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbWVyZ2VkRGF0YTogYW55ID0gW107XG4gICAgICAgIHRoaXMuZmlsdGVyQ29uZi5maWx0ZXJzLmZvckVhY2goKGZpZWxkQ29uZjogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGZpZWxkQ29uZlsnc2VhcmNoJ10ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbWVyZ2VkRGF0YSA9IG1lcmdlZERhdGEuY29uY2F0KExvY2FsRmlsdGVyXG4gICAgICAgICAgICAgIC5maWx0ZXIoZGF0YSwgZmllbGRDb25mWydmaWVsZCddLCBmaWVsZENvbmZbJ3NlYXJjaCddLCBmaWVsZENvbmZbJ2ZpbHRlciddKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gcmVtb3ZlIG5vbiB1bmlxdWUgaXRlbXNcbiAgICAgICAgZGF0YSA9IG1lcmdlZERhdGEuZmlsdGVyKChlbGVtOiBhbnksIHBvczogYW55LCBhcnI6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiBhcnIuaW5kZXhPZihlbGVtKSA9PT0gcG9zO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBwcm90ZWN0ZWQgcGFnaW5hdGUoZGF0YTogQXJyYXk8YW55Pik6IEFycmF5PGFueT4ge1xuICAgIGlmICh0aGlzLnBhZ2luZ0NvbmYgJiYgdGhpcy5wYWdpbmdDb25mWydwYWdlJ10gJiYgdGhpcy5wYWdpbmdDb25mWydwZXJQYWdlJ10pIHtcbiAgICAgIGRhdGEgPSBMb2NhbFBhZ2VyLnBhZ2luYXRlKGRhdGEsIHRoaXMucGFnaW5nQ29uZlsncGFnZSddLCB0aGlzLnBhZ2luZ0NvbmZbJ3BlclBhZ2UnXSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG59XG4iXX0=