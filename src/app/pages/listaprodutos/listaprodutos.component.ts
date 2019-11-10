import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-listaprodutos',
  templateUrl: './listaprodutos.component.html',
  styleUrls: ['./listaprodutos.component.css']
})
export class ListaprodutosComponent implements OnInit {

  produtos: Produto[];
  idLogin : String;


  constructor(private produtosService: ProdutosService,
              private alertService: AlertService,
              private router : Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
     this.idLogin = this.activatedRoute.snapshot.paramMap.get("IdLogin");
     this.getProdutosPorLogin(this.idLogin);
  }

  public getProdutosPorLogin(idLogin) {
    this.produtosService.getProdutosPorLogin(idLogin).subscribe(produtos => this.produtos = produtos);
  }

  public DeletarProduto(produto : Produto) {
    this.produtosService.DetelarProduto(produto).subscribe(
      data  => {
        if(data == true){
          this.alertService.success('Produto deletado');
          this.produtos.splice(this.produtos.findIndex(p => p.Id === produto.Id), 1);
        }
        else {
          //console.log(data);
          this.alertService.danger('Problema em deletar produto.');
        }
      },
      error  => {
         this.alertService.danger('Ops. Ocorreu um problema.');
         //console.log("Error", error);
      }  
    );
  }

}
