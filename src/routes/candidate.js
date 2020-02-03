import { Router } from 'express';


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
  const candidate = req.body.json;
  const response = await data. create({ values: { 
    RecruitmentTestName: candidate.RecruitmentTestName,
    EmailAddress: candidate.EmailAddress,
    SessionID: candidate.SessionID,
    ApplicationDetail: candidate.ApplicationDetail,
    RegisteredTime: candidate.Date
  }});
  return res.send(response);
});

UserRouter.route('/create').post(function (req, res) {
    const user = new User(req.body);
    user.save()
      .then(user => {
        res.json('User added successfully');
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });

export default router;