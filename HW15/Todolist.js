class Todo {
    constructor(title) {
        if (!title.trim()) {
            throw new Error("Нотатка не може бути пустою");
        }
        this.id = Date.now();
        this.title = title;
        this.completed = false;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    updateTitle(newTitle) {
        if (!newTitle.trim()) {
            throw new Error("Назва не може буты пустою");
        }
        this.title = newTitle;
        this.updatedAt = new Date();
    }

    toggleComplete() {
        this.completed = !this.completed;
        this.updatedAt = new Date();
    }
}

class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo(title) {
        const todo = new Todo(title);
        this.todos.push(todo);
        return todo;
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    editTodo(id, newTitle) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.updateTitle(newTitle);
        }
    }

    getAllTodos() {
        return this.todos;
    }

    getTodoById(id) {
        return this.todos.find(todo => todo.id === id);
    }

    markAsCompleted(id) {
        const todo = this.getTodoById(id);
        if (todo) {
            todo.toggleComplete();
        }
    }

    getTodoCount() {
        return this.todos.length;
    }

    getRemainingTodos() {
        return this.todos.filter(todo => !todo.completed).length;
    }
}

// Тестирование
const myTodos = new TodoList();
myTodos.addTodo("Купити молоко");
myTodos.addTodo("Зробити зарядку");

console.log(myTodos.getAllTodos());
myTodos.markAsCompleted(myTodos.getAllTodos()[0].id);
console.log("Виконання задачі:", myTodos.getRemainingTodos());
