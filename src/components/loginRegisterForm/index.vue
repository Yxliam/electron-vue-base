<template>
    <div class="form-box">
        <div class="title"><span>{{this.title}}</span></div>
         <div class="content-box">
             <slot name="content"></slot>
         </div>
         <div class="tip-box">
             <slot name="tip"></slot>
         </div>
         <div class="button-box">
             <slot name="button"></slot>
         </div>
    </div>
</template>

<script>
import { Button } from 'iview';
export default {
    props:{
        title:{
            type: String,
        }
    },
    components:{
        Button,
    }
}
</script>

<style lang="scss" scoped>
   .form-box{
        margin: 20px auto 0;
        padding: 30px;
        width: 400px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 30px rgba(0,0,0,.05);
        z-index: 1000;
        .title{
           font-size: 16px;
            color: #999;
            border-bottom: 1px solid #d6d8d8;
            span{
                display: inline-block;
                margin-right: 25px;
                padding: 0 0 15px 0;
                color: #333;
                border-bottom: 3px solid #333;
            }
        }
        .content-box{
            margin-top: 30px;
        }
        .tip-box{
            margin-top:10px;
            margin-bottom:30px;
        }
   }
</style>