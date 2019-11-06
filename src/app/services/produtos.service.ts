import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';
import  {map } from 'rxjs/operators';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private httpService: HttpClient,
              private global : Global) { }
  
  public getAllProdutos(): Observable<Produto[]> {
    return this.httpService.get<Produto[]>(this.global.REST_API +"/api/produtos").pipe(
      map(data => data.map(data => new  Produto().deserialize(data)))
    );
  }

  public CadastrarProduto(produto: Produto) { 
    return this.httpService.post<Boolean>(this.global.REST_API + "/api/produtos/Insert", new Produto().serialize(produto), this.global.CONFIGHEADERS);
  }

}