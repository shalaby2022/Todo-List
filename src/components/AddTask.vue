<template>
    <form @submit="onSubmit" class="add-form">
        <div class="form-control">
            <label class="label">Task</label>
            <input type="text" v-model="text" name="text" placeholder="Add Task">
            {{text}}
        </div>
        <div class="form-control">
            <label class="label">Day & time</label>
            <input type="text" v-model="day" name="day" placeholder="Add Day & time">
            {{day}}
        </div>
        <div class="form-control form-control-check">
            <label class="label">Set Reminder</label>
            <input type="checkbox" v-model="reminder" name="reminder" class="checkColor">
        </div>
        <input type="submit" value="Save" class="btn btnSave ">
    </form>
</template>

<script>
export default {
  name: 'AddTask',
  data () {
    return {
      text: '',
      day: '',
      reminder: ''
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()

      if (!this.text) {
        alert('Please Add a Task!')
        return
      }
      const newTask = {
        // id: Math.floor(Math.random() * 10000),
        text: this.text,
        day: this.day,
        reminder: this.reminder
      }

      this.$emit('add_task', newTask)
      this.text = ''
      this.day = ''
      this.reminder = false
    }
  }
}
</script>

<style scoped>
    .add-form {
        margin-bottom: 40px;
    }

    .form-control {
        margin: 20px auto;
    }

    .form-control label {
        display: block;
    }

    .form-control input {
        width: 95%;
        height: 40px;
        margin: 5px auto;
        padding: 3px 7px;
        font-size: 18px;
    }

    .form-control-check {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .form-control-check label {
        flex: 1;
    }

    .form-control-check input {
        flex: 2;
        height: 20px;
    }

    .btnSave {
        width: 40%;
        height: 45px;
        background-color: rgb(9, 52, 179);
        color: #fff;
    }

    .btnSave:hover {
        background-color: rgb(72, 115, 241);
    }

    .label {
        font-size: 1.4rem;
        font-weight: bold;
    }

    .checkColor {
        accent-color: rgb(9, 52, 179);
    }
</style>
