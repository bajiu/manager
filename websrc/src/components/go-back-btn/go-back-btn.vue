<template>
    <div class="gobackbtn" @click="goback">
    </div>
</template>
<script>
export default {
    name: "gobackbtn",
    props: {
        end: {
            default() {
                return "";
            }
        }
    },
    data() {
        return {};
    },
    methods: {
        goback() {
            this.$router.replace(`/${this.end}`);
        }
    }
};
</script>
<style lang="sass" scoped>
@import url('./go-back-btn.sass')
</style>
