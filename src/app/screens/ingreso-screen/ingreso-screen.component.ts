import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-ingreso-screen',
  templateUrl: './ingreso-screen.component.html',
  styleUrls: ['./ingreso-screen.component.sass']
})
export class IngresoScreenComponent implements OnInit {

  nombre:string = "";
  clave:string = "";
  verificacion:boolean = true;

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    let datos = sessionStorage.getItem('usuario');
    if (datos) {
      window.location.href = "/inicio";
    }
  }

  ingresar(){
    this.usuarioService.get(this.nombre,this.clave).subscribe(data=>{
      if(data){
        if(data.tipo == 1){
          sessionStorage.setItem('usuario',JSON.stringify({"id":data.id,"nombre":data.nombre,"icono":data.icono,"tipo":data.tipo,"codigo":data.codigo}));
        }else{
          sessionStorage.setItem('usuario',JSON.stringify({"id":data.minimarket,"nombre":data.nombre,"icono":data.icono,"tipo":data.tipo,"codigo":data.codigo}));
        }
        window.location.href="/inicio";
        this.verificacion = true;
      }else{
        // alert("No se pudo ingresar 🤨");
        this.verificacion = false;

      }
    });
  }

}
