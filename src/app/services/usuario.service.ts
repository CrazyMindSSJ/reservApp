import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //aqui podemos crear variables:
  usuarios: any[] = [];

  constructor() { }

  //aqui vamos a crear toda nuestra logica de programacion
  //DAO:
  public createUsuarios(usuario:any){}

  public getUsuario(rut:string){}

  public getUsuarios(){}

  public updateUsuarios(rut:string, nuevoUsuario:any){}

  public deleteUsuarios(rut:string){}

}
