const ProductManager = require("./ProductManager.js")
const manager = new ProductManager()

//crear un nuevo producto


manager.addProducto({
    
    title:"Central Perk",
    description:"Taza de serie",
    price:1000,
    thumbnail:"imagen.jpg",
    code:"10930ASDjJk",
    stock:40
    
})

manager.addProducto({
    
    title:"Central Perk",
    description:"Taza de serie",
    price:1000,
    thumbnail:"imagen.jpg",
    code:"10930ASDjJkl",
    stock:40
    
})



//consultar productos
manager.getProductos()
.then(productos => console.log("Productos:", productos))
.catch(error => console.error("Error al consultar productos"))

manager.getProductosById(1)
.then(busquedad => console.log("Busquedad:", busquedad))
.catch(error => console.error("Error al consultar productos"))



manager.updateProducto(1, { 
title:"Central Perk",
description:"Taza de serie",
price:4000,
thumbnail:"imagen.jpg",
code:"10930ASDjJkl",
stock:40 });


manager.deleteProducto(1)
