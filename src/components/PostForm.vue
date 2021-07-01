<template>
<form @submit.prevent="submit">
  <input type="text" v-model="title">
  <input type="text" v-model="body">
  <button type="sumbit">Create Post</button>
</form>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      title: "",
      body: ''
    };
  },
  methods: {
      ...mapMutations(['createPost']),
      submit() {
            // use mutations if you do not need to send it to server
            // use actions to send it to server and recieve the response
            console.log('submit');
            this.createPost({title: this.title, body: this.body, id: Date.now()});
            this.title = this.body = '';
      }

  }
};
</script>

<style lang="">
    input {
        display: block;
        width: 100%;
        border: 1px solid steelblue;
        border-radius: 2px;
        margin-bottom: 10px;
    }
    </style>
