import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NglModule } from 'ng-lightning';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DropdownComponent,
    PageHeaderComponent,
    PaginationComponent,
  ],
  imports: [
    NglModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
