<template>
    <div :class="[task.reminder ? 'reminder' : '', 'task']">
        <div class="row">
            <h2>{{task.text}}</h2>
            <p>{{task.day}}</p>
        </div>
        <button @click="$emit('DeleteTask', task.id)" class="delete">❌</button>
        <button @click="$emit('toggle', task.id)" class="remind">🧭</button>

    </div>
</template>

<script>
export default {
  name: 'TaskComp',
  props: {
    task: {}
  }
}
</script>

<style>
    .task {
        height: 5.3rem;
        background-color: gray;
        padding: 1rem;
        margin: 1rem 0;
        display: flex;
        justify-content: space-around;
    }
    .task.reminder {
        border-left: 10px solid rgb(9, 52, 179);
    }
    .delete {
        display: inline-block;
        padding: 0.1rem 1.5rem;
        background-color: royalblue;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1.4rem;
    }
    .remind {
        display: inline-block;
        padding: 0.1rem 1.5rem;
        background-color: royalblue;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1.4rem;
    }
    .delete:hover {
        background-color: blue;
    }
    .row {
        width: 70%;
    }
</style>
