import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MzButtonModule, MzInputModule, MzSidenavModule  } from 'ngx-materialize';
import { DashboardComponent } from './dashboard/dashboard.component';

import { OwlModule } from 'ngx-owl-carousel';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { CadastroprodutoComponent } from './pages/cadastroproduto/cadastroproduto.component';
import { LoginComponent } from './pages/login/login.component';

import { Global } from './global';
import { CadastrologinComponent } from './pages/cadastrologin/cadastrologin.component';
import { ProdutodetalhesComponent } from './pages/produtodetalhes/produtodetalhes.component'

import { AlertModule } from 'ngx-alerts';
import { ListaprodutosComponent } from './pages/listaprodutos/listaprodutos.component';
import { AlterarprodutoComponent } from './pages/alterarproduto/alterarproduto.component';
import { ComprasComponent } from './pages/compras/compras.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    CadastroprodutoComponent,
    LoginComponent,
    CadastrologinComponent,
    ProdutodetalhesComponent,
    ListaprodutosComponent,
    AlterarprodutoComponent,
    ComprasComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MzButtonModule,
    MzInputModule,
    MzSidenavModule,
    OwlModule,
    HttpClientModule,
    FormsModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'})
  ],
  providers: [
    Global
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
