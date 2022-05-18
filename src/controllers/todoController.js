const TodoService = require('../services/TodoService');

exports.get = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await TodoService.getTodoById(id);

    if (!todo) {
      return res.status(404).json('Todo not found');
    }
    res.json(todo);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

exports.getAll = async (req, res) => {
  try {
    const todos = await TodoService.getAllTodos();

    if (!todos) {
      return res.status(404).json('There are no todos published yet!');
    }

    res.json(todos);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

exports.add = async (req, res) => {
  try {
    const createdTodo = await TodoService.addTodo(req.body);
    res.status(201).json(createdTodo);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = {
      title: req.body.title,
      description: req.body.description,
      finished: req.body.finished,
    };

    const updatedTodo = await TodoService.updateTodo(id, todo);

    if (updatedTodo.nModified === 0) {
      return res.status(404).json({});
    }

    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedTodo = await TodoService.deleteTodoById(id);
    res.json(deletedTodo);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
