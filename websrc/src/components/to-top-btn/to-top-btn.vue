<template>
    <div class="totopbtn">
        <img v-if="isToTop" class="totopbtn__p" @click="toTop" src="https://appd.knowbox.cn/ss/miniapp/miniapp_h5/ios_pay/to-top@2x.png" alt="">
    </div>
</template>
<script>
export default {
    name: "totopbtn",
    data() {
        return { isToTop: false, timer: null, scrollDom: null };
    },
    mounted() {
        this.scrollDom = document.querySelector("div[scroll]");
        this.$nextTick(() => {
            this.scrollDom.onscroll = async () => {
                if (this.scrollDom.scrollTop > this.scrollDom.clientHeight) {
                    this.isToTop = true;
                } else {
                    this.isToTop = false;
                }
            };
        });
    },
    methods: {
        toTop() {
            let _this = this;
            cancelAnimationFrame(_this.timer);
            _this.timer = requestAnimationFrame(function fn() {
                var oTop = _this.scrollDom.scrollTop;
                if (oTop > 0) {
                    _this.scrollDom.scrollTop = oTop - oTop / 10;
                    _this.timer = requestAnimationFrame(fn);
                } else {
                    cancelAnimationFrame(_this.timer);
                }
            });
        }
    }
};
</script>
<style lang="sass" scoped>
@import url('./to-top-btn.sass')
</style>
