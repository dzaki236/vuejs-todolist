<template>
  <div class="todo">
    <h4 class="bg-primary text-white text-center p-2">{{ name }} Do List</h4>
    <div class="container p-4">
      <div class="row">
        <div class="col font-weight-bold">Task</div>
        <div class="col-2 font-weight-bold">Done</div>
      </div>
    </div>
    <div class="row m-3" v-for="t in filteredTasks" v-bind:key="t.action">
      <div class="col">{{ t.action }}</div>
      <div class="col-2">
        <input
          type="checkbox"
          v-model="t.done"
          class="form-check-input"
        />
        <!-- {{ t.done }} -->
      </div>
    </div>
    <div class="row py-2 m-3">
<div class="col">
<input v-model="newItemText" class="form-control" />
</div>
<div class="col-2">
<button class="btn btn-primary" v-on:click="addNewTodo">Add</button>
</div>
</div>
    <div class="row bg-secondary py-2 mt-2 text-white">
      <div class="col text-center">
        <input
          type="checkbox"
          v-model="hideCompleted"
          class="form-check-input"
        />
        <label class="form-check-label font-weight-bold">Hide Completed task</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
            name: "Todo",
            data() {
              return {
                name: "Dzaki",
                tasks: [
                  { action: "Buy Flowers", done: false },
                  { action: "Get Shoes", done: false },
                  { action: "Collect Tickets", done: true },
                  { action: "Call Joe", done: false },
                ],
                hideCompleted:true,
              }
            },
            computed: {
              filteredTasks(){
              return this.hideCompleted ? 
              this.tasks.filter(t =>!t.done): this.tasks;
              },
            },
            methods:{
              addNewTodo(){
                this.tasks.push({
                  action:this.newItemText,
                  done:false
                });
                this.newItemText="";
              }
            }
          };


</script>
