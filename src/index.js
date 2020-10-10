const express = require('express');
const app = express();
// Setting of express
app.set('puerto', process.env.PORT || 3000);

app.listen(app.get('puerto'), () => {
    console.log('servidor iniciado en el puerto 3000');
});

