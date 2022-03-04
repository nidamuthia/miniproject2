const database = require('../config/db');

let updatepetQuery = `UPDATE merchant SET password=? WHERE id=?`;
let datapet = ['432fsd243',1]

database.query(updatepetQuery, datapet, function (err, updated) {
    if (err) throw err;
    console.log(updated);
});
