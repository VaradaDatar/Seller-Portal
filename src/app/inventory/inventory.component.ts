import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription, BehaviorSubject } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements OnInit {

  product : Product;
  
  constructor( private route: ActivatedRoute,
    private router: Router,private http:HttpClient) { }

  ngOnInit() {
 
  }
  
  Inventory(form) {
    console.log(form.value);
    console.log(form.touched);
    console.log(form.submitted);   
  }
  onCreatePost(postData: {name : string;description : string;price :number;category:string;stock :number;productImage : string;})
  {

    console.log(postData);

    this.http .post(' http://localhost:3005/api/product/create',postData).subscribe(responseData => {
        console.log(responseData);
        alert("Product Added Succesfully!!");
      });
  }

  

}