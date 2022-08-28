import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProdutComponent } from './admin/add-produt/add-produt.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ProduitComponent } from './produit/produit.component';
const routes: Routes = [
  {
    path: '',
    component: ProduitComponent,
  },
  {
    path:'card',
    component :CardComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'product-List',
    component :ProductListComponent
  },
  {
    path:'add-product',
    component :AddProdutComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
