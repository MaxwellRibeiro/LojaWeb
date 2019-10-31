import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';
import  {map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private REST_API_SERVER = "http://localhost:300/api/produtos";

  constructor(private httpService: HttpClient) { }

  public sendGetRequest(){
    return this.httpService.get(this.REST_API_SERVER);
  }

  public getAllProdutos(): Observable<Produto[]> {
    return this.httpService.get<Produto[]>(this.REST_API_SERVER).pipe(
      map(data => data.map(data => new Produto().deserialize(data)))
    );
  }

}
