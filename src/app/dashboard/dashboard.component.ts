import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  produtos: any[] = [
    {
      "name": "Notebook Samsung",
      "foto": "https://images-americanas.b2w.io/produtos/01/00/img12/134412/9/134412967_1GG.jpg",
      "descricao2": "Notebook Samsung Expert X30 Intel Core I5 Quad-core 8GB 1TB Tela LED HD 15.6” Windows 10 Home - Cinza.",
      "descricao": "Notebook Samsung Expert X30..."
    },
    {
      "name": "Mcleod  Mueller",
      "foto": "https://images-americanas.b2w.io/produtos/01/00/item/124651/3/124651374_1GG.jpg",
      "descricao2": "Fogão Piso Consul 4 Bocas CFO4N Branco Bivolt.",
      "descricao": "Fogão Piso Consul 4 Bocas C..."
    },
    {
      "name": "Mcleod  Mueller",
      "foto": "https://images-americanas.b2w.io/produtos/01/00/item/124651/3/124651374_1GG.jpg",
      "descricao2": "Fogão Piso Consul 4 Bocas CFO4N Branco Bivolt.",
      "descricao": "Fogão Piso Consul 4 Bocas C..."
    },
    {
      "name": "Aguirre  Ellis",
      "foto": "https://www.idealmarketing.com.br/blog/wp-content/uploads/2018/02/produto.png",
      "descricao": "I am a very simple card. I am good at containing small bits of information."
    },
    {
      "name": "Cook  Tyson",
      "foto": "https://www.idealmarketing.com.br/blog/wp-content/uploads/2018/02/produto.png",
      "descricao": "I am a very simple card. I am good at containing small bits of information."
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  carouselOptions = {
    margin: 25,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: false
      },
      1500: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  }

  images = [
    {
      text: "Everfresh Flowers",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/1.jpg"
    },
    {
      text: "Festive Deer",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/2.jpg"
    },
    {
      text: "Morning Greens",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/3.jpg"
    },
    {
      text: "Bunch of Love",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/4.jpg"
    },
    {
      text: "Blue Clear",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg"
    },
    {
      text: "Evening Clouds",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/7.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/8.jpg"
    },
    {
      text: "Kites in the Sky",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/9.jpg"
    },
    {
      text: "Sun Streak",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/10.jpg"
    }
  ]
}
