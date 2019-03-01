
const app = require('./config/server');

require('./app/routes/bonos')(app)

//  INICIANDO EL SERVIDOR
app.listen(app.get('port'), ()=> {
    console.log('Server running on port ', app.get('port'));
})