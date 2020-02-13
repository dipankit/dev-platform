import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';
import { CustomerModule } from './customer/customer.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    ProductModule,
    SharedModule,
    CustomerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
