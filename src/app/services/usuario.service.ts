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
  public createUsuarios(usuario:any):boolean{
    if( this.getUsuario(usuario.rut)==undefined ){
      this.usuarios.push(usuario);
      return true;
    }
    return false;
  }

  //HOLA WAPOTE, KE ACE MI LOVE? MUAK
  /*DESPUES DE IMAGINAR UNA VIDA JUNTOS DURANTE HORAS HE DECIDIDO ESCRIBIR ESTE MENSAJE,
  I LUYU POR EVER MI HONNY, NUESTRA BODA SERA LEGENDARIA*/ 

  public getUsuario(rut:string){
    return this.usuarios.find(elemento=> elemento.rut == rut);
  }

  public getUsuarios():any[]{
    return this.usuarios;
  }

  public updateUsuarios(rut:string, nuevoUsuario:any){
    const indice = this.usuarios.findIndex(elemento => elemento.rut == rut);
    this.usuarios[indice]=nuevoUsuario;
    if(indice == -1){
      return false;
    }
    this.usuarios.splice(indice,1);
    return true;  
  }

  public deleteUsuarios(rut:string){
    const indice = this.usuarios.findIndex(elemento => elemento.rut == rut);
    if(indice == -1){
      return false;
    }
    this.usuarios.splice(indice,1);
    return true;
  }

}
