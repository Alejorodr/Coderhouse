class Product {
    constructor(id, title, description, price, thumbnail, code, stock) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
      this.code = code;
      this.stock = stock;
    }
  }
  
  class ProductManager {
    constructor() {
      this.products = [];
      this.currentId = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      // Validar campos obligatorios
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error("Todos los campos son obligatorios.");
        return;
      }
  
      // Verificar código único
      if (this.products.some(product => product.code === code)) {
        console.error("El código del producto ya existe. Ingrese un código único.");
        return;
      }
  
      // Agregar producto con id autoincrementable
      const newProduct = new Product(this.currentId++, title, description, price, thumbnail, code, stock);
      this.products.push(newProduct);
      console.log(`Producto agregado: ${newProduct.title}`);
    }
  
    getProductById(productId) {
      const foundProduct = this.products.find(product => product.id === productId);
      if (foundProduct) {
        return foundProduct;
      } else {
        console.error(`Producto con ID ${productId} no encontrado.`);
        return null;
      }
    }
  
    getProducts() {
      return this.products;
    }
  }