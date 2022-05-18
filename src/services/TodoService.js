const Todo = require('../models/Todo');

module.exports = class TodoService {
  static async getTodoById(id) {
    try {
      const todo = await Todo.findById(id);
      return todo;
    } catch (error) {
      console.log(`Could not fetch todo ${error}`);
    }
  }

  static async getAllTodos() {
    try {
      const allTodos = await Todo.find();
      return allTodos;
    } catch (error) {
      console.log(`Could not fetch todos ${error}`);
    }
  }

  static async addTodo(data) {
    try {
      const newTodo = {
        title: data.title,
        description: data.description,
        date: data.date,
        finished: data.finished,
      };
      const response = await new Todo(newTodo).save();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  static async updateTodo(id, todo) {
    try {
      const updateResponse = await Todo.updateOne(
        { _id: id },
        { ...todo, date: new Date() }
      );

      return updateResponse;
    } catch (error) {
      console.log(`Could not update Todo ${error}`);
    }
  }

  static async deleteTodoById(id) {
    try {
      const deletedResponse = await Todo.findOneAndDelete({ _id: id });
      return deletedResponse;
    } catch (error) {
      console.log(`Could not delete todo ${error}`);
    }
  }
};
