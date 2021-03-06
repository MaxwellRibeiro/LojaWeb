import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login.model';
import { Global } from '../global';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpService: HttpClient,
              private global : Global) { }

  public VerificarAcesso(login: Login) { 
    return this.httpService.post<number>(this.global.REST_API + "/api/Login/Verificar", new Login().serialize(login), this.global.CONFIGHEADERS);
  }

  public CadastrarLogin(login: Login) { 
    return this.httpService.post<Boolean>(this.global.REST_API + "/api/Login/Insert", new Login().serialize(login), this.global.CONFIGHEADERS);
  }

  public getLoginPorId(idlogin): Observable<Login> {
    return this.httpService.get<Login>(this.global.REST_API +"/api/Login/BuscaLoginPorId?idlogin="+idlogin).pipe(
      map(data => new Login().deserialize(data))
    );
  }
  
}
