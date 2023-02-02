import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponentComponent } from './dashboard-component/homepage-component/homepage-component.component';
import { ProfileComponentComponent } from './dashboard-component/profile-component/profile-component.component';

@NgModule({
  declarations: [HomepageComponentComponent, ProfileComponentComponent],
  imports: [CommonModule],
})
export class DashboardModule {}
