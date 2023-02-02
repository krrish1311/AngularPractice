import { Component } from '@angular/core';
import { DashboardServiceService } from '../../dashboard-service.service';

@Component({
  selector: 'app-homepage-component',
  templateUrl: './homepage-component.component.html',
  styleUrls: ['./homepage-component.component.css'],
})
export class HomepageComponentComponent {
  constructor(private dashboardServiceService: DashboardServiceService) {
    this.acess_data();
  }
  from_homepage = 'This is an homepage';
  value = 5;
  acess_data() {
    this.dashboardServiceService.getname();
  }
}
