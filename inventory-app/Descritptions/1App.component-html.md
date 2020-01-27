# Basic app component.

That is the component which is a code html of our basic app structure.

### app.component.html:

<div class="inventory-app">
  <products-list
    [productList]="products"
    (onProductSelected)="productWasSelected($event)"
  >
  </products-list>
</div>

As we can see here is just the one inventory component of our application.
