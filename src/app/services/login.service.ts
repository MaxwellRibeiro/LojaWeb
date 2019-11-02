import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private REST_API_SERVER = "http://localhost:300/api/Login";
  private REST_API_LOCAL = "https://localhost:44376/api/Login";

  private configheaders = { headers: { 'Content-Type': 'application/json'} };

  constructor(private httpService: HttpClient) { }

  public VerificarAcesso(login: Login) { 
    return this.httpService.post<Boolean>(this.REST_API_LOCAL + "/Verificar", new Login().serialize(login), this.configheaders );
  }
  
}
