<template>
    <div>
        <h1>Посты</h1>
        <my-input
            :model-value="searchQuery"
            placeholder="Поиск..."
            @update:model-value="setSearchQuery"
        />
        <div class="appBtn">
            <my-button @click="showDialog">
                Создать пост
            </my-button>
            <my-select
                :model-value="selectedSort"
                @update:model-value="setSelectedSort"
                :options="sortOptions"
            />
        </div>
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost"/>
        </my-dialog>
        <post-list
            :posts="sortedAndSearchPosts"
            @remove="removePost"
            v-if="!isPostLoading"
        />
        <div v-else>Loading...</div>
        <div class="pageWrapper">
            <div
                v-for="pageNumber in totalPages"
                :key="pageNumber"
                class="page"
                :class="{
                    'curPage': page === pageNumber
                }"
                @click="changePage(pageNumber)"
            >
                {{pageNumber}}
            </div>
        </div>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"
import {mapActions, mapGetters, mapMutations, mapState} from "vuex"

export default {
    components: {
        PostForm,
        PostList
    },
    data() {
        return {
            dialogVisible: false
        }
    },
    methods: {
        ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort'
        }),
        ...mapActions({
            fetchPosts: 'post/fetchPosts'
        }),
        createPost(post) {
            this.posts.push(post)
            this.dialogVisible = false
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true
        },
        changePage(pageNumber) {
            this.page = pageNumber
        }
    },
    mounted() {
        this.fetchPosts()
    },
    computed: {
        ...mapState({
            posts: state => state.post.posts,
            isPostLoading: state => state.post.isPostLoading,
            selectedSort: state => state.post.selectedSort,
            searchQuery: state => state.post.searchQuery,
            page: state => state.post.page,
            limit: state => state.post.limit,
            totalPages: state => state.post.totalPages,
            sortOptions: state => state.post.sortOptions
        }),
        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearchPosts: 'post/sortedAndSearchPosts'
        })
    },
    watch: {

    }
}
</script>

<style>
.appBtn {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
}

.pageWrapper {
    display: flex;
    margin-top: 15px;
}

.page {
    border: 1px solid coral;
    padding: 10px;
    cursor: pointer;
}

.curPage {
    border: 1px solid black;
}
</style>