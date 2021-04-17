<template>
    <div>
        <div class="heading">
            <h2>Server status</h2>
        </div>
        <hr>
        <div class="servers" style="display: grid; grid: 1fr / 1fr 1fr">
            <ul class="server-details" style="display:flex; flex-flow:column; background: #2c3e50; color:white;">
                <li>lorem10</li>
                <li>lorem10</li>
                <li>lorem10</li>
                <li>lorem10</li>
                <li>lorem10</li>
            </ul>
            <div class="server-info" style="background: #cccccc;">
                Server info
            </div>
        </div>
        <hr>
        <div class="server-management">
            Server management goes here
        </div>
    </div>
</template>

<script>
export default {
}
</script>










<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
