<template>
  <div>
    <h2>next id:[{{$route.params}}]</h2>
    <p>我是嵌套组件中的子组件</p>
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
