import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/silkw3b.model';

const baseUrl = "http://localhost:8080/api/silkw3b/";

@Injectable({
  providedIn: 'root'
})
export class Silkw3bService {

  constructor(private http: HttpClient) { }

  contact (data: any): Observable<any>{
    return this.http.post(baseUrl, data);
  }

}
