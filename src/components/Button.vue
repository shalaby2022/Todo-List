<template>
 <button :style="{backgroundColor: btnColor }" @click="$emit('ShowAdd')" class="btn">{{text}}</button>
</template>

<script>
export default {
  name: 'ButtonView',
  props: {
    text: String,
    btnColor: String
  }
}
</script>

<style>
    .btn {
        display: inline-block;
        width: 5.5rem;
        height: 2.6rem;
        color: #fff ;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        font-family: inherit;
        text-decoration: none;
        border-radius: 5px;
    }
</style>
