import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ProduitService } from 'src/app/service/produit.service';
@Component({
  selector: 'app-add-produt',
  templateUrl: './add-produt.component.html',
  styleUrls: ['./add-produt.component.css']
})
export class AddProdutComponent implements OnInit {
  myForm: FormGroup;
  selectedFile: any;
  imageUrl = 'assets/imgage/default.jpg';

  constructor(
    private fb: FormBuilder,
    private productService: ProduitService,
    private router: Router,

  ) {
    let produit = {
      name: new FormControl('', [
        Validators.required,
       
      ]),
      serie: new FormControl('', [
        Validators.required,
        
      ]),
      prix: new FormControl('', [
        Validators.required,
        
      ]),
      cat: new FormControl('', [
        Validators.required,
         
      ]),
    }
    this.myForm = this.fb.group(produit)
  }

  ngOnInit(): void { }

  save(event: any) {
    let reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => {
      // called once readAsDataURL is completed
      this.imageUrl = (event.target as FileReader).result!.toString();
    };

    this.selectedFile = event.target.files[0];
  }



  get name() { return this.myForm.get('name') }

  add() {
    let data = this.myForm.value;
    console.log(data);
    
    let formData = new FormData();

    formData.append('name', data.name);
    formData.append('serie', data.serie);
    formData.append('prix', data.prix);
    formData.append('cat', data.cat);
    formData.append('picture', this.selectedFile);

    this.productService.AddProduct(formData).subscribe({
      next: (result) => {
        console.log(result);

        this.router.navigate(['/product-List']);
      },
      error: (error) => {

        console.log(error);
      },
    });
  }
}
