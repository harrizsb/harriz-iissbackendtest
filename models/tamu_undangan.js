const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tamuUndanganSchema = new Schema({
  nama: { type: String, unique: true },
  alamat: String,
  no_telp: String,
  status_kedatangan: Boolean,
});

module.exports = mongoose.model("TamuUndangan", tamuUndanganSchema);
