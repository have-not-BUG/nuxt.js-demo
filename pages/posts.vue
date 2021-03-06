<template>
  <div>

    <p class="red">中至 {{ name }}</p>

  </div>

</template>

<script>
  export default {
    middleware: 'onlyone',
    beforeCreate() {
      console.log('beforeCreate',new Date().getTime())
    },
   async created(){
      const ip = await this.$axios.$get('http://icanhazip.com')
      console.log('ip---------',ip)
      console.log('created',new Date().getTime())




    },
    async  asyncData ({ $axios }) {
      console.log('asyncData',new Date().getTime())
      // console.log('$axios',$axios)
      const ip = await $axios.$get('http://icanhazip.com')

      // console.log('context===',context)
      // called every time before loading the component
      return { name: 'post页面'+ip }
    },
    fetch () {
      console.log('fetch',new Date().getTime())




      // The fetch method is used to fill the store before rendering the page
    },
    head () {
      console.log('head',new Date().getTime())
     return {
       title:this.name,
       meta: [
         {
           hid: 'description',
           name: 'description',

           content: '自定义描述'
         }
       ]


     }
    },
    // and more functionality to discover
  }
</script>

<style>
  .red {
    color: red;
  }
</style>
