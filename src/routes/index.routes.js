import { Router} from "express";
import Ficha from "../models/Ficha";
const router = Router();

router.get('/', (req, res) => {
    res.render('layouts/home');
});

router.get('/form', (req, res) => {
    res.render('layouts/form');
});

router.post('/ficha/add', async(req, res) => {
    try {
        const ficha = Ficha(req.body);
        const fichaSaved = await ficha.save();
        console.log(fichaSaved);
        res.send('Ficha creada');
    } catch (error) {
        console.error(error.message);
    }
});

router.get('/list', async (req, res) => {
    const fichas = await Ficha.find({}).lean();
    res.render('layouts/list', { fichas });
});

export default router;