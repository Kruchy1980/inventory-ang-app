// Firtly as in all of the modules we are importing needed things/libraries/packages/etc.
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/core'
// Here we are exporting generated by us components
import { AppComponent } from './app.component'
import { ProcuctImageComponent } from './product-image/product-image.component'
import { ProductDepartmentComponent } from './product-department/product-department.component'
import { PriceDisplayComponent } from './price-display/price-display.component'
import { ProductRowComponent } from './product-row/product-row.component'
import { ProductsListComponent } from './products-list/products-list.component'

import { AppRoutingModule } from './app-routing.module'
import { from } from 'rxjs'

// in NgModule we are adding the singular components of our application step by step as in progress.
@NgModule({
  declarations: [
    AppComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    PriceDisplayComponent,
    ProductRowComponent,
    ProductsListComponent
  ],
  // Under imports we are importing the needed main modules we are using for application
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
// And finally we are exporting this module in case of needs to use it in other components
export class AppModule {}
