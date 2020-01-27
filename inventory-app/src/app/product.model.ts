//  here we can provide our procuct mode - create the  class with our product
// Class named Product
export class Product {
  constructor (
    // in constructor of class we are defining of procuct parameters types of data, as public types
    public sku: string,
    public name: string,
    public imageUrl: string,
    public department: string[], //here we are declaring a array of strings
    public price: number
  ) {} // in the first step we are leaving empty object
}
