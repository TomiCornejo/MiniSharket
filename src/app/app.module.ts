import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoUsuarioComponent } from './components/info-usuario/info-usuario.component';
import { ProductosScreenComponent } from './screens/productos-screen/productos-screen.component';
import { ProveedoresScreenComponent } from './screens/proveedores-screen/proveedores-screen.component';
import { IngresoScreenComponent } from './screens/ingreso-screen/ingreso-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { InicioScreenComponent } from './screens/inicio-screen/inicio-screen.component';
import { FormsModule } from '@angular/forms';
import { TarjetaProductoComponent } from './components/tarjeta-producto/tarjeta-producto.component';
import { FiltroProductosComponent } from './components/filtro-productos/filtro-productos.component';
import { CarritoVentaComponent } from './components/carrito-venta/carrito-venta.component';
import { TarjetaProveedorComponent } from './components/tarjeta-proveedor/tarjeta-proveedor.component';
import { RevisarCredencialComponent } from './components/revisar-credencial/revisar-credencial.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { CrearCategoriaComponent } from './components/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './components/editar-categoria/editar-categoria.component';
import { CrearProveedorComponent } from './components/crear-proveedor/crear-proveedor.component';
import { FinanzasScreenComponent } from './screens/finanzas-screen/finanzas-screen.component';
import { EditarProveedorComponent } from './components/editar-proveedor/editar-proveedor.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaService } from './services/categoria/categoria.service';
import { ProductoService } from './services/producto/producto.service';
import { ProveedorService } from './services/proveedor/proveedor.service';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrearGastoComponent } from './components/crear-gasto/crear-gasto.component';
import { EditarGastoComponent } from './components/editar-gasto/editar-gasto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfoUsuarioComponent,
    ProductosScreenComponent,
    ProveedoresScreenComponent,
    IngresoScreenComponent,
    RegistroScreenComponent,
    InicioScreenComponent,
    TarjetaProductoComponent,
    FiltroProductosComponent,
    CarritoVentaComponent,
    TarjetaProveedorComponent,
    RevisarCredencialComponent,
    EditarUsuarioComponent,
    CrearProductoComponent,
    EditarProductoComponent,
    CrearCategoriaComponent,
    EditarCategoriaComponent,
    CrearProveedorComponent,
    FinanzasScreenComponent,
    EditarProveedorComponent,
    CrearGastoComponent,
    EditarGastoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ProductoService,CategoriaService,ProveedorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
