import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponentComponent } from './dashboard/dashboard-component/dashboard-component.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    DashboardComponentComponent,
  ],
  imports: [BrowserModule, DashboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
