<template>
    <div class="list">
        <div v-for="item in source" :key="item">{{item}}</div>        
    </div>
</template>

<script>
export default {
    name: "h-list",
    props: {
        source : {
            type: Array,
            default: ()=>[1,2,3,4]
        }
    }
}
</script>

<style lang="scss" scoped>
.list div:nth-child(2n) {
    color: blue;
}
</style>