import { Router } from "express";
import Ficha from "../models/Ficha";
const router = Router();

router.get("/", (req, res) => {
  res.render("layouts/home");
});

router.get("/form", async (req, res) => {
  const fichas = await Ficha.find({}).lean();
  res.render("layouts/form", { fichas });
});

// Crear Ficha
router.post("/ficha/add", async (req, res) => {
  try {
    const ficha = Ficha(req.body);
    console.log(ficha);
    await ficha.save();
  } catch (error) {
    console.error(error.message);
    console.error(error.code);
  }
});

router.get("/list", async (req, res) => {
  const fichas = await Ficha.find({}).lean();
  res.render("layouts/list", { fichas });
});

// Mostrar Ficha a editar
router.get("/ficha/edit/:id", async (req, res) => {
  try {
    const ficha = await Ficha.findById(req.params.id).lean();
    console.log("edit ficha: ", ficha);

    res.render("layouts/edit", { ficha });
  } catch (error) {
    console.error(error.message);
    console.error(error.code);
  }
});

// Editar Ficha
router.post("/ficha/edit/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Ficha.findByIdAndUpdate(id, req.body);
    const fichas = await Ficha.find({}).lean();

    console.log("redirect: ", fichas);
    res.render("layouts/form", { fichas });
  } catch (error) {
    console.error(error.message);
    console.error(error.code);
  }
});

// Eliminar ficha
router.get("/ficha/delete/:id", async(req, res) => {
    const { id } = req.params;
    await Ficha.findByIdAndDelete(id);
    const fichas = await Ficha.find({}).lean();

    console.log("redirect delete: ", fichas);
    res.render("layouts/form", { fichas });

});
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
