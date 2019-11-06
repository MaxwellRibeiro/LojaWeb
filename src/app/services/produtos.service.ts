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
  private REST_API_LOCAL = "https://localhost:44376/api/produtos";

  private configheaders = { headers: { 'Content-Type': 'application/json'} };

  constructor(private httpService: HttpClient) { }
  
  public getAllProdutos(): Observable<Produto[]> {
    return this.httpService.get<Produto[]>(this.REST_API_SERVER).pipe(
      map(data => data.map(data => new Produto().deserialize(data)))
    );
  }

  public CadastrarProduto(produto: Produto) { 
    return this.httpService.post<Boolean>(this.REST_API_LOCAL + "/Insert", new Produto().serialize(produto), this.configheaders );
  }

}