import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { Produto } from 'src/app/models/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Global } from 'src/app/global';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alterarproduto',
  templateUrl: './alterarproduto.component.html',
  styleUrls: ['./alterarproduto.component.css']
})
export class AlterarprodutoComponent implements OnInit {

  produto : Produto;
  selectedFile: any;

  constructor(private produtoService : ProdutosService,
              private global : Global,
              private router : Router,
              private http : HttpClient,
              private alertService: AlertService,
              private activatedRoute: ActivatedRoute) {
    this.produto = new Produto();
  }

  ngOnInit() {
    const idProduto = this.activatedRoute.snapshot.paramMap.get("IdProduto");
    this.produtoService.getProdutosPorId(idProduto).subscribe(produto =>this.produto = produto);
  }

  public Atualizar() {
    this.produtoService.AtualizarProduto(this.produto).subscribe(
      data  => {
        this.alertService.success('Produto atualizado');
        if(data == true){
          this.router.navigate(['ListaProdutos', this.produto.IdLogin]);
        }
      },
      error  => {
         this.alertService.danger('Ops. Ocorreu um problema.');
         //console.log("Error", error);
      }  
    );
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
   
    this.http.post(this.global.REST_API+'/api/produtos/UploadFiles', uploadData)
    .subscribe(
      data  => {
        this.produto.UrlFoto = this.global.REST_API + data;
        //console.log(data);
      },
      error  => {
         console.log("Error", error);
      }  
    );
  }

}
