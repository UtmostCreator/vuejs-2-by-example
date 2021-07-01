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
  async mounted() {
    // TODO get data from server and set to current vars/props
    // TODO axios example
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=2");
    this.items = await res.json();
  },
  methods: {

  }
};
</script>
