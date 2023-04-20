<template >
    <h1>
        Wellcome to the admin page
    </h1>
    <div>
        <router-link to="/">Home page</router-link>
    </div>
    <button class="btn btn-active" @click="logout">Log out</button>
</template>
<script setup>
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const logout = () => {
        localStorage.removeItem('token')
        router.push('/');
    }
</script>