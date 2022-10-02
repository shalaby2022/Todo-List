<template>
<div class="container">
    <HeaderView @ShowAdd_Task="toggleAdd" :showAddTasks='showAddTask'/>
    <div v-if="showAddTask">
      <AddTask @add_task='addTask'/>
    </div>
    <TasksComp :tasks='Tasks' @Delete_Task="DeleteTask" @toggling="toggle_task"/>
    <FooterComp />
  </div>
</template>

<script>
import HeaderView from '../views/Header.vue'
import TasksComp from '../components/TasksComp.vue'
import AddTask from '../components/AddTask.vue'
import FooterComp from '../components/FooterComp.vue'
// import AboutView from './views/AboutView.vue'

import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    HeaderView,
    TasksComp,
    AddTask,
    FooterComp
  },
  data () {
    return {
      Tasks: [],
      showAddTask: false
    }
  },
  methods: {
    async fetchTasks () {
      const response = await axios.get('http://localhost:5300/tasks')
      const data = await response.data
      return data
    },
    async fetchTask (id) {
      const response = await axios.get(`http://localhost:5300/tasks/${id}`)
      const data = await response.data
      return data
    },
    async addTask (task) {
      const response = await axios.post('http://localhost:5300/tasks', { ...task })

      const data = await response.data
      this.Tasks = [...this.Tasks, data]
    },
    async DeleteTask (id) {
      if (confirm('Are You Sure ?')) {
        const response = await axios.delete(`http://localhost:5300/tasks/${id}`)
        await response.status === 200 ? this.Tasks = this.Tasks.filter(task => task.id !== id) : alert('Error deleting Task')
      }
    },
    async toggle_task (id) {
      const taskToogle = await this.fetchTask(id)
      const updTask = { ...taskToogle, reminder: !taskToogle.reminder }

      const response = await axios.put(`http://localhost:5300/tasks/${id}`, { ...updTask })
      this.Tasks = this.Tasks.map(task => task.id === id ? { ...task, reminder: response.data.reminder } : task)
    },
    toggleAdd () {
      this.showAddTask = !this.showAddTask
    }
  },
  async created () {
    this.Tasks = await this.fetchTasks()
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
      width: 75%;
      min-height: 500px;
      margin: auto;
      padding: 25px;
      border: 5px solid blue;
    }
    </style>
