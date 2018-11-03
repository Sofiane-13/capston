import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-trafic-light',
  templateUrl: './trafic-light.component.html',
  styleUrls: ['./trafic-light.component.scss']
})
export class TraficLightComponent implements OnInit, OnChanges {
  @Input() couleur: string;
  feuRouge: String;
  feuOrange: String;
  feuVert: string;
  constructor() {

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('-------------------------- De but Onchange----------------------------------');

// this.couleur = changes.couleur.currentValue;
console.log('YAMMEEEEEEEEEEEENNNNNNN', changes.couleur.currentValue);
this.configTraficLight();
console.log('-------------------------- Fin Onchange----------------------------------');

  }
  ngOnInit() {
    console.log('Je suis dans trafic et jaffiche la couleur', this.couleur);

  }
  configTraficLight() {
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
