import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Email } from 'src/app/models/email.model';
import { Proveedor } from 'src/app/models/proveedor.model';
import { Telefono } from 'src/app/models/telefono.model';
import { EmailService } from 'src/app/services/email/email.service';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';
import { TelefonoService } from 'src/app/services/telefono/telefono.service';

@Component({
  selector: 'app-proveedores-screen',
  templateUrl: './proveedores-screen.component.html',
  styleUrls: ['./proveedores-screen.component.sass']
})
export class ProveedoresScreenComponent implements OnInit {

  tipo:boolean;
  
  constructor(private proveedorService:ProveedorService,
    private emailService:EmailService,
    private telefonoService:TelefonoService){}

  ngOnInit(): void {
    let datos = sessionStorage.getItem('usuario');
    if (!datos) {
      window.location.href = "/inicio";
    }else{
      let minimarket = JSON.parse(datos || "[]").id;
      if(JSON.parse(datos || "[]").tipo == 1){
        this.tipo = true;
      }else{
        this.tipo = false;
      }

      this.proveedorService.get(minimarket).subscribe(data=>{
        
        this.proveedores = (data as Proveedor[]);

        this.proveedores.forEach(proveedor=>{
          this.emailService.get(proveedor.id).subscribe(data=>{
            if((data as Email).id == 0){
              proveedor.email = []
            }else{
              proveedor.email = (data as Email[]);
            }
          });

          this.telefonoService.get(proveedor.id).subscribe(data =>{
            if((data as Telefono).id == 0){
              proveedor.numero = []
            }else{
              proveedor.numero = (data as Telefono[]);
            }
          });
        });

      });
    }
  }
  w=window.sessionStorage;
  proveedores:Proveedor[] =[];

  crearProveedor(proveedor:Proveedor){
    this.proveedores.push(proveedor);
  }

  eliminarProveedor(proveedor:Proveedor){
    this.proveedorService.delete(proveedor.id).subscribe(data =>{
      console.log(data);
    });
    this.proveedores.splice(this.proveedores.indexOf(proveedor),1);   
  }
  
 
}
