import { Component } from '@angular/core';

@Component({
  selector: 'agave-spirits-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'Orgcontrol';
  links = [{ path: '/spirits', label: 'Spirits' }];
}