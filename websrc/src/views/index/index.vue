<template>
<div>
    <el-container style="height: 100vh; border: 1px solid #eee">
        <el-header style="text-align: right; font-size: 12px">
            dasdasd
        </el-header>
        <el-container>
            <el-aside style="background-color:#545c64;height:100vh;width:240px;">
                <Nav></Nav>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>

        <!-- <el-main>

        </el-main> -->

        <!-- <Editor></Editor> -->


    </el-container>
</div>
</template>
<script>
import Editor from "../../components/Editor/Editor.vue";
import Nav from "../../components/Nav/Nav.vue";
import {
    mapGetters,
    mapMutations,
    mapActions
} from "vuex";
import {
    WEB_API
} from "../../constants/api.js";
export default {
    name: "index",
    data() {
        return {}
    },
    computed: {},
    watch: {},
    async created() {},
    async mounted() {},
    components: {
        Editor,
        Nav
    }
};
</script>

<style scoped lang="scss">
@import url("./index.sass");
</style>
