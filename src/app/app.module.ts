import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AppTopBarComponent } from './app-top-bar/app-top-bar.component';
import { CategoryComponent } from './category/category.component';
import { BarComponent } from './bar/bar.component';
import { TopComponent } from './top/top.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { AddProdutComponent } from './admin/add-produt/add-produt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModifyProductComponent } from './admin/modify-product/modify-product.component';



@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    CardComponent,
    DashboardComponent,
    CategoryComponent,
    BarComponent,
    TopComponent,
    ProductListComponent,
    AddProdutComponent,
    ModifyProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
