import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/models/compra';
import { CompraService } from 'src/app/services/compra.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  compras: Compra[];

  constructor(private compraService: CompraService,
              private alertService: AlertService,
              private router : Router) { 

              }

  ngOnInit() {
    this.compraService.getAllCompras().subscribe(compras => this.compras = compras);
  }

  public DeletarCompra(compra : Compra) {
    this.compraService.DetelarCompra(compra).subscribe(
      data  => {
        if(data == true){
          this.alertService.success('Produto removido');
          this.compras.splice(this.compras.findIndex(p => p.Id === compra.Id), 1);
        }
        else {
          //console.log(data);
          this.alertService.danger('Problema em remover produto.');
        }
      },
      error  => {
         this.alertService.danger('Ops. Ocorreu um problema.');
         //console.log("Error", error);
      }  
    );
  }

}
