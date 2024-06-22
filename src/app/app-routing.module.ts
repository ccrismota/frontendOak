import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';

const routes: Routes = [
{
  path: '', component: CadastroComponent,
},
{
  path: 'produto-list', component: ProdutoListComponent
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
