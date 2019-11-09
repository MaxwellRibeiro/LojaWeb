import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login;

  constructor(private loginServide: LoginService,
              private router: Router,
              private alertService: AlertService) {
    this.login = new Login();
   }

  ngOnInit() {
   
  }

  public Acessar() {
    this.loginServide.VerificarAcesso(this.login).subscribe(
      data  => {
        console.log(data);
        if(data > 0){
          this.alertService.success('Acesso autorizado');
          this.router.navigate(['CadastroProduto', data]);
        }
        else {
          console.log(data);
          this.alertService.danger('Acesso negado.');
        }
      },
      error  => {
         this.alertService.danger('Ops. Ocorreu um problema.');
         //console.log("Error", error);
      }  
    );
  }

  public CriarNovo() {
    this.router.navigate(['CadastroLogin']);
  }
  
}
