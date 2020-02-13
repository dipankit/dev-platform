import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule
  ],
  exports: [
    CarouselComponent
  ]
})
export class SharedModule { }
