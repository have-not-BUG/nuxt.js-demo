<template>
  <div>
    <nuxt-link to="/">首页</nuxt-link>
    <nuxt-link to="/posts">posts</nuxt-link>
    <nuxt-link to="/todos">todos</nuxt-link>
    <nuxt-link to="/users/168">users</nuxt-link>
    <nuxt-link to="/110/gameId/">gameId</nuxt-link>
    <nuxt-link to="/120/gameAreaId">gameAreaId</nuxt-link>
    <nuxt-link to="/next/">next</nuxt-link>
    <nuxt-link to="/next/index">next/index</nuxt-link>
    <nuxt-link to="/next/119">next/119</nuxt-link>
    <nuxt-link to="/transition">transition</nuxt-link>
    <nuxt-link to="/error">error</nuxt-link>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
