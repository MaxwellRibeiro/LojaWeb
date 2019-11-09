import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-cadastrologin',
  templateUrl: './cadastrologin.component.html',
  styleUrls: ['./cadastrologin.component.css']
})
export class CadastrologinComponent implements OnInit {

  login : Login;

  constructor(private loginService : LoginService,
              private router : Router,
              private alertService: AlertService) { 
    this.login = new Login();
  }

  ngOnInit() {
  }

  public Cadastrar() {
    this.loginService.CadastrarLogin(this.login).subscribe(
      data  => {
        if(data == true){
          this.alertService.success('Login cadastrado');
          setTimeout(() => 
          {
             this.router.navigate(['Login']);
          },
          1000);
        }
      },
      error  => {
        this.alertService.danger('Ops. Ocorreu um problema.');
        //console.log("Error", error.message);
      }  
    );
  }

}
