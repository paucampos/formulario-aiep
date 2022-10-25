import { Router} from "express";
import Ficha from "../models/Ficha";
const router = Router();

router.get('/', (req, res) => {
    res.render('layouts/home');
});

router.get('/form', (req, res) => {
    res.render('layouts/form');
});

// Crear Ficha
router.post('/ficha/add', async(req, res) => {
    try {
        const ficha = Ficha(req.body);
        const tieneFicha = await Ficha.findOne({ rut: ficha.rut});
        if(!tieneFicha) {
            await ficha.save();
            res.redirect('/form');
        } else {
            // Actualizar registro
            // await Ficha.updateOne(ficha.id).lean();
        }
    } catch (error) {
        console.error(error.message);
        console.error(error.code);
    }
});

router.get('/list', async (req, res) => {
    const fichas = await Ficha.find({}).lean();
    res.render('layouts/list', { fichas });
});

export default router;