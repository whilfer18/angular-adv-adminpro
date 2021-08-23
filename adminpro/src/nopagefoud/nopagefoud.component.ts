import { Component } from '@angular/core';

@Component({
  selector: 'app-nopagefoud',
  templateUrl: './nopagefoud.component.html',
  styleUrls: ['./nopagefoud.component.css']
})
export class NopagefoudComponent {

  year = new Date().getFullYear();
}
