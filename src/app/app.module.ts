import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatTab, MatTabsModule } from '@angular/material/tabs';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

const MaterialModule = [
  MatButtonModule,
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
];
const MaterialComponents = [MatButton, MatTab, MatTable];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UsersTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...MaterialModule,
  ],
  exports: [MatButton],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
