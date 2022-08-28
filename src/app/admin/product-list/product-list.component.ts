import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 productList: any;
   
  constructor(private productService: ProduitService ) { }

  ngOnInit(): void {
    
this.productService.getProduct().subscribe({
  next:(res)=>{
    this.productList=res
  },
  error: (error) => {
    console.log(error);
  },
 
  }
  )
  }
  delete(id: string, index: number) {
    this.productList.splice(index, 1);
    this.productService.deleteProduct(id).subscribe({
      next: (result) => {
        console.log(result);
        
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
