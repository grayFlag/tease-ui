<template>
    <div class="h_msg">
        {{message}}
    </div>
</template>

<script>
export default {
    name: 'h-message',
    props: {
    message: String
  }
}
</script>

<style lang="scss" scoped>
    .h_msg{
        color: red;
    }
</style>