<template>
<div>
    <el-row>
        <el-button type="primary" icon="el-icon-edit" round @click="writeNew()">新文章</el-button>
    </el-row>
    <el-table :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
        <el-table-column label="Date" prop="date">
        </el-table-column>
        <el-table-column label="Title" prop="title">
        </el-table-column>
        <el-table-column label="Type" prop="type">
        </el-table-column>
        <el-table-column align="right">
            <template slot="header" slot-scope="slot">
            <el-input
              v-model="search"
              size="mini"
              placeholder="Title to search"/>
          </template>
            <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <el-button size="mini" type="danger" @click="dialogVisible = true">Delete</el-button>
          </template>
        </el-table-column>
    </el-table>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
        <span>还想在这儿删,咋不上天呢</span>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
  </span>
    </el-dialog>
</div>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false,
            tableData: [{
                id: 1,
                date: '2016-05-02',
                title: '假装是个名字1',
                type: '前端'
            }, {
                id: 2,
                date: '2016-05-04',
                title: '假装是个名字2',
                type: 'fitness'
            }, {
                id: 3,
                date: '2016-05-01',
                title: '假装是个名字3',
                type: '后端'
            }, {
                id: 4,
                date: '2016-05-03',
                title: '假装是个名字4',
                type: '测试'
            }, {
                id: 4,
                date: '2016-05-05',
                title: '假装是个名字5',
                type: '运维'
            }],
            search: ''
        }
    },
    methods: {
        handleEdit(index) {

            // console.log(this.tableData[index]);

            this.jumpEdit(this.tableData[index].id);
        },
        handleDelete(index) {
            console.log(this.tableData[index]);
        },
        writeNew() {
            // console.log("run this");
            this.jumpEdit(false);
        },
        jumpEdit(pageId) {
            let id = pageId || "";
            console.log(id);
            this.$router.push({
                name: "edit",
                params: {
                    id: id
                  }
            })
        }

    },
}
</script>
