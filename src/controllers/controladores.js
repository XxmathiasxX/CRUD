const controller = {};
/* este metodo puede tener muchas variaciones cambiando el "nombre de cambiante"
controller.cambiante = (req, res) =>{
    res.send('hello world');
}; 
*/
controller.list = (req, res) =>{
    req.getConnection((err, conn ) => {
        conn.query('SELECT * FROM noticia', (err, rows) =>{
            if (err) {
                res.json(err);
            }
            res.render('vista', {
                data: rows
            });
        });
    });
};

controller.save = (req, res) =>{
    console.log(req.body);
    res.send('works')
}

module.exports = controller;