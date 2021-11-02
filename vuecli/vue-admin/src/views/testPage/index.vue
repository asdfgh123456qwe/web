<template>
    <div>
        测试页面
    </div>
</template>

<script>
import {levelList} from '@/api/level'
export default {
    created() {
        levelList().then(()=>{
            console.log("res");
        })
    },
}
</script>