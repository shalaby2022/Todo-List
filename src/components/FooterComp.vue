<template>
    <footer>
        <p>Copyright &copy; 2022</p>
        <router-link to="/about">About</router-link>
    </footer>
</template>

<script>
export default {
  name: 'FooterComp'
}
</script>

<style scoped>
    a {
        color: #333;
        text-decoration: none;
    }

    footer {
        margin-top: 30px;
        text-align: center;
    }
</style>
