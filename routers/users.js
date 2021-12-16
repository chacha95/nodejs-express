const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('user list');
});

router.get('/new', (req, res) => {
    res.send('user new form');
});

router.post((res, req) => {
    res.send('Create User');
});

// router.get('/:id', (req, res) => {
//     res.send(`Get User ID ${req.params.id}`);
// });

// router.put('/:id', (req, res) => {
//     res.send(`Update User ID ${req.params.id}`);
// });

// router.delete('/:id', (req, res) => {
//     res.send(`Delete User ID ${req.params.id}`);
// })

// id를 parameter로
// url이 같을 경우 붙일수 있음
router
    .route('/:id')
    .get((req, res) => {
        res.send(`Get User ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update User ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User ID ${req.params.id}`)
    })

const users = [{ name: 'kyle'}, { name: 'sally'}]
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

// export
module.exports = router