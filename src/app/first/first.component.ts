import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  message = 'from the first.component.ts!';
  id_from_component = 'p1';
  fontcolor = 'blue';
  from_component() {
    document.write('This text has been controlled from the component file');
    alert('This text has been controlled from the component file');
  }
}
