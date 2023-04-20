<template>
    <div class="container">
        <h2 class="text-center pt-10">Login</h2>
        <p class="text-danger" v-if="error">{{ error }}</p>
        <form class="card" @submit.prevent="login" autocomplete="off">
            <div class="form-group  m-2 tex">
                <label for="email ">Email</label>
                <input type="email" v-model="form.email" id="email" class="form-control mt-2"/>
                <!-- <div  class="invalid-feedback">Username is required</div> -->
            </div>
            <div class="form-group  m-2">
                <label htmlFor="password ">Password</label>
                <input type="password" v-model="form.password" id="password" class="form-control mt-2"/>
                <!-- <div  class="invalid-feedback">Password is required</div> -->
            </div>
            <div class="form-group m-2 d-flex justify-content-between flex-row-reverse">
                <button type="submit" class="btn btn-primary ">Login</button>
                <!-- <img  src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /> -->
                <router-link to="/register" class="btn btn-linkk">Register</router-link>
            </div>
        </form>
    </div>
</template>

<script setup>
    import { reactive , ref } from 'vue';

    import { useRouter } from 'vue-router';

    let form = reactive({
        'email': '',
        'password': '',
    })

    let error = ref('')

    const router = useRouter()

    const login = async() => {
        await axios.post('/api/login',form).then(response => {
            if(response.data.success){
                localStorage.setItem('token', response.data.data.token)
                router.push('/admin/home')
            }
            else {
                error.value = response.data.message
            }
        })
    }

</script>

<style scope>
.container {
    width: 500px;
    height: 500px;
}
</style>