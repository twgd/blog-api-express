const Post = require('../model/post');

const postController = {
    getPosts: (req, res) => {
        let {_page, _offset, _limit, _order, _sort} = req.query;
        if(_page) {
            _limit = _limit || 10;
            _offset = (_page-1)*10;
        }
        Post.findAll({
            attributes: ['id', 'title', 'author', 'body', 'createdAt'],
            where: {
                states: 'active',
            },
            offset: _offset? parseInt(_offset): _offset,
            limit: _limit? parseInt(_limit): _limit,
            order: [
                [ _sort || 'createdAt', _order || 'ASC'],
            ],
        }).then( posts => {
            res.json(posts)
        }).catch(err => {
            console.error(err.stack)
            res.status(500).send('Something broke!')
        })
    },
    addNewPost:  (req, res) => {
        const {title, author, body} = req.body;
        Post.create({
            title,
            author,
            body
        }).then(() => {
            let result = {
                status : 'success'
            }
            res.json(result)
        }).catch(err => {
            console.error(err.stack)
            res.status(500).send('Something broke!')
        })
    },
    getOnePost: (req, res) => {
        const { id } = req.params;
        Post.findByPk(id, {
            attributes: ['id', 'title', 'author', 'body', 'createdAt'],
        }).then(post => {
            res.json(post);
        }).catch(err => {
            console.error(err.stack)
            res.status(500).send('Something broke!')
        })
    },
    deletePost: (req, res) => {
        const { id } = req.params;
        Post.update({
            states: 'deleted'
        },{
            where: {
                id: id,
            }
        }).then(()=>{
            let result = {
                status : 'success'
            }
            res.json(result)
        }).catch(err => {
            console.error(err.stack)
            res.status(500).send('Something broke!')
        });
    },
    updatePost: (req, res) => {
        const { id } = req.params;
        const {title, author, body} = req.body;
        Post.update({
            title: title,
            author: author,
            body: body,
        },{
            where: {
                id: id,
            }
        }).then(()=>{
            let result = {
                status : 'success'
            }
            res.json(result)
        }).catch(err => {
            console.error(err.stack)
            res.status(500).send('Something broke!')
        });
    }
}

module.exports = postController;