const db = require('../config/db');

let merchant = [
    {username: "Ipan", password: "Russia231", phone_number: 8254252, address: "Dago Bandung A2"},
    {username: "Gorbacev", password: "Ind2342", phone_number: 802352352, address: "BKR Tasikmalaya, no. R12"},
    {username: "Zelensky", password: "batak34134", phone_number: 835235143, address: "Dago Asri Bandung, no.A5"},
    {username: "Luhut", password: "jkt34124", phone_number: 825234134, address: "Cicadas permai Bandung, no.23"},
    {username: "Biden", password: "twe342et", phone_number: 85235234, address: "Sudirman Hills Bandung, no 30"},
    {username: "Boris", password: "ls45dsf435", phone_number: 85235235, address: "Clover Residence Jakarta, no 50"},
    {username: "Macron", password: "jgr53452rdf", phone_number: 852354235, address: "BKR Tasikmalaya no.50"}
];

merchant.forEach (value => {
    let insertMerchantQuery = `INSERT INTO merchant SET ?;`
    db.query(insertMerchantQuery, value, function (error, results, fields) {
        if (error) throw error;
        console.log('Data has been inserted');
    });
});

let product = [
    {merchant_id: 1, name: "Jaket Bomber", quantity: 50, price: 180000},
    {merchant_id: 2, name: "Kemeja", quantity: 300, price: 50000},
    {merchant_id: 3, name: "Baju Koko", quantity: 120, price: 100000},
    {merchant_id: 4, name: "Celana Chino", quantity: 50, price: 150000},
    {merchant_id: 5, name: "Celana Jeans", quantity: 50, price: 120000},
    {merchant_id: 6, name: "Polo Shirt", quantity: 60, price: 70000},
    {merchant_id: 7, name: "Hoodie", quantity: 30, price: 120000}
];

product.forEach (value => {
    let insertProductQuery = `INSERT INTO product SET ?;`
    db.query(insertProductQuery, value, function (error, results, fields) {
        if (error) throw error;
        console.log('Data has been inserted');
    });
});