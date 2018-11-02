import { Component } from '@angular/core';
import { GetStatesStreetService } from './services/get-states-street.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clientCapston';
  data: any = []
  constructor(private street: GetStatesStreetService  ) {
  street.getAuthors().subscribe(resp => {
    console.log(resp, 'res');
    this.data = resp;
  },
  error => { console.log(error, 'error');
});
} catch (e) {
  console.log(e);
}
}
