export interface SourceSettings<T> {
    mode?: 'external' | 'inline';
    hideHeader?: boolean;
    hideSubHeader?: boolean;
    noDataMessage?: string;
    attr?: {
        id?: string;
        class?: string;
    };
    actions?: {
        columnTitle?: string;
        add?: boolean;
        edit?: boolean;
        delete?: boolean;
        position?: 'left' | 'right';
    };
    filter?: {
        inputClass: string;
    };
    edit?: {
        inputClass?: string;
        editButtonContent?: string;
        saveButtonContent?: string;
        cancelButtonContent?: string;
        editButtonIcon?: string;
        saveButtonIcon?: string;
        cancelButtonIcon?: string;
        confirmSave?: boolean;
    };
    add?: {
        inputClass?: string;
        addButtonContent?: string;
        createButtonContent?: string;
        cancelButtonContent?: string;
        addButtonIcon?: string;
        createButtonIcon?: string;
        cancelButtonIcon?: string;
        confirmCreate?: boolean;
    };
    delete?: {
        inputClass?: string;
        deleteButtonContent?: string;
        cancelButtonContent?: string;
        deleteButtonIcon?: string;
        cancelButtonIcon?: string;
        confirmDelete?: boolean;
    };
    pager?: {
        display?: boolean;
        perPage?: number;
    };
    columns: {
        [K in keyof T]?: Column<T, K>;
    };
    rowClassFunction?(row?: T): any;
}



interface Column<T, K extends keyof T> {
    title?: string;
    class?: string;
    width?: string;
    editable?: boolean;
    type?: 'text' | 'html' | 'custom';
    renderComponent?: any;
    editor?: Editor | false;
    filer?: Editor | false;
    sort?: boolean;
    sortDirection?: 'asc' | 'desc';
    filterFunction?(cell: T[K], search: string): any;
    onComponentInitFunction?(instance?): any;
    valuePrepareFunction?(cell?: T[K], row?: T): any;
}

interface Editor {
    type: 'text' | 'textarea' | 'completer' | 'list' | 'checkbox';
    config?: {
        true?: string;
        false?: string;
        list?: { value: any, title: string }[]
        completer?: Completer;
    };

}



interface Completer {
    data?: any[];
    searchFields?: string;
    titleField?: string;
    descriptionField?: string;
}
