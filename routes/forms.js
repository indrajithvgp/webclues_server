const Form = require("../models/Form");

const { nanoid } = require("nanoid");
const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    const { formName, question, answerType, options } = req.body.formDetails;

    const form = await new Form({
      name: formName,
      question: question,
      options,
      answerType: answerType,
    });
    form.link = `${nanoid()}`;
    form.save();
    res.json({ form: form });
  } catch (err) {
    console.log(err);
    res.json({ ok: false });
  }
});

router.get("/", async (req, res) => {
  try {
    const forms = await Form.find({});
    res.json({ forms });
  } catch (err) {
    res.json({ ok: false });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const form = await Form.findOne({ link: id });

    res.json({ form });
  } catch (err) {
    console.log(err);
    res.json({ ok: false });
  }
});
router.post("/create/:id", async (req, res) => {
  try {
    const form = await Form.findOne(
      { link: req.params.id }
    );
    form.answer= req.body.answer,
       form.responseCount= form.responseCount+1,
    form.save()
    res.json({ form });
  } catch (err) {
    console.log(err);
    res.json({ ok: false });
  }
});

module.exports = router;
