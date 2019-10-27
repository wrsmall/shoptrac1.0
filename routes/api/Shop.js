const router = require("express").Router();
const shopController = require("../../controllers/shopController");

router.route("/")
  .post(shopController.createUser)
  .get(shopController.findEmployees)
  .put(shopController.loggedInn)

  router
  .route("/Out")
  .put(shopController.logoutuser)



router
  .route("/Login")
  .post(shopController.findUser)




module.exports = router;
