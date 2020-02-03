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

router.post('/:candidateData', async (req, res) => {
  const data = global.database.Candidate;
  const response = await data. create({ values: { 
    RecruitmentTestName: req.params.candidateData.RecruitmentTestName,
    EmailAddress: req.params.candidateData.EmailAddress,
    SessionID: req.params.candidateData.SessionID,
    ApplicationDetail: req.params.candidateData.ApplicationDetail,
    RegisteredTime: Date.now()
  }});
  return res.send(response);
});

export default router;