import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Compra } from 'src/app/models/compra';
import { CompraService } from 'src/app/services/compra.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-produtodetalhes',
  templateUrl: './produtodetalhes.component.html',
  styleUrls: ['./produtodetalhes.component.css']
})
export class ProdutodetalhesComponent implements OnInit {
  
  produto : Produto;
  compra : Compra;

  constructor(private activatedRoute: ActivatedRoute,
              private produtoService : ProdutosService,
              private compraService : CompraService,
              private router : Router,
              private alertService: AlertService,
  ) { 
      this.produto = new Produto();
      this.compra = new Compra();
  }

  ngOnInit() {
    const idProduto = this.activatedRoute.snapshot.paramMap.get("IdProduto");
    this.produtoService.getProdutosPorId(idProduto).subscribe(produto =>{
      this.produto = produto;
      this.compra.IdProduto = produto.Id;
      this.compra.NomeProduto = produto.Nome;
      this.compra.NomeLoja = produto.NomeLoja;
      this.compra.Quantidade = 1;
    });
  }

  public Comprar() {
    this.compra.PrecoTotal = this.produto.Preco * this.compra.Quantidade;
    this.compraService.Cadastrar(this.compra).subscribe(
      data  => {
        this.alertService.success('Adicionado no carrinho de compras');
        if(data == true){
          this.router.navigate(['/']);
        }
      },
      error  => {
         this.alertService.danger('Ops. Ocorreu um problema.');
         //console.log("Error", error);
      }  
    );
  }

}
