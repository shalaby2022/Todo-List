<template>
    <div>
      <h2>{{title}}</h2>
      <p class="txt">Counter <span class="count">{{count}}</span></p>
      <button :onclick="incNum">➕</button>
      <button :onclick="decNum">➖</button>
    </div>
</template>

<script>
export default {
  name: 'CounterComp',
  props: {
    title: {
      type: String,
      default: 'Welcome'
    }
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    incNum () {
      this.count += 1
    },
    decNum () {
      if (this.count > 0) {
        this.count -= 1
      }
    }
  }
}

</script>

<style>
  button {
    background-color: green;
    color: #fff;
    display: inline-block;
    width: 100px;
    height: 30px;
    margin-left: 10px;
    margin-top: 20px;
  }
  .txt {
    font-weight: bold;
    font-size: 1.3rem;
  }
  .count {
    color: red;
    font-size: 1.5rem;
  }
</style>
