import { Component } from "@angular/core";
import { GetStatesStreetService } from "./services/get-states-street.service";
import { interval } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "clientCapston";
  data: any = [];
  streets: any = [];
  nord: any;
  sud: any;
  est: any;
  oest: any;
  streetId: any;
  date: any;

  constructor(private street: GetStatesStreetService) {
    const secondsCounter = interval(100);
    secondsCounter.subscribe(n => this.getData());
  }
  getData() {
    this.street.getAuthors().subscribe(
      resp => {
        this.data = resp;
        this.streets = this.data.streets;
        this.nord = this.streets[0].north;
        this.sud = this.streets[0].sud;
        this.est = this.streets[0].est;
        this.oest = this.streets[0].ouest;
        this.streetId = this.streets[0].streetId;
        this.date = this.streets[0].date;

        return this.data;
      },
      error => {
        console.log(error, "error");
      }
    );
  }
}
