import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrologin',
  templateUrl: './cadastrologin.component.html',
  styleUrls: ['./cadastrologin.component.css']
})
export class CadastrologinComponent implements OnInit {

  login : Login;

  constructor(private loginService : LoginService,
              private router : Router) { 
    this.login = new Login();
  }

  ngOnInit() {
  }

  public Cadastrar() {
    this.loginService.CadastrarLogin(this.login).subscribe(
      data  => {
        if(data == true){
          this.router.navigate(['Login']);
        }
      },
      error  => {
         console.log("Error", error);
      }  
    );
  }

}
