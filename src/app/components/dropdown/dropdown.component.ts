import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/models/MenuItem.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() menu !: MenuItem[];
  @Input() side !: string;
  @Output() selectedValue = new EventEmitter<string>();
  public open!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(value: string) {
    this.selectedValue.emit(value);
    this.open = false;
  }

}
