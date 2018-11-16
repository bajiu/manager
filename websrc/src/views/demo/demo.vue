<template>
  <div class="demo" scroll>
    <header class="title">这是一个骚气的不要不要的粉红色的demo页</header>
    <div class="demo__s1" son-scroll>
        <div v-for="i in 100" :key='i'>
            骚气的的滚动区域
        </div>
    </div>
    <ToTopBtn></ToTopBtn>
    <GoBackBtn end='index'></GoBackBtn>
  </div>
</template>
<script>
import ToTopBtn from "../../components/to-top-btn/to-top-btn";
import GoBackBtn from "../../components/go-back-btn/go-back-btn";
import { noscrolling } from "../../utils/no-scrolling.js";
import { mapGetters, mapMutations, mapActions } from "vuex";

// @ is an alias to /src
export default {
    name: "demo",
    data: function() {
        return {};
    },
    computed: {},
    watch: {},
    async created() {},
    async mounted() {
        noscrolling();
    },
    components: { ToTopBtn, GoBackBtn }
};
</script>

<style scoped lang="scss">
@import url("./demo.sass");
</style>
