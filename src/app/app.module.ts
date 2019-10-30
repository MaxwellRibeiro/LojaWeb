import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    CadastroprodutoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MzButtonModule,
    MzInputModule,
    MzSidenavModule,
    OwlModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
