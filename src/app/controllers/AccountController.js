const Account = require('../models/Account');

// retrieve and return all users/ retrieve and return a single user
exports.find = (req, res, next) => {
  if (req.params.id) {
    const id = req.params.id;

    Account.findById(id)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send('Not found');
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Error occured while retrieving information',
        });
      });
  } else {
    Account.find()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Error occured while retrieving information',
        });
      });
  }
};

// exports.find = async (req, res, next) => {
//   console.log(req.params.id);
//   const abc = req.params.id;
//   let query = { id: abc };
//   console.log(query);
//   return await Account.findOne(query).exec();
// };

// Create new user
exports.create = (req, res, next) => {
  if (!req.body) {
    res.status(400).send({ message: 'Content can not be empty' });
    return;
  }

  Account.create({
    username: req.body.username,
    password: req.body.password,
    fullname: req.body.fullname,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || 'Error occured while create user' });
    });
};

// Update user
// exports.update = (req, res, next) => {
//     if (!req.body) {
//         res.status(400).send({ message: 'Data to update can not be empty.' });
//         return;
//     }

//     const id = req.params.id;
//     console.log(req.body);

//     Account.findByIdAndUpdate(id, req.body, {new: true})
//         .then(data => {
//             if (!data) {
//                 res.status(404).send({ message: `Can not update user with ${id}. Maybe user not found.` });
//             } else {
//                 res.send(data);
//             }
//         })
//         .catch(err => {
//             res.status(500).send({ message: err.message || 'Error occured while updating information' });
//         })
// }

exports.update = async (req, res, next) => {
  if (!req.body) {
    res.status(400).send({ message: 'Data to update can not be empty.' });
    return;
  }

  const update = {
    username: req.body.username,
    password: req.body.password,
    fullname: req.body.fullname,
  };

  let query = { fullname: '123' };

  const result = await Account.updateOne(
    query,
    {
      $set: { ...update },
    },
    {
      upsert: true,
    },
  );

  return res.json({
    data: result,
  });
};

// Delete user
exports.delete = (req, res, next) => {};
