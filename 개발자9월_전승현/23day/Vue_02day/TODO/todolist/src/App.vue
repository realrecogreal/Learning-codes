<template>
  
   <div id="app">
     <TodoHeader></TodoHeader> 
     <!-- v‐on:하위 컴포넌트 이벤트명="상위 컴포넌트의 메서드 명" -->
     <TodoInput v-on:addTodo="addTodo"></TodoInput>
     <!-- v-bind:propsdata="부모 data 변수명" -->
     <TodoList v-bind:propsdata="todoItems" v-on:removeTodo="removeTodo"></TodoList>
     <TodoFooter v-on:clearTodo="clearAllTodo"></TodoFooter>
   </div>

</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: "app",
  // data: {},
  data(){
     return {
       todoItems: []
     }
  },
  methods: {
    addTodo: function(value){
        this.todoItems.push(value);
        console.log(this.todoItems);
    },
    removeTodo: function(idx){
        this.todoItems.splice(idx, 1);
    },
    clearAllTodo: function(){  // 풋터에서 수신받은 clear 이벤트 배을 빈배열로 
        // todoItems = []
        this.todoItems = [];
    }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter,
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }
</style>