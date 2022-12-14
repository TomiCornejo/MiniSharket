import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from 'src/app/models/proveedor.model';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  url:string = "http://127.0.0.1:8000/miniApi/proveedor/";

  constructor(private http:HttpClient) { }

  //Listar todos los proveedores
  get(minimarket:number):Observable<any>{
    let url = this.url +"minimarket/" + minimarket;
    return this.http.get(url);
  }

  post(nombre:string,minimarket:number){
    let value = {
      "nombre":nombre,
      "minimarket":minimarket
    }
    return this.http.post(this.url, value);
  }

  put(nombre:string,id:number){
    let url = this.url + id;
    let value = {
      "nombre":nombre
    }
    return this.http.put(url, value);
  }

  delete(id:number){
    let url = this.url + id;
    return this.http.delete(url);
  }
}
