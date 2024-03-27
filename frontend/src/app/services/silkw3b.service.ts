import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/silkw3b.model';
import {environment} from 'src/environments/environment';

const baseUrl = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class Silkw3bService {

  constructor(private http: HttpClient) { }

  contact (data: any): Observable<any>{
    return this.http.post(environment.baseURL, data);
  }

}
