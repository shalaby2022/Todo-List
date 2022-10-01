<template>
  <div class="container">
    <HeaderView/>
    <TasksComp :tasks='Tasks' @Delete_Task="DeleteTask" @toggling="toggle_task"/>
  </div>
</template>

<script>
import HeaderView from './views/Header.vue'
import TasksComp from './components/TasksComp.vue'
export default {
  name: 'App',
  components: {
    HeaderView,
    TasksComp
  },
  data () {
    return {
      Tasks: []
    }
  },
  methods: {
    DeleteTask (id) {
      if (confirm('Are You Sure ?')) {
        this.Tasks = this.Tasks.filter(task => task.id !== id)
      }
    },
    toggle_task (id) {
      this.Tasks = this.Tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task)
      console.log(id)
    }
  },
  created () {
    this.Tasks = [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'March 1st at 2:30 pm',
        reminder: true
      },
      {
        id: 2,
        text: 'Meeting at school',
        day: 'March 3rd at 1:30 pm',
        reminder: false
      },
      {
        id: 3,
        text: 'Food shopping',
        day: 'March 4th at 3 pm',
        reminder: true
      },
      {
        id: 4,
        text: 'Visit My Friend ',
        day: 'March 5th at 7 pm',
        reminder: false
      }
    ]
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  width: 50%;
  min-height: 500px;
  margin: auto;
  padding: 25px;
  border: 5px solid blue;
}
</style>

<!-- <nav>
  <router-link to="/">Header</router-link> |
  <router-link to="/counter">Counter</router-link>
</nav>
<router-view/>
<HeaderView /> -->
