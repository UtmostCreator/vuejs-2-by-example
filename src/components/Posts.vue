<template>
<div>
  <div class="post" v-for="item in items" :key="item.id">
    <h3>{{item.title}}</h3>
    <p>{{item.body}}</p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      title: "Posts",
      items: []
    };
  },
  methods: {

  }
};
</script>

<style lang="">
    .post {
        border: 3px solid steelblue;
    }
    div.post:not(:last-child) {
        margin-bottom: 2px;
    }
</style>
