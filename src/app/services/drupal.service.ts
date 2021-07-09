import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Historial } from '../interfaces/Historial.interface';
import { Medicamentos } from '../interfaces/Medicamentos.interface';
import { Miembros } from '../interfaces/Miembros.interface';
import { Node } from '../interfaces/Node.interface';
import { Vacunas } from '../interfaces/Vacunas.interface';

const URL = environment.url+'/api';
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
    return this.http.get<Miembros[]>(`${URL}/miembros?_format=json`,httpOptions);
  }
  getVacunas(nid:string){
    return this.http.get<Vacunas[]>(`${URL}/vacuna/${nid}?_format=json`,httpOptions);
  }
  getHistorial(nid:string){
    return this.http.get<Historial[]>(`${URL}/historia/${nid}?_format=json`,httpOptions);
  }
  getMedicamentos(){
    return this.http.get<Medicamentos[]>(`${URL}/medicamentos?_format=json`,httpOptions);
  }
  setNode(node:Node){
    return this.http.post(`${environment.url}/node?_format=json`,node,httpOptions);
  }
  getBuscarMedicamentos(nombre:string){
    return this.http.get<Medicamentos[]>(`${URL}/buscar-medicamentos?_format=json&nombre=${nombre}`,httpOptions);
  }

}
