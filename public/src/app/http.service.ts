import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class HttpService {
  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {
  }

  addCake(newCake) {
    return this._http.post('/cakes', newCake);
  }

  showCake(id) {
    return this._http.get('/cakes/' + id);
  }

  getCakes() {
    return this._http.get('/cakes');
  }

  updateCake(id, newTask2) {
    return this._http.put('/cakes/' + id, newTask2);
  }

  removeCake(id) {
    console.log('from removeCake()', id);
    const url = '/cakes/' + id;
    return this._http.delete(url);
  }
}
