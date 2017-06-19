<template>
  <div class="flex-container home">
    <div class="flex-item">
      <div class="ui raised segment">
        <div class="ui card">
            <div class="header" style="text-align:center"><h1 >BACKLOG</h1></div>
        </div>
        <div class="ui card" v-for="task in filteredByBacklog">
          <div class="content">
            <div class="header">{{task.name}}</div>
          </div>
          <div class="content">
            <h4 class="ui sub header">Description</h4>
            <div class="ui small feed">
                <span>{{task.description}}</span>
            </div>
          </div>
          <div class="content">
            <h4 class="ui sub header">Poin</h4>
            <div class="ui small feed">
                <span>{{task.point}}</span>
            </div>
          </div>
          <div class="content">
            <h4 class="ui sub header">Assigned To</h4>
            <div class="ui small feed">
                <span>Perut</span>
            </div>
          </div>
          <div class="extra content">
            <button class="ui yellow button flex-item"><i class="circle icon"></i></button>
            <button class="ui red button flex-item"@click="removeTask(task['.key'])"><i class="remove icon"></i></button>
            <button class="ui green button flex-item"@click="moveTodo(task)"><i class="arrow right icon"></i></button>
          </div>
        </div>
      </div>
    </div>
    <!--Todo-->
    <div class="flex-item">
      <div  class="ui raised segment">
        <div class="ui card">
            <div class="header" style="text-align:center"><h1 >TODO</h1></div>
        </div>
        <div class="ui card" v-for="task in filteredByTodos">
          <div class="content">
            <div class="header">{{task.name}}</div>
          </div>
          <div class="content">
            <h4 class="ui sub header">Description</h4>
            <div class="ui small feed">
                <span>{{task.description}}</span>
            </div>
          </div>
          <div class="content">
            <h4 class="ui sub header">Poin</h4>
            <div class="ui small feed">
                <span>{{task.point}}</span>
            </div>
          </div>
          <div class="content">
            <h4 class="ui sub header">Assigned To</h4>
            <div class="ui small feed">
                <span>Perut</span>
            </div>
          </div>
          <div class="extra content ">
            <button class="ui yellow button flex-item" @click="moveBacklog(task)"><i class="arrow left icon"></i></button>
            <button class="ui red button flex-item"@click="removeTask(task['.key'])"><i class="remove icon"></i></button>
            <button class="ui green button flex-item"@click="moveDoing(task)"><i class="arrow right icon"></i></button>
          </div>
        </div>

      </div>
    </div>

    <!--DOING-->
    <div class="flex-item">
      <div  class="ui raised segment">
        <div class="ui card">
            <div class="header" style="text-align:center"><h1 >DOING</h1></div>
        </div>
        <div class="ui card" v-for="task in filteredByDoing">
          <div class="content">
            <div class="header">{{task.name}}</div>
          </div>
          <div class="content">
            <h4 class="ui sub header">Description</h4>
            <div class="ui small feed">
                <span>{{task.description}}</span>
            </div>
          </div>
          <div class="content">
            <h4 class="ui sub header">Poin</h4>
            <div class="ui small feed">
                <span>{{task.point}}</span>
            </div>
          </div>
          <div class="content">
            <h4 class="ui sub header">Assigned To</h4>
            <div class="ui small feed">
                <span>Perut</span>
            </div>
          </div>
          <div class="extra content">
            <button class="ui yellow button flex-item"@click="moveTodo(task)"><i class="arrow left icon"></i></button>
            <button class="ui red button flex-item"@click="removeTask(task['.key'])"><i class="remove icon"></i></button>
            <button class="ui green button flex-item"@click="moveDone(task)"><i class="arrow right icon"></i></button>

          </div>
        </div>

      </div>
    </div>

    <!-- DONE-->
    <div class="flex-item">
      <div  class="ui raised segment">
        <div class="ui card">
            <div class="header" style="text-align:center"><h1 >DONE</h1></div>
        </div>
        <div class="ui card" v-for="task in filteredByDone">
          <div class="content">
            <div class="header">{{task.name}}</div>
          </div>
          <div class="content">
            <h4 class="ui sub header">Description</h4>
            <div class="ui small feed">
                <span>{{task.description}}</span>
            </div>
          </div>
          <div class="content">
            <h4 class="ui sub header">Poin</h4>
            <div class="ui small feed">
                <span>{{task.point}}</span>
            </div>
          </div>
          <div class="content">
            <h4 class="ui sub header">Assigned To</h4>
            <div class="ui small feed">
                <span>Perut</span>
            </div>
          </div>
          <div class="extra content">
            <button class="ui green button flex-item" @click="moveDoing(task)"><i class="arrow left icon"></i></button>
            <button class="ui red button flex-item"@click="removeTask(task['.key'])"><i class="remove icon"></i></button>
            <button class="ui yellow button flex-item"><i class="circle icon"></i></button>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Home',
  firebase(){
    return{
      tasks: this.$db.ref('tasks')
    }
  },
  data(){
    return {
    }
  },
  methods:{
    moveBacklog(task){
      this.$db.ref('tasks').push({
        name:task.name,
        description:task.description,
        point:task.point,
        assigned_to:task.assigned_to,
        status:'backlog'
      })
      this.removeTask(task['.key'])
    },
    moveTodo(task){
      this.$db.ref('tasks').push({
        name:task.name,
        description:task.description,
        point:task.point,
        assigned_to:task.assigned_to,
        status:'todo'
      })
      this.removeTask(task['.key'])
    },
    moveDoing(task){
      this.$db.ref('tasks').push({
        name:task.name,
        description:task.description,
        point:task.point,
        assigned_to:task.assigned_to,
        status:'doing'
      })
      this.removeTask(task['.key'])
    },
    moveDone(task){
      this.$db.ref('tasks').push({
        name:task.name,
        description:task.description,
        point:task.point,
        assigned_to:task.assigned_to,
        status:'done'
      })
      this.removeTask(task['.key'])
    },
    removeTask(key){
      this.$db.ref('tasks').child(key).remove();
    }
  },
  created(){
    $.ajaxPrefilter(function( options, original_Options, jqXHR ) {
    options.async = true;
});
  },
  computed:{
    filteredByBacklog(){
      return this.tasks.filter(function(task){
        return task.status==='backlog'
      })
    },
    filteredByTodos(){
      return this.tasks.filter(function(task){
        return task.status==='todo'
      })
    },
    filteredByDoing(){
        return this.tasks.filter(function(task){
          return task.status==='doing'
        })
    },
    filteredByDone(){
      return this.tasks.filter(function(task){
        return task.status==='done'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home{
  margin-top: 2%;

}

.flex-container{
   display: flex;
   flex-wrap: wrap;
}

.flex-item {
  flex-direction: row;
  float: left;
  border-radius: 5px;
  /*width: 25%;*/
  /*margin-left: 1%;
  margin-right: 1%;*/
}
</style>
