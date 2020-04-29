import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ViewFirstComponent } from './view-first/view-first.component';
import { MenuComponent } from './menu/menu.component';
import { TransactionComponent } from './transaction/transaction.component';
import { SearchDropdown } from './search-dropdown';
import { SearchTransaction } from './search-transaction';
import { ValidateNumberDirective } from './validate-number.directive';
import { AppChangeDirective } from './app-change.directive';
@NgModule({
  declarations: [
    AppComponent,
    ViewFirstComponent,
    MenuComponent,
    TransactionComponent,SearchDropdown,SearchTransaction, ValidateNumberDirective, AppChangeDirective
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
