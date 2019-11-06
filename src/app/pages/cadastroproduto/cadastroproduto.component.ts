import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastroproduto',
  templateUrl: './cadastroproduto.component.html',
  styleUrls: ['./cadastroproduto.component.css']
})
export class CadastroprodutoComponent implements OnInit {

  produto : Produto;
  selectedFile: any;

  constructor(private produtoService : ProdutosService,
              private router: Router,
              private http : HttpClient) {
    this.produto = new Produto();
  }

  ngOnInit() {
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
   
    this.http.post('https://localhost:44376/api/produtos/UploadFiles', uploadData)
    .subscribe(
      data  => {
        this.produto.UrlFoto = "https://localhost:44376"+data;
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
