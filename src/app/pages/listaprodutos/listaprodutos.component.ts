import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-listaprodutos',
  templateUrl: './listaprodutos.component.html',
  styleUrls: ['./listaprodutos.component.css']
})
export class ListaprodutosComponent implements OnInit {

  produtos: Produto[];
  idLogin : String;


  constructor(private produtosService: ProdutosService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
     this.idLogin = this.activatedRoute.snapshot.paramMap.get("IdLogin");
     this.getProdutosPorLogin(this.idLogin);
  }

  public getProdutosPorLogin(idLogin) {
    this.produtosService.getProdutosPorLogin(idLogin).subscribe(produtos => this.produtos = produtos);
  }

}
