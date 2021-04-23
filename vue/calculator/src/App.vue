<template>
  <div id="app">
      <h1>Calculadora</h1>
      <Calculator/>
  </div>
</template>

<script>
import Calculator from './main/Calculator'
export default {
    components: { Calculator }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,700;1,800;1,900&display=swap");

*{
    font-family: 'Montserrat', monospace;
}

body{
    margin: 0;
}

#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    background:linear-gradient(to left, #2d0c53, #3c0b74);
    color: #ffffff;
}
h1{
    margin-bottom: 50px;
    position: relative;
    bottom: 40px;
}
</style>