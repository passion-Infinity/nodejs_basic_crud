const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema(
  {
    username: { type: String, require },
    password: { type: String, require },
    fullname: { type: String, require },
  },
  {
    collection: 'accounts',
  },
);

module.exports = mongoose.model('Account', Account);
