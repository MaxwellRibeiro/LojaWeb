import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { CadastroprodutoComponent } from './pages/cadastroproduto/cadastroproduto.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastrologinComponent } from './pages/cadastrologin/cadastrologin.component';
import { ProdutodetalhesComponent } from './pages/produtodetalhes/produtodetalhes.component'
import { ListaprodutosComponent } from './pages/listaprodutos/listaprodutos.component'
import { AlterarprodutoComponent } from './pages/alterarproduto/alterarproduto.component'

const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'ListaProdutos/:IdLogin', component: ListaprodutosComponent },
  { path: 'AlterarProduto/:IdProduto', component: AlterarprodutoComponent },
  { path: 'CadastroProduto/:IdLogin', component: CadastroprodutoComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'CadastroLogin', component: CadastrologinComponent },
  { path: 'ProdutoDetalhes/:IdProduto', component: ProdutodetalhesComponent },
  { path: '', redirectTo: '/Dashboard', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
