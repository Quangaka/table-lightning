import { Component, Input, OnInit } from '@angular/core';
import { Column } from 'src/app/models/Table/Column.model';
import { PaginationService } from 'src/app/services/pagination.service';
import { TableService } from 'src/app/services/table.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    @Input() data!: any[];
    @Input() configs!: Column[];
    menuTHead = [

        { value: 'Select All', icon: 'check' },
        { value: 'Unselect All', icon: 'error' },
        { value: 'Delete Selected Items', icon: 'delete' },
    ];

    menuTBody = [
        { value: 'Open', icon: 'open' },
        { value: 'Edit', icon: 'edit' },
        { value: 'Delete', icon: 'delete' },
    ];

    //select
    public selectedValue: string = 'Unselect All';
    selectedItems: string[] = []; //list ids

    //sort
    public sortfields: {fieldName: string, order:  any}[] = [];

    //pagination
    public currentPage: number = 1;
    public totalPages: number = 18;

    constructor(
        private tableService: TableService,
        private paginationService: PaginationService
    ) { }

    ngOnInit(): void {
    }

    //select
    getSelectedValue(newSelected: string) {
        this.selectedItems = this.tableService.getSelectedValue(this.selectedValue, newSelected, this.selectedItems, this.data);
    }

    onClickCheckbox(itemId: string) {
        this.tableService.onClickCheckbox(this.selectedItems, itemId);
    }

    isItemChecked(itemId: string) {
        return this.tableService.isItemChecked(this.selectedItems, itemId);
    }
    
    //sort
    onSort(fieldName: string, order: any) {
        this.sortfields = this.tableService.onSort(fieldName, order, this.configs, this.sortfields);
        console.log(this.sortfields)
    }
    //pagination
    public onGoTo(page: number) {
        this.currentPage = this.paginationService.onGoTo(page);
    }

    public onNext(page: number) {
        this.currentPage = this.paginationService.onNext(page);
    }

    public onPrevious(page: number) {
        this.currentPage = this.paginationService.onPrevious(page);
    }
}

