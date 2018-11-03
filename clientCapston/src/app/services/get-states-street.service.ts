import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//  const httpOptions = {
//   headers: new HttpHeaders({'username' : 'TBNAbV+B04e543jA9ByvUluen7R10dtf' })
// };
// let headers = new Headers();
// headers = headers.append("Authorization", "Basic " + btoa("TBNAbV+B04e543jA9ByvUluen7R10dtf"));
// headers = headers.append("Content-Type", "application/x-www-form-urlencoded");

@Injectable({
  providedIn: 'root'
})
export class GetStatesStreetService {
  public server = 'http://localhost:8080/';
  public apiUrl = 'api/street';
  public serverWithApiUrl = this.server + this.apiUrl;
  public users;
  constructor(private http: HttpClient) {
  // console.log(this.getStreet());
   }

    getAuthors() {
    const autorisation = btoa('TBNAbV+B04e543jA9ByvUluen7R10dtf' + ":" + '');
    console.log(autorisation);
    const headers =  {headers: new  HttpHeaders().set('Authorization', 'Basic VEJOQWJWK0IwNGU1NDNqQTlCeXZVbHVlbjdSMTBkdGY6')};

    return this.http.get('http://localhost:8080/api/street/', headers);
    }
}
