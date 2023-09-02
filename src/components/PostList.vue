<template>
    <div v-if="posts.length > 0">
        <h3>Список постов</h3>
        <transition-group name="postList">
            <post-item
                v-for="post in posts"
                :post="post"
                :key="post.id"
                @remove="$emit('remove', post)"
            />
        </transition-group>
    </div>
    <h2 v-else style="color: red">
        Список постов пуст :(
    </h2>
</template>

<script>
import PostItem from "@/components/PostItem.vue"

export default {
    components: {
        PostItem
    },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.postList-enter-active, .postList-leave-active {
    transition: opacity .5s;
}
.postList-enter, .postList-leave-to {
    opacity: 0;
}
</style>