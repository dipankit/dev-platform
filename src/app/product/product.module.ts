import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule
  ]
})
export class ProductModule { }
