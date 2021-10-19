<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" placeholder="오늘 할일 목록을 입력하세요" 
     v-on:keypress.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>

    <div v-if="showModal" v-on:click="showModal = false" class="modal-mask">
      <div class="modal-container">
        <h3>경고</h3>
        <p>목록을 다시 작성해주세요</p>
        <span v-on:click="showModal = false" class="closeModalBtn">
          <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
     return {
       newTodoItem: "", // -> 할일 목록 입력한 내용
       showModal: false,
     }
  },
  methods: {
      addTodo() {
         if ( this.newTodoItem !== "" ) {
              let value = this.newTodoItem && this.newTodoItem.trim();
              this.$emit('addTodo', value);  // addTodo이벤트 신호 전송 -> 입력된 데이터 넘김
              // console.log(value);
              this.newTodoItem = "";
         } else {  // 인풋박스가 비어 있으면
              // this.showModal = true;  
              this.showModal = !this.showModal;
         }
      }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #62acde;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 100px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.closeModalBtn {
  color: #fff;
  padding: 10px 30px;
  border-radius: 5px;
  background: #62acde;
}
</style>