
/* 

    TODO: calcualte the usage of different fertilizers. . total_quanity

        output => 
        {
            urea : 10,
            other : 20,
            compost: 10
        }



    TODO: calcualte the usage of fertilizers in different agricultural products..
    
    output => 
    {
        rice:{
            urea : 10,
            other: 20,
        }
        corn: {
            urea:20,
            other:10,
        }
    }
   
*/

let agricultural_products = [
    {
        "id": 1,
        "annual_production_quantity": "100.00",
        "annual_sales_quantity": "80.00",
        "land_area_coverage": "00-00-15-00-00",
        "fertilizer_quantity": "10.00",
        "other_fertilizer": "compost",
        "agricultural_product_type_id": 1,
        "agricultural_profile_id": 4,
        "fertilizer_id": 1
    },
    {
        "id": 2,
        "annual_production_quantity": "100.00",
        "annual_sales_quantity": "80.00",
        "land_area_coverage": "00-00-15-00-00",
        "fertilizer_quantity": "10.00",
        "other_fertilizer": "compost",
        "agricultural_product_type_id": 1,
        "agricultural_profile_id": 5,
        "fertilizer_id": 1
    },
    {
        "id": 3,
        "annual_production_quantity": "200.00",
        "annual_sales_quantity": "180.00",
        "land_area_coverage": "00-00-15-00-00",
        "fertilizer_quantity": "10.00",
        "other_fertilizer": null,
        "agricultural_product_type_id": 1,
        "agricultural_profile_id": 5,
        "fertilizer_id": 2
    },
    {
        "id": 4,
        "annual_production_quantity": "200.00",
        "annual_sales_quantity": "180.00",
        "land_area_coverage": "00-00-15-00-00",
        "fertilizer_quantity": "10.00",
        "other_fertilizer": null,
        "agricultural_product_type_id": 3,
        "agricultural_profile_id": 5,
        "fertilizer_id": 3
    },
    {
        "id": 5,
        "annual_production_quantity": "100.00",
        "annual_sales_quantity": "80.00",
        "land_area_coverage": "00-00-15-00-00",
        "fertilizer_quantity": "10.00",
        "other_fertilizer": "compost",
        "agricultural_product_type_id": 1,
        "agricultural_profile_id": 6,
        "fertilizer_id": 1
    },
    {
        "id": 6,
        "annual_production_quantity": "200.00",
        "annual_sales_quantity": "180.00",
        "land_area_coverage": "00-00-15-00-00",
        "fertilizer_quantity": "10.00",
        "other_fertilizer": null,
        "agricultural_product_type_id": 2,
        "agricultural_profile_id": 6,
        "fertilizer_id": 2
    },
    {
        "id": 7,
        "annual_production_quantity": "200.00",
        "annual_sales_quantity": "180.00",
        "land_area_coverage": "00-00-15-00-00",
        "fertilizer_quantity": "10.00",
        "other_fertilizer": null,
        "agricultural_product_type_id": 3,
        "agricultural_profile_id": 6,
        "fertilizer_id": 3
    },
    {
        "id": 8,
        "annual_production_quantity": "100.00",
        "annual_sales_quantity": "80.00",
        "land_area_coverage": "00-00-15-00-00",
        "fertilizer_quantity": "10.00",
        "other_fertilizer": "compost",
        "agricultural_product_type_id": 1,
        "agricultural_profile_id": 7,
        "fertilizer_id": 1
    },
    {
        "id": 9,
        "annual_production_quantity": "200.00",
        "annual_sales_quantity": "180.00",
        "land_area_coverage": "00-00-15-00-00",
        "fertilizer_quantity": "10.00",
        "other_fertilizer": null,
        "agricultural_product_type_id": 2,
        "agricultural_profile_id": 7,
        "fertilizer_id": 2
    },
    {
        "id": 10,
        "annual_production_quantity": "200.00",
        "annual_sales_quantity": "180.00",
        "land_area_coverage": "00-00-15-00-00",
        "fertilizer_quantity": "10.00",
        "other_fertilizer": null,
        "agricultural_product_type_id": 3,
        "agricultural_profile_id": 7,
        "fertilizer_id": 3
    },
    {
        "id": 11,
        "annual_production_quantity": "100.00",
        "annual_sales_quantity": "80.00",
        "land_area_coverage": "00-00-15-00-00",
        "fertilizer_quantity": "10.00",
        "other_fertilizer": "compost",
        "agricultural_product_type_id": 1,
        "agricultural_profile_id": 8,
        "fertilizer_id": 1
    },
    {
        "id": 12,
        "annual_production_quantity": "200.00",
        "annual_sales_quantity": "180.00",
        "land_area_coverage": "00-00-15-00-00",
        "fertilizer_quantity": 10.00,
        "other_fertilizer": null,
        "agricultural_product_type_id": 2,
        "agricultural_profile_id": 8,
        "fertilizer_id": 2
    },
    {
        "id": 13,
        "annual_production_quantity": "200.00",
        "annual_sales_quantity": "180.00",
        "land_area_coverage": "00-00-15-00-00",
        "fertilizer_quantity": "10.00",
        "other_fertilizer": null,
        "agricultural_product_type_id": 3,
        "agricultural_profile_id": 8,
        "fertilizer_id": 3
    },
    {
        "id": 14,
        "annual_production_quantity": "100.00",
        "annual_sales_quantity": "80.00",
        "land_area_coverage": "00-00-15-00-00",
        "fertilizer_quantity": "10.00",
        "other_fertilizer": "compost",
        "agricultural_product_type_id": 1,
        "agricultural_profile_id": 9,
        "fertilizer_id": 1
    },
    {
        "id": 15,
        "annual_production_quantity": "200.00",
        "annual_sales_quantity": "180.00",
        "land_area_coverage": "00-00-15-00-00",
        "fertilizer_quantity": "10.00",
        "other_fertilizer": null,
        "agricultural_product_type_id": 2,
        "agricultural_profile_id": 9,
        "fertilizer_id": 2
    },
    {
        "id": 16,
        "annual_production_quantity": "200.00",
        "annual_sales_quantity": "180.00",
        "land_area_coverage": "00-00-15-00-00",
        "fertilizer_quantity": "100.00",
        "other_fertilizer": null,
        "agricultural_product_type_id": 3,
        "agricultural_profile_id": 9,
        "fertilizer_id": 7
    }
]

