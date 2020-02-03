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
  const candidate = req.body;
  console.log("test name is: " + candidate.RecruitmentTestName);
    // const response = await data.create({ values: candidate } );
  const response = await data.create(
      { values: { 
        "RecruitmentTestName": candidate.RecruitmentTestName,
        "EmailAddress": candidate.EmailAddress,
        "SessionID": candidate.SessionID,
        "ApplicationDetail": candidate.ApplicationDetail,
        "RegisteredTime": candidate.RegisteredTime
        }
      });
  return res.send(response);
});

export default router;