import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/app/global';

@Component({
  selector: 'app-cadastroproduto',
  templateUrl: './cadastroproduto.component.html',
  styleUrls: ['./cadastroproduto.component.css']
})
export class CadastroprodutoComponent implements OnInit {

  produto : Produto;
  selectedFile: any;

  constructor(private produtoService : ProdutosService,
              private global : Global,
              private http : HttpClient,
              private activatedRoute: ActivatedRoute) {
    this.produto = new Produto();
  }

  ngOnInit() {
    this.produto.IdLogin = this.activatedRoute.snapshot.paramMap.get("IdLogin");
    this.produto.UrlFoto = this.global.REST_API + "/uploads/semfoto.jpg"
  }

  public Cadastrar() {
    this.produtoService.CadastrarProduto(this.produto).subscribe(
      data  => {
        console.log(data);
        //if(data == true){
        //  this.router.navigate(['CadastroProduto']);
        //}
      },
      error  => {
         console.log("Error", error);
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
        console.log(data);
        //if(data == true){
        //  this.router.navigate(['CadastroProduto']);
        //}
      },
      error  => {
         console.log("Error", error);
      }  
    );
  }


}
