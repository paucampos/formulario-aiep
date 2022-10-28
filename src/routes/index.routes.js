import { Router } from "express";
import Ficha from "../models/Ficha";
import { renderFichas, addFicha, listFichas, getFicha, editFicha, deleteFicha} from '../controllers/fichas.controller';

const router = Router();

router.get("/", (req, res) => {
  res.render("layouts/home");
});

router.get("/form", renderFichas);

router.post("/ficha/add", addFicha);

router.get("/list", listFichas);

// Mostrar Ficha a editar
router.get("/ficha/edit/:id", getFicha);

// Editar Ficha
router.post("/ficha/edit/:id", editFicha);

// Eliminar ficha
router.get("/ficha/delete/:id", deleteFicha);

//=============================
// Búsqueda apellidos
//=============================
router.get("/paciente/:busqueda", (req, res, next) => {
  let busqueda = req.params.busqueda;
  console.log("busqueda: ", busqueda);
  // Expresión regular: i -> Case-insensitive = ignora mayúsculas
  let regex = new RegExp(busqueda, "i");

  try {
    Ficha.find({ apellidos: regex })
      .populate("fichas", "nombres apellidos fono email ciudad")
      .exec((err, pacientes) => {
        if (!err) {
          console.log(pacientes);
        } else {
          console.error("Error al buscar pacientes", err);
        }
      });
  } catch (error) {}
});

export default router;
