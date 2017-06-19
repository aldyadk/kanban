<template>

  <div class="ui secondary menu">
    <h2 class="ui header"
      <div class="content">
        Kanban
      </div>
    </h2>
    <div class="right menu">
      <button class="ui green button" @click="showModal">New Task</button>
    </div>

    <div id="modalAdd" class="ui modal modalShowComment" >
      <i class="close icon"></i>
      <div class="header">
        <h4 class="ui header">Add Task</h4>
      </div>
      <div class="content">
        <div class="ui form">
          <div class="field" style="width:100%">
            <label>Name</label>
                <input type="text" v-model="new_task.name">
          </div>
          <div class="field" style="width:100%">
            <label>Description</label>
                <input type="text" v-model="new_task.description">
          </div>
          <div class="field" style="width:100%">
            <label>Point</label>
                <input type="text" v-model="new_task.point">
          </div>
          <div class="field" style="width:100%">
            <label>Assigned</label>
                <input type="text" v-model="new_task.assigned_to">
          </div>
        </div>
      </div>
      <div class="actions">
        <div class="ui button" @click="closeModal">Cancel</div>
        <div class="ui green button" @click="addTodo">Send</div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      new_task:{
        name:'',
        description:'',
        point:'',
        assigned_to:'',
        status:'backlog'
      }
    }
  },
  computed:{

  },
  methods:{
    showModal(){
      $('.ui.modal').modal('show');
    },
    closeModal(){
      $('.ui.modal').modal('hide');
    },
    addTodo(){
      this.$db.ref('tasks').push(this.new_task)
      this.new_task.name=''
      this.new_task.description=''
      this.new_task.point=''
      this.new_task.assigned_to=''
      this.new_task.status=''
      $('.ui.modal').modal('hide');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.secondary.menu{
  padding-top: 1%;
  padding-top: 1%;
  margin-right: 1%;
  margin-left: 1%;
}
#modalAdd{

}

</style>
