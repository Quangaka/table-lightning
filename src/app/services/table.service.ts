import { Injectable } from '@angular/core';
import { Column } from '../models/Table/Column.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }


  //select
  getSelectedValue(selectedValue: string, newSelected: string, selectedItems: string[], data: any[]): string[] {
      selectedValue = newSelected;
      let arrayResult: string[] = [];
      if (selectedValue === 'Unselect All') {
        arrayResult = this.setUnselectedAll(selectedItems);
      } else if (selectedValue === 'Select All') {
        arrayResult = this.setSelectedAll(selectedItems, data);
      }
      return arrayResult
  }

  onClickCheckbox(selectedItems: string[], itemId: string) {
      const indexId =selectedItems.findIndex(e => {
          return e === itemId;
      })
      if (indexId > -1) {
          selectedItems.splice(indexId, 1);
      }
      else {
          selectedItems.push(itemId);
      }
  }

  setSelectedAll(selectedItems: string[], data: any[]): string[] {
    return  selectedItems = data.map(c => c.id)
  }

  setUnselectedAll(selectedItems: string[]): string[] {
    return  selectedItems = [];
  }

  isItemChecked(selectedItems: string[], itemId: string) {
      return selectedItems.includes(itemId);
  }

  //sort
  onSort(fieldName: string, order: any, configs: Column[], sortfields: any[]): any[] {
      if(order === 'asc') {
          configs.map(col => {
              if(col.fieldName === fieldName) {
                  col.direction = 'desc';
              }
          })

      } 
      else {
          configs.map(col => {
              if(col.fieldName === fieldName) {
                  col.direction = 'asc';
              }
          })
      }
    return this.getSortFields(sortfields, configs);
  }
  getSortFields(sortfields: any[], configs: Column[]) {
      // col -> sortable true -> {col.fieldName, col.direction}
    return sortfields = configs
          .filter(c => c.sortable && c.direction !== null)
          .map(c => ({
              fieldName: c.fieldName, order: c.direction
          }));
  }
}
