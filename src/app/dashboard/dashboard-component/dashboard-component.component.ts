import { Component } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css'],
})
export class DashboardComponentComponent {
  constructor(public dashboardServiceService: DashboardServiceService) {
    this.access_data();
  }
  from_dashboard = 'This text is from Dashboard Component';
  access_data() {
    this.dashboardServiceService.getname();
  }
}
