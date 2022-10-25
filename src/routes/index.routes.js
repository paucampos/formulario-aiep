import { Router} from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

router.get('/form', (req, res) => {
    res.render('index');
});

export default router;