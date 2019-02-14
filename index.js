const express = require('express');
const app = express();
const port = 3000;

const bodyparser = require('body-parser');
const session = require('express-session');

const postController = require('./controller/postController')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: 'Tyranitar',
    cookie: {maxAge: 3600000},
    resave: true,
    saveUninitialized: true,
}));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-type,Accept,x-access-token,X-Key"
    );
    if (req.method == "OPTIONS") {
      res.status(200).end();
    } else {
      next();
    }
});
app.use(express.static('public'));

app.set('view engine', 'ejs');


// render index
app.get('/', (req, res) => {
    res.render('index')
})
// APIs
app.get('/posts', postController.getPosts);
app.post('/posts', postController.addNewPost);
app.get('/posts/:id', postController.getOnePost);
app.delete('/posts/:id', postController.deletePost);
app.put('/posts/:id', postController.updatePost);


app.listen(port, () => {
    console.log(`blog-api listening on port ${port}!`)
})