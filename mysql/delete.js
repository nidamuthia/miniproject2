const database = require('../config/db') 

let deletemerchantQuery = `DELETE FROM merchant WHERE id = ?`
let data = [7]
database.query(deletemerchantQuery, data, function (err, deleted) {
  if (err) throw err;
  console.log(deleted);
});

