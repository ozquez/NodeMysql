const dbConnection = require('../../config/dbConnection');


module.exports = app =>{
    const connection = dbConnection();
    
    
    
    app.get('/', (req, res) => {
        connection.query('SELECT * FROM cat_tiposBonos;', (err, result) =>{
            // console.log(result);
            
            res.render('bonos/bonos', {
                bonos: result
            })
        })
    })
}