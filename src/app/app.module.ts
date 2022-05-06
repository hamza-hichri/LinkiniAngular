import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelComponent } from './travel/travel.component';
import { FormComponent } from './travel/form/form.component';
import { PostComponent } from './post/post.component';
import { FoormComponent } from './post/foorm/foorm.component';
import { StatComponent } from './stat/stat.component';
import {  ChartModule } from '@syncfusion/ej2-angular-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';





@NgModule({
  declarations: [
    AppComponent,
    TravelComponent,
    FormComponent,
    PostComponent,
    FoormComponent,
    StatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,NgxChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
