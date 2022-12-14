import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {

  @Input() totalPages: number = 0;
  @Input() currentPage: number = 0;

  @Output() goTo: EventEmitter<number> = new EventEmitter<number>();
  @Output() next: EventEmitter<number> = new EventEmitter<number>();
  @Output() previous: EventEmitter<number> = new EventEmitter<number>();

  public pages: number[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(
      (changes['currentPage'] && changes['currentPage'].currentValue) || (changes['totalPages'] && changes['totalPages'].currentValue)
    ) {
      this.pages = this.getPages(this.currentPage, this.totalPages);
    }
  }

  public onGoTo(page: number): void {
    this.goTo.emit(page);
  }

  public onNext(): void {
    this.next.emit(this.currentPage);
  }

  public onPrevious(): void {
    this.previous.next(this.currentPage);
  }

  private getPages(currentPage: number, totalPages: number): number[] {
    if (totalPages <= 7) {
      return [...Array(7).keys()].map(x => ++x)
    }

    if (currentPage > 5) {
      if(currentPage >= totalPages - 4) {
        return [1, -1, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages ];
      } else {
        return [1, -1, currentPage - 1, currentPage, currentPage + 1, - 1, totalPages ]
      }
    }
    
    return [1, 2, 3, 4, 5, -1, totalPages]
  }
}
