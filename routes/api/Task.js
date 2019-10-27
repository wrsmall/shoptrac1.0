const router = require("express").Router();
const taskController = require("../../controllers/taskController");

// Matches with "/api/books"
router.route("/")
  .post(taskController.createTask)
  .put(taskController.updateAhead)
// Matches with "/api/books/:id"
router
  .route("/Find")
.post(taskController.findTask)

router
  .route("/Behind")
  .put(taskController.updateBehind)
  
router
  .route("/Complete")
  .put(taskController.Complete)
  
router
  .route("/Delete")
  .post(taskController.remove)

module.exports = router;