let fertilizers = [
    {
        "id": 1,
        "name": "अन्य ( Other )"
    },
    {
        "id": 2,
        "name": "युरिया मल"
    },
    {
        "id": 3,
        "name": "कम्पोस्ट मल"
    },
    {
        "id": 4,
        "name": "Diammonium Phosphate(डायमोनियम फास्फेट)"
    },
    {
        "id": 5,
        "name": "Murate of Potash ( पोटासको म्युरेट )"
    },
    {
        "id": 6,
        "name": "Ammonium Sulphate ( अमोनियम सल्फेट )"
    },
    {
        "id": 7,
        "name": "Ammonium Phosphate Sulphate ( अमोनियम फास्फेट सल्फेट )"
    }
]

obj = {
    a: 1,
    1: "one"
}
// obj[1]

let result = fertilizers.map(fertilizer => {
    // {urea:10}
    let temp_quanity = 0;
    let temp_products = agricultural_products.filter(product => product.fertilizer_id == fertilizer.id)

    // .reduce()

    temp_products.forEach(el => {
        temp_quanity += parseFloat(el.fertilizer_quantity)
    })
    
    return {
        [fertilizer.name]: temp_quanity
    }
})
console.log((result));

let product_types = [
    {
        "id": 1,
        "name": "धान"
    },
    {
        "id": 2,
        "name": "मकै"
    },
    {
        "id": 3,
        "name": "गहुँ"
    },
    {
        "id": 4,
        "name": "कोदो"
    },
    {
        "id": 5,
        "name": "दाल"
    },
    {
        "id": 6,
        "name": "रहर"
    },
    {
        "id": 7,
        "name": "मुसरो"
    },
    {
        "id": 8,
        "name": "चना"
    },
    {
        "id": 9,
        "name": "सिमी"
    },
    {
        "id": 10,
        "name": "भटमास"
    },
    {
        "id": 11,
        "name": "तोरी/सस्र्यु"
    },
    {
        "id": 12,
        "name": "आलस/तिल"
    },
    {
        "id": 13,
        "name": "सूर्यमुखी"
    },
    {
        "id": 14,
        "name": "आलु"
    },
    {
        "id": 15,
        "name": "बन्दा/काउली/रायो"
    },
    {
        "id": 16,
        "name": "बोडी"
    },
    {
        "id": 17,
        "name": "गोलभेंडा"
    },
    {
        "id": 18,
        "name": "काँक्रो, लौका, फर्सी"
    },
    {
        "id": 19,
        "name": "परबल, कुन्द्रुक, काँक्रो"
    },
    {
        "id": 20,
        "name": "करेला, घिरौला, चिचिण्डो"
    },
    {
        "id": 21,
        "name": "अदुवा/वेसार"
    },
    {
        "id": 22,
        "name": "प्याज/लसुन"
    },
    {
        "id": 23,
        "name": "जुट"
    },
    {
        "id": 24,
        "name": "ऊखु"
    },
    {
        "id": 25,
        "name": "च्याउ"
    },
    {
        "id": 26,
        "name": "आँप"
    },
    {
        "id": 27,
        "name": "लिची"
    },
    {
        "id": 28,
        "name": "केरा"
    },
    {
        "id": 29,
        "name": "मेवा"
    },
    {
        "id": 30,
        "name": "सुन्तला"
    },
    {
        "id": 31,
        "name": "कागती"
    },
    {
        "id": 32,
        "name": "स्याउ"
    },
    {
        "id": 33,
        "name": "आरुवखडा"
    },
    {
        "id": 34,
        "name": "किवी"
    },
    {
        "id": 35,
        "name": "गोदावरी"
    },
    {
        "id": 36,
        "name": "सयपत्री"
    },
    {
        "id": 37,
        "name": "मखमली"
    },
    {
        "id": 38,
        "name": "गुलाफ"
    },
    {
        "id": 39,
        "name": "अर्किड"
    },
    {
        "id": 40,
        "name": "तुलिफ"
    },
    {
        "id": 41,
        "name": "अन्य"
    }
] 