// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListModule } from './list/list.module';
import { FormModule } from './form/form.module';
import { HttpClientModule } from '@angular/common/http';
import { LoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ListModule,
    FormModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
