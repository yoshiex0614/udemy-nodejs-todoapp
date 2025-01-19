const express = require("express"); // expressを利用
const router = express.Router(); // ルーティング設定を利用
const {
  getAllTasks,
  createTasks,
  getSingleTasks,
  updateTasks,
  deleteTasks,
} = require("../controllers/tasks"); // ルーティング先の関数を利用

router.get("/", getAllTasks);
router.post("/", createTasks);
router.get("/:id", getSingleTasks);
router.patch("/:id", updateTasks);
router.delete("/:id", deleteTasks);

module.exports = router;
