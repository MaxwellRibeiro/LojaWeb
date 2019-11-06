import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastroproduto',
  templateUrl: './cadastroproduto.component.html',
  styleUrls: ['./cadastroproduto.component.css']
})
export class CadastroprodutoComponent implements OnInit {

  produto : Produto;

  constructor(private produtoService : ProdutosService,
              private router: Router) {
    this.produto = new Produto();
  }

  ngOnInit() {
  }

  public Cadastrar() {
    this.produtoService.CadastrarProduto(this.produto).subscribe(
      data  => {
        console.log(data);
        //if(data == true){
        //  this.router.navigate(['CadastroProduto']);
        //}
      },
      error  => {
         console.log("Error", error);
      }  
    );
  }


}
