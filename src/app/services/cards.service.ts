import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cards } from '../models/cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
private BaseUrl="https://sheetdb.io/api/v1/bdgguda0xb8hs";
  constructor(private http:HttpClient) { }

 public insertion():Observable<Cards[]> {
  return this.http.get<Cards[ ]>(`${this.BaseUrl}`);
 }
}
