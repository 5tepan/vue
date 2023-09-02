<template>
    <div class="navbar">
        <div @click="$router.push('/')">Vue</div>
        <div class="navbarBtn">
            <my-button @click="$router.push('/')">Главная</my-button>
            <my-button @click="$router.push('/posts')" style="margin-left: 15px">Посты</my-button>
            <my-button @click="$router.push('/about')" style="margin-left: 15px">О сайте</my-button>
            <my-button @click="$router.push('/store')" style="margin-left: 15px">Store</my-button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
    height: 50px;
    background-color: lightblue;
    box-shadow: 2px 2px 4px lightblue;
    display: flex;
    align-items: center;
    padding: 0 15px;
}

.navbarBtn {
    margin-left: auto;
}
</style>