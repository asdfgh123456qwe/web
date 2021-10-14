<template>
    <div>
        <h1>这里是页面一</h1>
        <h1>用户名:{{$route.params.username}}</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    created(){
        console.log(this.$route.params.username);
    }
}
</script>