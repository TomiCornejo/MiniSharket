import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url: string = "http://127.0.0.1:8000/miniApi/producto/";

  constructor(private http: HttpClient) { }

  get(minimarket: number): Observable<any> {
    let url = this.url + "minimarket/" + minimarket;
    return this.http.get(url);
  }

  getProveedor(proveedor: number){
    let url = this.url + "proveedor/" + proveedor;
    return this.http.get(url);
  }

  post(producto: Producto) {
    let value = {
      "nombre": producto.nombre,
      "stock": producto.stock,
      "precio": producto.precio,
      "nVentas": producto.nVentas,
      "img": producto.img,
      "minimarket": producto.minimarket,
      "unidad": producto.unidad,
      "proveedor": producto.proveedor,
      "categorias": producto.categorias
    };
    return this.http.post(this.url, value);
  }

  put(producto: Producto,bandera:boolean) {
    let url = this.url + producto.id;
    let value;
    if (bandera) {
      value = {
        "nombre": producto.nombre,
        "stock": producto.stock,
        "precio": producto.precio,
        "img": producto.img,
        "minimarket": producto.minimarket,
        "unidad": producto.unidad,
        "proveedor": producto.proveedor,
        "categorias": producto.categorias
      };
    } else {
      value = {
        "nombre": producto.nombre,
        "stock": producto.stock,
        "precio": producto.precio,
        "minimarket": producto.minimarket,
        "unidad": producto.unidad,
        "proveedor": producto.proveedor,
        "categorias": producto.categorias
      };
    }
    return this.http.put(url, value);
  }

  putStock(stock:number,id:number,venta:number){
    let url = this.url + id;
    let value = {
      "stock":stock,
      "nVentas":venta
    }
    return this.http.put(url, value);
  }

  delete(i:number){
    let url =  this.url + i;
    return this.http.delete(url);
  }
}
