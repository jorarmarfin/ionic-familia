import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Miembros } from '../interfaces/Miembros.interface';

const URL = environment.url;
const TOKEN = btoa('user_rest:AjHol8Twac');
const httpOptions = {
  headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${TOKEN}`,
      }
    )
};

@Injectable({
  providedIn: 'root'
})
export class DrupalService {

  constructor(private http:HttpClient) { }

  getMiembros(){
    return this.http.get<Miembros>(`${URL}/miembros?_format=json`,httpOptions);
  }
}
