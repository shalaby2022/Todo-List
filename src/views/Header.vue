<template>
  <header>
    <h1>Task Tracker</h1>
    <ButtonView text="Add Task" btnColor="green"/>
  </header>
</template>

<script>
import ButtonView from '../components/Button.vue'
export default {
  name: 'HeaderView',
  components: {
    ButtonView
  }
}
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
    margin: auto;
    width: 100%;
  }
</style>
