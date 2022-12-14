import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url:string = "http://127.0.0.1:8000/miniApi/usuario/";

  constructor(private http:HttpClient) { }

  get(nombre:string,clave:string):Observable<any>{
    let url = this.url + nombre + "/" + clave;
    return this.http.get(url);
  }

  getNombre(nombre:string):Observable<any>{
    let url = this.url + nombre;
    return this.http.get(url);
  }

  getCodigo(nombre:string,codigo:string):Observable<any>{
    let url = this.url + "verificar/" + nombre + "/" + codigo;
    return this.http.get(url);
  }

  getVendedores(id:number){
    let url = this.url + "vendedores/XD/BD/" + id;
    return this.http.get(url);
  }

  post(nombre:string,clave:string,icono:string,tipo:number,codigo:string,minimarket:number = 0){
    let value;
    if(minimarket == 0){
      value = {"nombre":nombre,"clave":clave,"icono":icono,"codigo":codigo,"tipo":tipo};
    }else{
      value = {"nombre":nombre,"clave":clave,"icono":icono,"codigo":codigo,"minimarket":minimarket,"tipo":tipo};
    }
    return this.http.post(this.url,value);
  }

  delete(id:number){
    let url = this.url + "d/d/d/d/" + id;
    return this.http.delete(url);
  }
  
  /*
  opción 1 = Modificar img y contraseña
  opción 2 = Modificar img
  opción 3 = Modificar contraseña
  opcion 4 = Modificar
  */
  put(nombre:string,clave:string,usuario:Usuario,opcion:boolean){
    let url = this.url + nombre + "/" + clave;
    let value;
    if(opcion){
      value = {
        "nombre":usuario.nombre,
        "clave":usuario.clave,
        "icono":usuario.icono,
        "codigo":usuario.codigo
      }
    }else{
      value = {
        "nombre":usuario.nombre,
        "clave":usuario.clave,
        "codigo":usuario.codigo
      }
    }
    return this.http.put(url, value);
  }
}
