import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  produtos: Produto[];

  constructor(private produtosService : ProdutosService) { }

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
      0:    { items: 1, nav: true },
      600:  { items: 1, nav: true },
      1000: { items: 2, nav: true, loop: false },
      1500: { items: 3, nav: true, loop: false }
    }
  }

  images = [{ text: "Everfresh Flowers",   image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/1.jpg" },
            { text: "Festive Deer",        image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/2.jpg" },
            { text: "Morning Greens",      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/3.jpg" },
            { text: "Bunch of Love",       image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/4.jpg" },
            { text: "Blue Clear",          image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg" },
            { text: "Evening Clouds",      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/7.jpg" },
            { text: "Fontains in Shadows", image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/8.jpg" },
            { text: "Kites in the Sky",    image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/9.jpg" },
            { text: "Sun Streak",          image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/10.jpg"}]
}
