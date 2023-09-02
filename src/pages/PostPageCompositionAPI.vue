<template>
    <div>
        <h1>Посты</h1>
        <my-input v-model="searchQuery" placeholder="Поиск..."/>
        <div class="appBtn">
            <my-button>
                Создать пост
            </my-button>
            <my-select
                v-model="selectedSort"
                :options="sortOptions"
            />
        </div>
        <my-dialog v-model:show="dialogVisible">
            <post-form/>
        </my-dialog>
        <post-list
            :posts="sortedAndSearchPosts"
            v-if="!isPostLoading"
        />
        <div v-else>Loading...</div>
<!--        <div class="pageWrapper">-->
<!--            <div-->
<!--                v-for="pageNumber in totalPages"-->
<!--                :key="pageNumber"-->
<!--                class="page"-->
<!--                :class="{-->
<!--                    'curPage': page === pageNumber-->
<!--                }"-->
<!--                @click="changePage(pageNumber)"-->
<!--            >-->
<!--                {{pageNumber}}-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"
import {usePosts} from "@/hooks/usePosts"
import {useSortedAndSearchPosts} from "@/hooks/sortedAndSearchPosts"
import {useSortedPosts} from "@/hooks/sortedPosts"

export default {
    components: {
        PostForm,
        PostList
    },
    data() {
        return {
            dialogVisible: false,
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По описанию'}
            ]
        }
    },
    setup(props) {
        const {posts, totalPages, isPostLoading} = usePosts(10)
        const {sortedPosts, selectedSort} = useSortedPosts(posts)
        const {searchQuery, sortedAndSearchPosts} = useSortedAndSearchPosts(sortedPosts)
        
        return {
            posts, totalPages, isPostLoading, sortedPosts, selectedSort, searchQuery, sortedAndSearchPosts
        }
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