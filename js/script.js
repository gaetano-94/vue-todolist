'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      todoObj: [
        {
          text: 'Fare la spesa',
          done: false,
        },
        {
          text: 'Non dire le bugie come Gaetano',
          done: true,
        },
        {
          text: 'Studiare Vue Js',
          done: true,
        },
        {
          text: 'Andare su la luna',
          done: false,
        },
      ],
      newTodoText: '',
    };
  },
  methods: {
    removeTodo: function (index) {
      this.todoObj.splice(index, 1);
    },

    addNewTodo: function () {
      if (this.newTodoText.trim() !== '') {
        this.todoObj.push({ text: this.newTodoText, done: false });
        this.newTodoText = '';
      }
    },
  },
}).mount('#app');
