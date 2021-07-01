<template>
<div>
  <div class="post" v-for="item in items" :key="item.id">
    <h3></h3>
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
  async mounted() {
    // TODO get data from server and set to current vars/props
    // TODO axios example
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=2");
    this.posts = await res.json();
  },
  methods: {

  }
};
</script>
