import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login;

  constructor(private loginServide: LoginService,
              private router: Router) {
    this.login = new Login();
   }

  ngOnInit() {
   
  }

  public Acessar() {
    this.loginServide.VerificarAcesso(this.login).subscribe(
      data  => {
        if(data == true){
          this.router.navigate(['CadastroProduto']);
        }
      },
      error  => {
         console.log("Error", error);
      }  
    );
  }
  
}
