<template>
  <div>
    <h2> index组件 {{$route.params}}</h2>
    <p>我是嵌套组件中的index组件</p>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    // validate({ params }) {
    //   // 必须是number类型
    //   return /^\d+$/.test(params.id)
    // },

  };
</script>

<style>
</style>
