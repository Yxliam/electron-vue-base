<template>
    <div class="login-box">
        <div class="logo-box">
            <img src="../../assets/logo.png" alt="">
        </div>
        <LoginForm>

        </LoginForm>
        <div>
            <Button type="primary">按钮</Button>
        </div>
    </div>
</template>

<script>
import { Button } from 'iview';
import LoginForm from "@/components/loginRegisterForm"
export default {
    components:{
        Button,
        LoginForm
    }
}
</script>

<style lang="scss" scoped>
    .login-box{
        display: flex;
         flex-direction:column;
        justify-content: center;
        align-items: center;
        .logo-box{
            margin-top:20px;
        }
    }
</style>