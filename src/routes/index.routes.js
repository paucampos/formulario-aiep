import { Router} from "express";
import Ficha from "../models/Ficha";
const router = Router();

router.get('/', (req, res) => {
    res.render('layouts/home');
});

router.get('/form', (req, res) => {
    res.render('layouts/form');
});

router.post('/ficha/add', (req, res) => {
    const ficha = Ficha(req.body);
    console.log(ficha);
    res.send('Ficha creada');
});

router.get('/edit', (req, res) => {
    res.render('layouts/edit');
});

export default router;