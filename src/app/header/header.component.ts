import { Component, OnInit } from '@angular/core';
import { Global } from '../global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  urlLogo : string

  constructor( private global : Global) { }

  ngOnInit() {
    this.urlLogo = this.global.REST_API + "/logo.png";
  }

}
