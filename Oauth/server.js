const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

// Loading config
dotenv.config({
     path: './config/config.env'
})

// Passport config
require('./config/passport')(passport)

connectDB()

const app = express()

// logging
if (process.env.NODE_ENV === 'development') {
     app.use(morgan('combined'))
}

// Handlebars
app.engine(
     '.hbs',
     exphbs({
          defaultLayout: 'main',
          extname: '.hbs',
     })
)
app.set('view engine', '.hbs')

// Sessions
app.use(
     session({
          secret: 'secret',
          resave: false,
          saveUninitialized: false,
          store: new MongoStore({ 
               mongooseConnection: mongoose.connection 
          }),
     })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

const PORT = process.env.PORT

app.listen(PORT, () => {
     console.log(`Server started on http://localhost:${PORT}`);
})