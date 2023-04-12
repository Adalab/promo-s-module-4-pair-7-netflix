const mongoose = require('mongoose');
const dbConnect = () => {
  const db = 'netflix';
  const user = 'titilau';
  const password = 'SSjYJGW3s3Pb56ZW';
  const URI = `mongodb+srv://${user}:${password}@cluster0.bwboqj8.mongodb.net/${db}?retryWrites=true&w=majority`;

  mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('conectado a mongodb'))
    .catch((e) => console.log('error de conexión', e));

};
module.exports = dbConnect;