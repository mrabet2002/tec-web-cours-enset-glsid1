const { UserController } = require('../controllers/UserController.js');
var express = require('express');
var router = express.Router();
const userController = new UserController();

const OK = 200;

/* GET users listing. */
router.get('/', function (req, res, next) {
  userController.getAll()
    .then(users => res.send(users))
    .catch(console.error)
});

router.post('/', async (req, res, next) => {
  userController.create(req)
    .then(user => res.send(user))
    .catch(err => {
      if (err.code == 'P2002') res.send('User exists')
      console.log(err);
    })
    .catch(err => {
      console.error(err)
      next(err);
    });
});

router.put('/:id', async (req, res, next) => {
  userController.update(req.path.id, req)
    .then(user => res.send(user))
    .catch(err => {
      if (err.code == 'P2002') res.send('User exists')
      console.log(err);
    })
    .catch(err => {
      console.error(err)
      next(err);
    });
});

router.delete('/:id', async (req, res, next) => {
  userController.delete(req.params.id)
    .then(res.sendStatus(OK))
    .catch(err => {
      if (err.code == 'P2025') res.send('User exists')
      console.log(err);
    })
    .catch(err => {
      console.error(err)
      next(err);
    });
});

module.exports = router;
