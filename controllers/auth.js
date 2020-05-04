var dbModal = require("../model/registration.model");
var bcrypt = require("bcryptjs");
var jsonwebtoken = require("jsonwebtoken");
var count = 0;

module.exports = {
  login: (req, res) => {
    dbModal.findOne({ username: req.body.username }).then((data) => {
      var user = data;
      console.log(user);
      if (user == null) {
        res.json({
          status: false,
          message: "username or password is not exist",
        });
      } else {
        var password = bcrypt.compareSync(req.body.password, user.password);
        console.log(password);
        // console.log(count+1,'==============')
        if (count + 1 <= 3 || user.count != 3) {
          console.log(count + 1, "couter=====");
          if (password) {
            //req.session.username=user.username
            //console.log(req.session.username)
            var token = jsonwebtoken.sign(
              { _id: user._id },
              process.env.SECREAT,
              { expiresIn: "24h" }
            );
            count = 0;
            dbModal
              .updateOne({ _id: user._id }, { $set: { count: 0 } })
              .then((data) => {
                console.log(data);
              });
            res.json({
              status: true,
              token: token,
              message: "Login successfully",
            });
          } else {
            count++;
            console.log(count, "======================");
            var updateval = { $set: { count: count } };
            dbModal.updateOne({ _id: user._id }, updateval).then((data) => {
              console.log(data, "save data");
            });
            res.json({ status: false, message: "password is not matched" });
          }
        } else {
          res.json({
            status: false,
            message: "Your Account is temporary Blocked",
          });
        }
      }
    });
  },
};
