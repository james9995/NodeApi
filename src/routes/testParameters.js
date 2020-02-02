import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const data = global.database.TestParameters;
    const TestParameters = await data.findAll();
    return res.send(TestParameters);
});

router.get('/:testName', async (req, res) => {
    const data = global.database.TestParameters;
    const TestParameters = await data.fineOne({ where: { RecruitmentTestName: req.params.testName }});
    return res.send(TestParameters);
});

export default router;