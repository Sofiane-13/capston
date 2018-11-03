import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trafic-light',
  templateUrl: './trafic-light.component.html',
  styleUrls: ['./trafic-light.component.scss']
})
export class TraficLightComponent implements OnInit {
  @Input() couleur: string;
  feuRouge: String;
  feuOrange: String;
  feuVert: string;
  constructor() {

  }

  ngOnInit() {
    console.log('Je suis dans trafic et jaffiche la couleur', this.couleur);

    if (this.couleur === 'vert') {
      this.feuRouge = 'gray';
      this.feuOrange = 'gray';
      this.feuVert = 'green';
    } else if (this.couleur === 'orange') {
      this.feuRouge = 'gray';
      this.feuOrange = 'orange';
      this.feuVert = 'gray';
    } else if (this.couleur === 'rouge') {
      this.feuRouge = 'red';
      this.feuOrange = 'gray';
      this.feuVert = 'gray';
    }
  }

}
