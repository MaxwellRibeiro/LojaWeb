import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtodetalhes',
  templateUrl: './produtodetalhes.component.html',
  styleUrls: ['./produtodetalhes.component.css']
})
export class ProdutodetalhesComponent implements OnInit {

  id: String

  constructor(private activatedRoute: ActivatedRoute) {  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("IdProduto");
  }

}
