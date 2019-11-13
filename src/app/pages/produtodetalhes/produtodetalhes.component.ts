import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtodetalhes',
  templateUrl: './produtodetalhes.component.html',
  styleUrls: ['./produtodetalhes.component.css']
})
export class ProdutodetalhesComponent implements OnInit {
  
  produto : Produto;

  constructor(private activatedRoute: ActivatedRoute,
              private produtoService : ProdutosService) { 
                this.produto = new Produto();
               }

  ngOnInit() {
    const idProduto = this.activatedRoute.snapshot.paramMap.get("IdProduto");
    this.produtoService.getProdutosPorId(idProduto).subscribe(produto =>this.produto = produto);
  }

}
