import Ficha from "../models/Ficha";

export const renderFichas = async (req, res) => {
  const fichas = await Ficha.find({}).lean();
  res.render("layouts/form", { fichas });
};

export const addFicha = async (req, res) => {
  try {
    const ficha = Ficha(req.body);
    console.log(ficha);
    await ficha.save();
    console.log("redirect: ", fichas);
    res.render("layouts/form", { fichas });
  } catch (error) {
    console.error(error.message);
    console.error(error.code);
  }
};

export const listFichas = async (req, res) => {
  const fichas = await Ficha.find({}).lean();
  res.render("layouts/list", { fichas });
};

export const getFicha = async (req, res) => {
  try {
    const ficha = await Ficha.findById(req.params.id).lean();
    console.log("edit ficha: ", ficha);

    res.render("layouts/edit", { ficha });
  } catch (error) {
    console.error(error.message);
    console.error(error.code);
  }
};

export const editFicha = async (req, res) => {
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
};

export const deleteFicha = async (req, res) => {
  const { id } = req.params;
  await Ficha.findByIdAndDelete(id);
  const fichas = await Ficha.find({}).lean();

  console.log("redirect delete: ", fichas);
  res.render("layouts/form", { fichas });
};
