import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compra } from '../models/compra';
import  {map } from 'rxjs/operators';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private httpService: HttpClient,
              private global : Global) { }

  public getAllCompras(): Observable<Compra[]> {
    return this.httpService.get<Compra[]>(this.global.REST_API +"/api/Compra").pipe(
      map(data => data.map(data => new  Compra().deserialize(data)))
    );
  }

  public Cadastrar(compra: Compra) { 
    return this.httpService.post<Boolean>(this.global.REST_API + "/api/Compra/Insert", new Compra().serialize(compra), this.global.CONFIGHEADERS);
  }

  public DetelarCompra(compra: Compra) { 
    return this.httpService.post<Boolean>(this.global.REST_API + "/api/Compra/Delete", new Compra().serialize(compra), this.global.CONFIGHEADERS);
  }
}
