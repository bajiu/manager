<template lang="html">
  <div>

      <!-- 我是一个登陆页面 -->
      <canvas id="world" width="200" height="300"><p class="noCanvas">You need a <a href="http://www.google.com/chrome">modern browser</a> to view this.</p></canvas>
      <div class="">
         双击/上下左右操作
      </div>
      <div id="panel">
          <a id="keyboardUp" href="#">up</a>
          <a id="keyboardDown" href="#">down</a>
          <a id="keyboardLeft" href="#">left</a>
          <a id="keyboardRight" href="#">right</a>
      </div>
      <el-card class="box-card" shadow="always">
          <div style="text-align:center;padding:20px;font-size:32px;font-weight:900;">
              登陆
          </div>
          <el-form class="form" ref="form" :model="form" label-width="80px">
              <el-form-item label="用户名">
                <el-input v-model="form.username"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
              </el-form-item>
              <el-form-item label="验证码">
                <el-input v-model="form.validate"></el-input>
              </el-form-item>
              <el-form-item>
                 <el-button>登陆</el-button>
                 <el-button>再放一个</el-button>
              </el-form-item>

          </el-form>
      </el-card>


  </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: "",
                password: "",
                validate: "",
            }
        }
    },
    created(){
        
    }
}
</script>

<style lang="css">
#panel{
    display: none;
}
#world{
    position: absolute;
    top: 0;
    left: 0;
}
.box-card{
    position: absolute;
    width: 400px;
    right: 30px;
    top: 20%;
    box-sizing: border-box;
    padding-right: 50px;
    padding-bottom: 50px 0;
}




/* .form{

    width: 200px;

} */
</style>
