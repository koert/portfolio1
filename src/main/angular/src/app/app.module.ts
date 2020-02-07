import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {
  ButtonModule,
  CalendarModule,
  ChartModule,
  DialogModule,
  DropdownModule,
  FileUploadModule,
  InputTextModule,
  MenuModule, MessageService, OverlayPanelModule, PanelModule, SelectButtonModule, SidebarModule, TableModule, ToastModule
} from "primeng";

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
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
