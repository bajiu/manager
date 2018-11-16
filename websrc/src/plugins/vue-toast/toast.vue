<template>
    <transition name="toast-bounce">
        <div class="toast" v-show="theToast">
            {{msg}}
        </div>
    </transition>
</template>
 
<script>
export default {
    data() {
        return {
            theToast: false,
            msg: "",
            type: ""
        };
    }
};
</script>
 
<style lang="css" scoped>
.toast {
  position: fixed;
  top: 40%;
  left: 50%;
  width: 30vw;
  margin-left: -15vw;
  padding: 2vw;
  word-wrap: break-word;
  font-size: 4vw;
  color: #fff;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 2vw;
  z-index: 999;
  line-height: 1.4;
}

.toast-bounce-enter-active,
.toast-bounce-leave-active {
  transition: all 0.3s ease-in-out;
}
.toast-bounce-enter {
  opacity: 0;
}
.toast-bounce-leave-to {
  opacity: 0;
}
</style>
