db.collection("product").insert({
  "_id": ObjectId("c25ebd7cfb0ccfc8cf3e0baf"),
  "nom": "Veggie",
  "descripcio": "Pizza amb tres formatges, ceba, tomaquet natural, alberginia, orenga",
  "preu": "12.75",
  "tipo": "pizza",
  "categoria": "vegetariana"
});

db.collection("clients").insert({
  "_id": ObjectId("549bdc516a818576530fc1bf"),
  "nom": "Laura",
  "cognoms": "Gutiérrez",
  "adreça": {
      "carrer": "Rambla Rubio i Ors",
      "numero": "150",
      "pis": "1",
      "porta": "2",
      "ciutat": "Cornella",
      "codigo postal": "08940",
      "pais": "España"
  },
  "telefono": "607852741",
  "email": "lau@email.com"
});

db.collection("botiga").insert({
  "_id": ObjectId("7d83cfc8c16cedcf83f28ca3"),
  "adreça": "Gran Via de les Corts Catalanes",
  "codigo postal": "08006",
  "localitat": "Barcelona",
  "provincia": "Barcelona",
  "comandas": [
      {
          "_id": ObjectId("f1422488cef7d1b72cea496b"),
          "data registre": ISODate("2022-11-06T15:06:21.595Z"),
          "data entrega": ISODate("2022-11-06T15:07:21.595Z"),
          "tipo": "domicili",
          "repartidor": ObjectId("43923bbd7403baf2aaca84c4"),
          "productos": [
              ObjectId("c25ebd7cfb0ccfc8cf3e0baf")
          ],
          "client": ObjectId("549bdc516a818576530fc1bf")
      }
  ],
  "empleat": [
      {
          "_id": ObjectId("43923bbd7403baf2aaca84c4"),
          "nom": "Geralt",
          "cognoms": "de Rivia",
          "nif": "87572010s",
          "telefon": "669863265",
          "cargo": "repartidor"
      }
  ]
});
