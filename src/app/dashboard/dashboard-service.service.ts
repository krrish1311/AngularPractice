import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardServiceService {
  constructor() {}
  getname() {
    console.log('Krishan');
  }
}
