const express = require('express');
const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('user list');
// });

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

router.post('/', (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log('Error');
    res.render('users/new', { firstName: req.body.firstName });
  }
});

// id를 parameter로
// dynamic parameter
router
  .route('/:id')
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get User ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User ID ${req.params.id}`);
  });

const users = [{ name: 'Kyle', name: 'Sally' }];
router.param('id', (req, res, next, id) => {
  req.user = users[id];
  next();
});

// export
module.exports = router;
