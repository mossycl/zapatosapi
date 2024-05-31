const { request, response } = require("express");
const { zapatos } = require("../zapatos");


const getZapatos = (req = request, res = response) =>{
    return res.json({
        ok : true,
        statusCode : 200,
        zapatos
    });
};

const getZapatosById = (req = request, res = response) => {
    const id = req.params.id;

    const zapatoFound = 
        zapatos.find((zapato) => {
        return parseInt(zapato.id) === parseInt(id)
    });

    if (zapatoFound){
        return res.json({
            ok:true,
            statusCode : 200,
            zapatoFound
        })
    } else {
        return res.json({
            ok : false,
            statusCode : 404,
            message : "El producto buscado no existe"
        })
    };
};

const getZapatosByBrand = (req = request, res, response) => {
    const brand = req.params.brand;

    const zapatoFound = 
        zapatos.filter((zapato) => {
        return zapato.brand.toLowerCase().startsWith(brand.toLowerCase());
    });

    if (zapatoFound){
        return res.json({
            ok:true,
            statusCode : 200,
            zapatoFound
        })
    } else {
        return res.json({
            ok : false,
            statusCode : 404,
            message : "El producto buscado no existe"
        })
    };
};

const getZapatosBySize = (req = request, res = response) => {
    const size = parseInt(req.params.size);

    const zapatoFound =
        zapatos.filter((zapato) => {
            if (zapato.sizes.includes(size)) {
                return zapato
            }
    });

    if (zapatoFound){
        return res.json({
            ok:true,
            statusCode : 200,
            zapatoFound
        })
    } else {
        return res.json({
            ok : false,
            statusCode : 404,
            message : "El producto buscado no existe"
        })
    };
};

const getZapatosByTag = (req = request, res = response) => {
    const tag = req.params.tag;

    const zapatoFound =
        zapatos.filter((zapato) => {
            if (zapato.tag.includes(tag)) {
                return zapato
            };
    });

    if (zapatoFound){
        return res.json({
            ok:true,
            statusCode : 200,
            zapatoFound
        })
    } else {
        return res.json({
            ok : false,
            statusCode : 404,
            message : "El producto buscado no existe"
        })
    };
};

const filterByPrice = (req = request, res = response) => {
    const minPrice = req.params.minPrice
    const maxPrice = req.params.maxPrice

    const zapatoFound = 
        zapatos.filter((zapato) => {
            if (zapato.price <= maxPrice && zapato.price >= minPrice) {
                return zapato
            };
    });

    if (zapatoFound){
        return res.json({
            ok:true,
            statusCode : 200,
            zapatoFound
        })
    } else {
        return res.json({
            ok : false,
            statusCode : 404,
            message : "El producto buscado no existe"
        })
    };
}

module.exports = {
    getZapatos,
    getZapatosById,
    getZapatosByBrand,
    getZapatosBySize,
    getZapatosByTag,
    filterByPrice
};
