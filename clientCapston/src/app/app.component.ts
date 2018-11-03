import { async } from '@angular/core/testing';
import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { GetStatesStreetService } from './services/get-states-street.service';
import { from, interval } from 'rxjs';
import {  } from 'rxjs/observable/interval';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clientCapston';
  data: any = [];
  streets: any = [];
  nord: any;
  sud: any;
  est: any;
  oest: any;

  constructor(private street: GetStatesStreetService  ) {

    const secondsCounter = interval(3000);
    secondsCounter.subscribe(n =>
      this.getData());
    // console.log(this.nord);
// console.log(this.data);
}
getData() {
   this.street.getAuthors().subscribe(resp => {
    // console.log(resp, 'res');
    this.data = resp;
    this.streets = this.data.streets;
    this.nord = this.streets[0].north;
    this.sud = this.streets[0].sud;
    this.est = this.streets[0].est;
    this.oest = this.streets[0].ouest;
    // console.log('-------------------------- De but app component----------------------------------');
    // console.log('nord', this.est);
    // console.log('sud', this.est);
    // console.log('est', this.est);
    // console.log('oest', this.est);
    // console.log('-------------------------- Fin but app component----------------------------------');

    return this.data;

  },
  error => { console.log(error, 'error');
});



}

}
