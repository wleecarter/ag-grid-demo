import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { FreeComponent } from './free/free.component';

@NgModule({
  declarations: [
    AppComponent,
    FreeComponent,
  ],
  imports: [
    AgGridModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
