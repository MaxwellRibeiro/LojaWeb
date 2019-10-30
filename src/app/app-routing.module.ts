import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { CadastroprodutoComponent } from './pages/cadastroproduto/cadastroproduto.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'CadastroProduto', component: CadastroprodutoComponent },
  { path: 'Login', component: LoginComponent },
  { path: '', redirectTo: '/Dashboard', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
