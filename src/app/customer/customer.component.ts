import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {trigger, transition, style, animate, state} from '@angular/animations'

@Component({
  selector: 'app-customer',
  animations: [
    trigger(
      'myAnimation',
      [
        transition(
        ':enter', [
          style({transform: 'translateY(0)'}),
          animate('200ms', style({transform: 'translateY(100%)', 'transition-delay': '200ms'}))
        ]
      ),
      transition(
        ':leave', [
          style({transform: 'translateY(100%)'}),
          animate('200ms', style({transform: 'translateY(0)'}))
        ]
      )]
    )
  ],
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  displayProduct = "all";

  constructor(@Inject(ActivatedRoute) private _activatedroute : ActivatedRoute) { }

  ngOnInit() {
    let product = this._activatedroute.snapshot.paramMap.get('product');
    this.displayProduct = product
  }

  showProduct(product) {
    this.displayProduct = product;
  }
}
