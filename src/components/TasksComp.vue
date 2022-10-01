<template>
  <div :key="task.id" v-for="task in tasks">
    <TaskComp :task='task' @DeleteTask="$emit('Delete_Task', task.id)" @toggle="$emit('toggling', task.id)"/>
  </div>
</template>

<script>
import TaskComp from '../components/TaskComp.vue'
export default {
  name: 'TasksComp',
  components: {
    TaskComp
  },
  props: ['tasks'],
  emits: ['Delete_Task', 'toggling']
}
</script>
