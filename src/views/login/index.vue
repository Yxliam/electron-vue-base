<template>
    <div class="login-box">
        <div class="logo-box">
            <img src="../../assets/logo.png" alt="">
        </div>
        <LoginForm title="密码登录">
            <div slot="content">
                <Input placeholder="邮箱"/>
                <Input class="mt10" type="password" placeholder="密码"/>
            </div>
             <div slot="tip">
               <div class="tip-right">
                   <router-link class="link" to="">忘记密码</router-link>
                   <span class="line">|</span>
                   <router-link class="link" to="/register">注册会员</router-link>
               </div>
            </div>
            <div slot="button">
                <Button type="primary" size="large" long>登录</Button>
            </div>
        </LoginForm>
    </div>
</template>

<script>
import { Button,Input } from 'iview';
import LoginForm from "@/components/loginRegisterForm"
export default {
    components:{
        Button,
        Input,
        LoginForm
    }
}
</script>

<style lang="scss" scoped>
    .mt10{
        margin-top:15px;
    }
    .login-box{
        display: flex;
         flex-direction:column;
        justify-content: center;
        align-items: center;
        height:100%;
        .tip-right{
            text-align: right;
            .line{
                display: inline-block;
                margin:0 5px;
            }
            .link{
                color: #666;
                text-decoration: none;
                transition: ease .3s;
            }
        }
    }
</style>