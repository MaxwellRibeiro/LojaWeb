import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { CadastroprodutoComponent } from './pages/cadastroproduto/cadastroproduto.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'CadastroProduto', component: CadastroprodutoComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
