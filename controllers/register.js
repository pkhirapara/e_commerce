const registermodal = require("../model/registration.model");
module.exports = {
  register: (req, res) => {
    var registerfields = new registermodal({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      mob: req.body.mobile,
    });
    registermodal
      .findOne({ username: req.body.username })
      .select("username")
      .lean()
      .then((user) => {
        console.log(user);
        if (user) {
          res.json({ message: "User already exists" });
        } else {
          registerfields
            .save()
            .then((data) => {
              console.log(data);
              if (data) {
                res.json({ status: true, data: data, message: "data" });
                res.end();
              } else {
                res.json({ status: false, message: "Error" });
                res.end();
              }
            })
            .catch((err) => {
              res.json({ error: err });
              res.end();
            });
        }
      });
  },
};
