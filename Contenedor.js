// Tarea 2
const fs = require('fs');

class Contenedor {
    constructor(archivo){
    let ruta= `./${archivo}.txt`;
    this.archivo = fs.readFileSync(ruta,'utf-8')}

    async save(producto){ 
        try {
            let contenidoJSON = JSON.parse(this.archivo);
            let id_creado = parseInt(contenidoJSON[contenidoJSON.length-1].id)+ 1;
            producto.id = id_creado;
            contenidoJSON.push(producto);
            await fs.promises.writeFile("./productos.txt", JSON.stringify(contenidoJSON, null,2),"utf-8");
        return(console.log(id_creado))}
            catch (error){console.log(error)}}
    

    async getById(id_buscado){
        try {
            let contenidoJSON = JSON.parse(this.archivo);
            let articulo = contenidoJSON.find(e => e.id === id_buscado);
        return articulo;
    } catch (error) {console.log(error)}
    };

    async getAll() {
        try {
            let contenidoJSON = JSON.parse(this.archivo);
        return contenidoJSON;
    } catch (error){console.log(error)} }

    async deleteById(id_eliminar){
        try {
        let contenidoJSON = JSON.parse(this.archivo);
        let removeIndex = contenidoJSON.findIndex(item => item.id === id_eliminar);
        contenidoJSON.splice(removeIndex,1);
        await fs.promises.writeFile("./productos.txt", JSON.stringify(contenidoJSON, null,2),"utf-8")}
        catch (error){console.log(error)}
    }

    async deleteAll(){
        try {
        let contenidoJSON = JSON.parse(this.archivo);
        contenidoJSON.splice(0,contenidoJSON.length);
        await fs.promises.writeFile("./productos.txt", JSON.stringify(contenidoJSON, null,2),"utf-8");
    } catch (error) {
        console.log(error)
    }}

    async length_contenedor(){
        try {
        let contenidoJSON = JSON.parse(this.archivo);
        return contenidoJSON.length
    } catch (error) {
        console.log(error)
    }}}

// Creamos un usuario
let documento1 = new Contenedor ("productos");

let producto1 = {
    title:"Cartuchera",
    price: 350,
    thumbnail : "www.libreria.com/3",
};

// Se invocan los metodos creados. Ir eliminando los // para ejecutar
//documento1.save(producto1);
//documento1.getById(2);
//documento1.getAll();
//documento1.deleteById(2); 
//documento1.deleteAll()
documento1.length_contenedor()

module.exports = Contenedor;

