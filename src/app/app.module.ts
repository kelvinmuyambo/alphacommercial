import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    ProductsComponent,
    ProductComponent,
    ContactusComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path : '', component : HomeComponent},
      {path : 'home', component : HomeComponent},
      {path : 'categories', component :  CategoriesComponent},
      {path : 'products/:id', component : ProductsComponent},
      {path : 'product/:id', component : ProductComponent},
      {path : 'contactus', component : ContactusComponent},
      {path : 'aboutus', component : AboutusComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
