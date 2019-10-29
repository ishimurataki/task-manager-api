// C:\Users\'Taki Ishimura'\mongodb\bin\mongod.exe --dbpath=C:\Users\'Taki Ishimura'\mongodb_data
const path = require('path'); 
const hbs = require('hbs');
const express = require('express')
var bodyParser = require('body-parser')
require('./db/mongoose.js')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

const publicDirPath = path.join(__dirname, '..', 'public');
const viewDirPath = path.join(__dirname, '..', 'templates', 'views');
app.set('view engine', 'hbs');
app.set('views', viewDirPath);
app.use(express.static(publicDirPath));

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.get('', (req, res) => {
    res.render('index', {
        msg: '',
        login: false
    });
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
