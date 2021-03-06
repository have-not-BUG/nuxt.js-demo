<template>
  <div>
    <h2>users id:[{{$route.params.id}}]</h2>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    validate({ params }) {
      // 必须是number类型
      return /^\d+$/.test(params.id)
    },

  };
</script>

<style>
</style>
