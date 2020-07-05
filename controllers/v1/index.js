const model = require("../../models/tamu_undangan");

class TamuUndangan {
  async tambahTamuUndangan(req, res) {
    try {
      const { body } = req;

      const data = new model(body);

      await data.save();
      res.json({ res: "Data saved!" });
    } catch (err) {
      res.json({ error: err.message });
    }
  }

  async editStatusTamuUndangan(req, res) {
    try {
      const { body } = req;
      const { nama, status_kedatangan } = body;

      await model.findOneAndUpdate(
        { nama },
        {
          status_kedatangan,
        }
      );

      res.json({ res: "Data updated!" });
    } catch (err) {
      res.json({ error: err.message });
    }
  }

  async hapusTamuUndangan(req, res) {
    try {
      const { body } = req;
      const { nama } = body;

      await model.findOneAndDelete({ nama });

      res.json({ res: "Data deleted!" });
    } catch (err) {
      res.json({ error: err.message });
    }
  }

  async daftarTamuUndangan(_, res) {
    res.send(await model.find());
  }
}

const tamuUndangan = new TamuUndangan();

module.exports = {
  get: tamuUndangan.daftarTamuUndangan,
  post: tamuUndangan.tambahTamuUndangan,
  put: tamuUndangan.editStatusTamuUndangan,
  delete: tamuUndangan.hapusTamuUndangan,
};
