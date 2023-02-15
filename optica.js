// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// Select the database to use.
// =========================================================================== Òptica

db.dropDatabase();

/* db = db.getSiblingDB('òptica');
db.proveedores.drop();
db.clientes.drop();
 */
db.proveedores.insertMany(
    [
     {
       _id: 1,
       nombre: "Nike",
       telefono: "954752452",
       fax: "9547813548",
       nif: "K61421852",
       direccion:{
         calle: 'Avenida Quokka',
         numero: 7,
         piso: 9,
         puerta: "A",
         ciudad: "Madrid",
         codigopostal: "28942",
         pais: "España"
       }
     },
    {
       _id: 2,
       nombre: "Prada",
       telefono: "935478452",
       fax: "935874158",
       nif: "D26497694",
       direccion:{
         calle: 'Plaza Sylvia Plath',
         numero: 26,
         piso: 1,
         puerta: 3,
         ciudad: "Barcelona",
         codigopostal: "08005",
         pais: "España"
       },
     },
      {
       _id: 3,
       nombre: "Eyeglass Paradise",
       telefono: "7257878",
       fax: "954785236",
       nif: "51816119d",
       direccion:{
         calle: 'Calle scripts',
         numero: 107,
         piso: 8,
         puerta: "B",
         ciudad: "Santander",
         codigopostal: "97410",
         pais: "España"
       }
     }
    ]
   )
   
   
   db.clientes.insertMany(
    [
     {
       _id: 1,
       nombre: "Eugenia",
       telefono: "625491226",
       email: "eugenia@mail.com",
       fecha_registro: ISODate("2023-01-03T23:30:15.123Z"),
       recomendado_por: ObjectId("5349b4ddd2781d08c09890f4"),
       fecha_venta: ISODate("2023-01-03T23:30:15.123Z"),
       empleado_venta: "Omar",
       direccion:{
         calle: 'Carrer Donosti',
         numero: 7,
         piso: 4,
         puerta: 1,
         ciudad: "Cornellà de Llobregat",
         codigopostal: "08940",
         pais: "España"
       },
         gafas_compradas:
         [
           {
           marca: "Nike",
           graduacion_izq: 1.25,
           graduacion_der: 0.75,
           tipo_montura: "metálica",
           color_montura: "rojo",
           color_cristales: "azul",
           precio: 250,
           proveedor_id: 1
           }
         ]
     },
     {
       _id: 2,
       nombre: "Pepe",
       telefono: "655615157",
       email: "pepepepe@email.com",
       fecha_registro: ISODate("2022-08-03T23:30:15.123Z"),
       recomendado_por: ObjectId("5349b4ddd2781d08c09890f4"),
       fecha_venta: ISODate("2022-08-03T23:30:15.123Z"),
       empleado_venta: "Tina",
       direccion:{
         calle: 'Calle Courel',
         numero: 585,
         piso: 9,
         puerta: 2,
         ciudad: "Lleida",
         codigopostal: "08694",
         pais: "España"
       },
         gafas_compradas:
         [
           {
             marca: "Prada",
             graduacion_izq: 0.50,
             graduacion_der: 1.10,
             tipo_montura: "pasta",
             color_montura: "verde",
             color_cristales: "transparente",
             precio: 190,
             proveedor_id: 2
           },
           {        
             marca: "Nike",
             graduacion_izq: 0.25,
             graduacion_der: 0.35,
             tipo_montura: "pasta",
             color_montura: "negro",
             color_cristales: "transparente",
             precio: 150,
             proveedor_id: 1
           }
         ]
     }
    ] 
   )
