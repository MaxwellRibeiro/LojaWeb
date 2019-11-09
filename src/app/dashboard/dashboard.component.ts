import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { Produto } from '../models/produto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  produtos: Produto[];

  constructor(private produtosService : ProdutosService,
              private router: Router) { }

  ngOnInit() {
    this.getAllUsers();
 }

  public getAllUsers() {
    this.produtosService.getAllProdutos().subscribe(produtos => this.produtos = produtos);
  }

  carouselOptions = {
    margin: 25,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0:    { items: 1, nav: true }
    }
  }

  images = [{ image: "https://images-submarino.b2w.io/spacey/2019/11/08/AreaVip_Destaque_Desk-1principal.png" },
            { image: "https://images-submarino.b2w.io/spacey/2019/11/08/AreaVip_Destaque_Desk-3TVS.png" },
            { image: "https://images-submarino.b2w.io/spacey/2019/11/08/AreaVip_Destaque_Desk-5ELETRODOMESTICOS.png" },
            { image: "https://images-submarino.b2w.io/spacey/2019/11/08/AreaVip_Destaque_Desk-6LIVROS.png" },
            { image: "https://images-submarino.b2w.io/spacey/2019/11/08/AreaVip_Destaque_Desk-9quemdissebe.png" }]
}
