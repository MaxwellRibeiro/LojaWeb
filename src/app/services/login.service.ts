import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private REST_API_SERVER = "http://localhost:300/api/produtos";


  constructor(private httpService: HttpClient) { }

  public VerificarAcesso(login: Login): Observable<Boolean> {
    return this.httpService.post<Boolean>(this.REST_API_SERVER, new Login().serialize(login)).pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );
  }
  
}
