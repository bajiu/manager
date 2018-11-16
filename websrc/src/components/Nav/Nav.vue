<template>
<el-menu unique-opened="true" :default-openeds="[]" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
    <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>内容编辑</template>
        <!-- <el-menu-item-group> -->
        <!-- <template slot="title">分组一</template> -->
        <el-menu-item index="dashboard">控制面板</el-menu-item>
        <el-menu-item index="edit">编辑</el-menu-item>
        <!-- </el-menu-item-group> -->
        <!-- <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu> -->
    </el-submenu>
</el-menu>
</template>
<style>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}
</style>

<script>
export default {
    data() {
        const item = {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        };
        return {
            tableData: Array(20).fill(item)
        }
    },
    methods:{
        handleSelect(e){
            this.$router.push({
                name: e,
            })
            console.log(e);
        }
    }
};
</script>
