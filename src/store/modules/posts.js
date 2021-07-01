export default {
    actions: {
        //   fetchPosts({commit}) { // another way of just getting commit
        // async fetchPosts(context, limit = 3) {
        async fetchPosts({commit, getters, dispatch}, limit = 3) {
            // context has a mathod commit;
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
            );
            const posts = await res.json();
            // context.commit('updatePosts', posts); // in case async fetchPosts(context, limit = 3)
            commit('updatePosts', posts);
            // to use another action you need dispatch!!
            dispatch('sayHello');
        },
        sayHello() {
            console.log('Inside say Hello action!');
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts;
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost);
        },
    },
    state: {
        posts: [],
    },
    getters: {
        allPosts(state) {
            return state.posts;
        },
        postsCount(state) {
            return state.posts.length;
        },
        getValidPosts(state) {
            return state.posts.filter(el => el.title && el.body);
        },
        // example on how to use own getters
        getValidCount(state, getters) {
            return getters.getValidPosts.length;
        }
    }
}

