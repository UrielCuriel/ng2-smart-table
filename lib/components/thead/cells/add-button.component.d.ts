import { EventEmitter, AfterViewInit, ElementRef, OnChanges } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
import { DomSanitizer } from '@angular/platform-browser';
export declare class AddButtonComponent implements AfterViewInit, OnChanges {
    private ref;
    private domSanitizer;
    grid: Grid;
    source: DataSource;
    create: EventEmitter<any>;
    isActionAdd: boolean;
    addNewButtonIcon: string;
    addNewButtonContent: any;
    constructor(ref: ElementRef, domSanitizer: DomSanitizer);
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    onAdd(event: any): void;
}
