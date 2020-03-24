import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OderModel} from '../../model/oder.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url = 'http://localhost:3000/authorized/order';

  constructor(
    private http: HttpClient
  ) { }

  getOrders(): Observable<OderModel[]> {
    return this.http.get<OderModel[]>(this.url);
  }
}
