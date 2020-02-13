import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(page, product) {
    this.router.navigate([page, {product: product}]);
  }
}
