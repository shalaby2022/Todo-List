<template>
  <header>
    <h1>Task Tracker</h1>
    <ButtonView :text="showAddTasks ? 'Close' : 'AddTask'"
      :btnColor="showAddTasks? 'rgb(0,0,100)' : 'rgb(9, 52, 179)' "
      @ShowAdd="$emit('ShowAdd_Task')"/>
  </header>
</template>

<script>
import ButtonView from '../components/Button.vue'
export default {
  name: 'HeaderView',
  props: ['showAddTasks'],
  components: {
    ButtonView
  },
  emits: ['ShowAdd_Task']
}
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    margin: auto;
    width: 100%;
  }
</style>
