<template>
    <div>
        <h1>getters:{{$store.getters.sum}}</h1>
        <h1>{{$store.state.count}}</h1>
        <button @click="$store.commit('add',{a:2,b:3})">add</button>
        <button @click="reduceHandle">reduce</button>
        <h1>这是页面二</h1>
        <h1>用户名：{{$route.query.username}}</h1>
    </div>
</template>
<script>
export default {
    created(){
        // console.log(this.$route.query.username);
        console.log(this.$store.state.count);
    },
    methods: {
        // addHandle(){
        //     this.$store.commit('add',2);
        // },
        reduceHandle(){
            this.$store.dispatch('reduceAction',2);
        }
    },
}
</script>