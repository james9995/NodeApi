const  { Router } = require('express');

const router = Router();
    
router.get('/:testName/:number', async (req, res) => {
    const data = global.database.Question;
    const question = await data.findOne(
        { where: 
            { 
                RecruitmentTestName: req.params.testName,
                QuestionNumber: req.params.number
            }
        }
    );

    return res.send(question);
});

module.exports = router;