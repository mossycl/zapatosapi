const express = require("express");
const app = express();
const port = 3001;

const { getZapatos, getZapatosById, getZapatosByBrand, getZapatosBySize, getZapatosByTag, filterByPrice } = require("./controller/getZapatos")

app.get("/", getZapatos);

app.get("/:id", getZapatosById);

app.get("/brand/:brand", getZapatosByBrand);

app.get("/size/:size", getZapatosBySize);

app.get("/tag/:tag", getZapatosByTag);

app.get("/price/:minPrice/:maxPrice", filterByPrice);

app.listen(port, () =>{
    console.log(`Conectado con éxito en puerto ${port}`)
});

