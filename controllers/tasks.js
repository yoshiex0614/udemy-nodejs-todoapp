const Task = require("../models/Task");

// // 共通レスポンスハンドラー
// const handleResponse = (res, status, data) => res.status(status).json(data);

// // 共通エラーハンドラー
// const handleError = (res, err) => res.status(500).json({ error: err.message });

const getAllTasks = async (req, res) => {
  try {
    const allTask = await Task.find({});
    res.status(200).json(allTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createTasks = async (req, res) => {
  try {
    const createTask = await Task.create(req.body);
    res.status(200).json(createTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingleTasks = async (req, res) => {
  try {
    const getSingleTask = await Task.findOne({ _id: req.params.id });
    if (!getSingleTask) {
      return res
        .status(404)
        .json(`idが${req.params.id}のタスクは見つかりませんでした`);
    }
    res.status(200).json(getSingleTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateTasks = async (req, res) => {
  try {
    const updateTask = await Task.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updateTask) {
      return res
        .status(404)
        .json(
          `idが${req.params.id}のタスクは見つかりませんでした.。更新出来ませんでした。`
        );
    }
    res.status(200).json(updateTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteTasks = async (req, res) => {
  try {
    const deleteTask = await Task.findOneAndDelete({ _id: req.params.id });
    if (!deleteTask) {
      return res
        .status(404)
        .json(
          `idが${req.params.id}のタスクは見つかりませんでした.。削除出来ませんでした。`
        );
    }
    res.status(200).json(deleteTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllTasks,
  createTasks,
  getSingleTasks,
  updateTasks,
  deleteTasks,
};
