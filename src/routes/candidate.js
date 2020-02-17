const  { Router } = require('express');

const router = Router();

router.get('/checkEmail/:emailAddress', async (req, res) => {
  const data = global.database.Candidate;
  const count = await data.count({ where: { EmailAddress: req.params.emailAddress } });
  return res.send(count === 0);
});

router.get('/:emailAddress', async (req, res) => {
const data = global.database.Candidate;
const candidate = await data.findOne({ where: { EmailAddress: req.params.emailAddress}});
return res.send(candidate);
});

router.post('/', async (req, res) => {
const data = global.database.Candidate;
const candidate = req.body;
const response = await data.create(candidate);
return res.send(response);
});

module.exports =  router;