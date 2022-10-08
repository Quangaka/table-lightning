import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }

  
  //pagination
  public onGoTo(page: number) {
    return page;
  }

  public onNext(page: number) {
      return page + 1;
  }

  public onPrevious(page: number) {
      return page - 1;
  }
    // public paginate(current: number, perPage: number): string[] {
    //     return [...this.items.slice((current - 1) * perPage).slice(0, perPage)]
    //   }
}
