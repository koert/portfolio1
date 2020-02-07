import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {ChartModule} from "primeng/chart";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {FileUploadModule} from "primeng/fileupload";
import {InputTextModule} from "primeng/inputtext";
import {MenuModule} from "primeng/menu";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {PanelModule} from "primeng/panel";
import {MessageService, SelectButtonModule, SidebarModule} from "primeng/primeng";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpClientModule,
    AppRoutingModule,

    // PrimeNG
    ButtonModule, CalendarModule, ChartModule, DialogModule, DropdownModule, FileUploadModule, InputTextModule,
    MenuModule, OverlayPanelModule, PanelModule, SelectButtonModule, SidebarModule, TableModule, ToastModule

  ],
  providers: [
    // PrimeNg
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
