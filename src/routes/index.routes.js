import { Router} from "express";

const router = Router();

router.get('/', (req, res) => {
    res.render('layouts/home');
});

router.get('/form', (req, res) => {
    res.render('layouts/form');
});

router.get('/edit', (req, res) => {
    res.render('layouts/edit');
});

export default router;