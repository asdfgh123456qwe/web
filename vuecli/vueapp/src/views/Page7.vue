<template>
  <div>
    <h1>page7</h1>
    <baidu-map center="北京" class="bm-view" ak="MkWSCA12mZGer1QAlZGuAP2mOVwqFRm7">
        <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    </baidu-map>
  </div>
</template>
<script>
// import BaiduMap from "vue-baidu-map/components/map/Map.vue";
export default {
//   components: {
//     BaiduMap,
//   },
};
</script>
<style scoped>
.bm-view {
  width: 100vw;
  height: 100vh;
}
</style>