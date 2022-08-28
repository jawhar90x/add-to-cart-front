import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private getProductsUrl = "http://localhost:3001/product/"
  private addProductsUrl = "http://localhost:3001/product"
  private deleteProductUrl = "http://localhost:3001/product/"
  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get<any>(this.getProductsUrl);
  }
  AddProduct(product: any) {
    return this.http.post<any>(this.addProductsUrl, product);
  }

  deleteProduct(id: String) {
    return this.http.delete<any>(this.deleteProductUrl + id)
  }
}