<template>
  <div>
      <h1>
        mmmmmmmmmmm
      </h1>

      <input type="radio" name="options" value="True">
      <label >True</label><br>

      <input type="radio" name="options" value="False">
      <label >False</label><br>

      <button class = "send" type="button">Send </button>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
