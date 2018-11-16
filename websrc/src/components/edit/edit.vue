<template lang="html">
    <div style="text-align:left;">
        <el-form label-position="top" ref="form" :model="sizeForm" label-width="100px" size="mini">
            <el-form-item label="日期" size="large">
                <el-col :span="6">
                  <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="标题" >
                <el-col :span="8">
                    <el-input v-model="sizeForm.title" size="mini"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="副标题" >
                <el-col :span="8">
                    <el-input v-model="sizeForm.title" size="mini"></el-input>
                </el-col>
            </el-form-item>

            <el-form-item label="类型选择" size="large" label-position="right">
                <el-radio-group v-model="sizeForm.resource" size="medium">
                  <el-radio border label="前端"></el-radio>
                  <el-radio border label="后端"></el-radio>
                </el-radio-group>
              </el-form-item>

            <el-form-item size="large" label="内容">
                <div ref="editor" style="text-align:left:height:100vh;"></div>
            </el-form-item>
            <el-form-item size="large">
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import E from 'wangeditor';
export default {
    created() {
        if (this.$route.params.id) {

        } else {

        }
    },
    data() {
        return {
            editorContent: '',
            sizeForm: {
                title: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    methods: {
        getContent: function() {
            alert(this.editorContent)
        },
        onSubmit() {
            console.log(this.editorContent);
            console.log('submit!');
        }
    },
    mounted() {
        var editor = new E(this.$refs.editor)
        editor.customConfig.onchange = (html) => {
            this.editorContent = html
        }
        editor.create()
    }
}
</script>

<style lang="css">
</style>
