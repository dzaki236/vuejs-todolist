<template>
  <div id="app" class="text-center">
    <h4 class="bg-white text-dark text-center p-2">
      {{ name }} To Do List
    </h4>
    <div class="container p-4 card">
      <div class="row" v-if="filteredTasks.length == 0">
        <div class="col-12 text-center">
          <b>Nothing to do. Hurrah!</b>
        </div>
      </div>
      <template v-else>
        <div class="row">
          <div class="col-4 font-weight-bold">Task</div>
          <div class="col-4 font-weight-bold">|</div>
          <div class="col-4 font-weight-bold">Done</div>
        </div>
        <ul>
          <li>
<div class="row p-4" v-for="t in filteredTasks" v-bind:key="t.action">
          <div class="col-3">{{ t.action }}</div>
          <div class="col-5"></div>
          <div class="col-3 ml-4">
            <input type="checkbox" v-model="t.done" class="form-check-input ml-4" />
          </div>
        </div>
          </li>
        </ul>
        
      </template>
      <form class="row py-2">
        <div class="col-10">
          <input v-model="newItemText" class="form-control" required>
        </div>
        <div class="col-2">
          <button class="btn btn-primary" v-on:click="addNewTodo">[+] Tambah List</button>
        </div>
      </form>
      <div class="row py-2 mt-2 text-white">
        <div class="col text-center">
          <input
            type="checkbox"
            v-model="hideCompleted"
            class="form-check-input"
            id="1"
          />
          <label class="form-check-label text-dark font-weight-bold" for="1">
            Hide completed tasks
          </label>
        </div>
        <div class="col text-center">
          <button class="btn btn-sm btn-warning" v-on:click="deleteCompleted">
    <font-awesome-icon :icon="['fas','fa-trash-alt']" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      name: "Dzaki",
      tasks: [],
      hideCompleted: true,
      newItemText: "",
    };
  },
  computed: {
    filteredTasks() {
      return this.hideCompleted
        ? this.tasks.filter((t) => !t.done)
        : this.tasks;
    },
  },
  methods: {
    
    addNewTodo() {
      this.checkRequiredField();
      this.newItemText = "";
    },
    checkRequiredField(){
if(this.newItemText==""){
  alert('no value');
}else{
   this.tasks.push({
        action: this.newItemText,
        done: false,
      });
      this.storeData();
}
    },
    storeData() {
      localStorage.setItem("todos", JSON.stringify(this.tasks));
    },
    deleteCompleted() {
      this.tasks = this.tasks.filter((t) => !t.done);
      alert('List Di hapus!')
      this.storeData();
    },
  },
  created() {
    let data = localStorage.getItem("todos");
    if (data != null) {
      this.tasks = JSON.parse(data);
    }
  },
};
</script>
