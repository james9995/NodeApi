import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const data = global.database.questions;
    const questions = await data.findAll();
    return res.send(questions);
});

router.get('/:id', async (req, res) => {
    const data = global.database.questions;
    const question = await data.findAll({ where: { id: req.params.id}});
    return res.send(question);
});

// app.post('/', (req, res) => {
//   return res.send('Received a POST HTTP method');
// });
// app.put('/', (req, res) => {
//   return res.send('Received a PUT HTTP method');
// });
// app.delete('/', (req, res) => {
//   return res.send('Received a DELETE HTTP method');
// });

export default router;