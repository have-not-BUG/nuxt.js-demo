<template>
    <div>
      <p>{{name1}}</p>
    </div>
</template>

<script>
    export default {
      name: "error",
      async asyncData({ $axios, error }) {
        return $axios.get(`http://icanhazip.com`)
          .then(res => {
            return { name1: res }
          })
          .catch(e => {
            console.error(e)
            error({ statusCode: 404, message: 'Post not found' })
          })
      }
    }
</script>

<style scoped>

</style>
