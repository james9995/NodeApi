import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const data = global.database.Candidate;
    const candidates = await data.findAll();
    return res.send(candidates);
});

router.get('/:emailAddress', async (req, res) => {
    const data = global.database.Candidate;
    const candidate = await data.findOne({ where: { EmailAddress: req.params.emailAddress}});
    return res.send(candidate);
});

router.put('/:candidateData', async (req, res) => {
  const data = global.database.Candidate;
  const response = await data. create({ values: { 
    RecruitmentTestName: req.params.candidateData.RecruitmentTestName,
    EmailAddress: req.params.candidateData.EmailAddress,
    RegisteredTime: Date.now()
  }});
  return res.send('Added ' + req.params.candidateData.EmailAddress);
});

export default router;