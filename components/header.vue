<template>
    <div >
       <a-anchor>
        <header style="padding:0px 20px ;">
        <a-menu  mode="horizontal">
                <a-col :span="3">
                    <img src="../assets/logo.png" alt="">
                </a-col>
                <a-sub-menu key="sub0">
                    <template #title>Creation </template>
                        <a-menu-item style="position: unset;" :span="6" key="setting:1">
                            <a-row>
                                <a-col>
                                    <Strong>Website Design</Strong>
                                    <p>Discover all the ways you can create and design your website on Wix.</p>
                                </a-col>
                            </a-row>
                        </a-menu-item>
                        <a-menu-item :span="8" key="setting:1">
                            <Strong>Website Design</Strong>
                            <p>Discover all the ways you can create and design your website on Wix.</p>
                        </a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub1">
                    <template #title>Business </template>
                        <a-menu-item style="position: unset;" :span="6" key="setting:1">
                            <a-row>
                                <a-col>
                                    <Strong>Website Design</Strong>
                                    <p>Discover all the ways you can create and design your website on Wix.</p>
                                </a-col>
                            </a-row>
                        </a-menu-item>
                        <a-menu-item :span="8" key="setting:1">
                            <Strong>Website Design</Strong>
                            <p>Discover all the ways you can create and design your website on Wix.</p>
                        </a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <template #title>Growth </template>
                        <a-menu-item style="position: unset;" :span="6" key="setting:1">
                            <a-row>
                                <a-col>
                                    <Strong>Website Design</Strong>
                                    <p>Discover all the ways you can create and design your website on Wix.</p>
                                </a-col>
                            </a-row>
                        </a-menu-item>
                        <a-menu-item :span="8" key="setting:1">
                            <Strong>Website Design</Strong>
                            <p>Discover all the ways you can create and design your website on Wix.</p>
                        </a-menu-item>
                        
                </a-sub-menu>
                <a-sub-menu>
                    <template #title>Theme</template>
                    <a-menu-item>
                        <p @click="color=theme('style')">Default</p>
                    </a-menu-item>
                    <a-menu-item>
                        <p @click="color=theme('theme1')">Red</p>
                    </a-menu-item>
                    <a-menu-item>
                        <p @click="color=theme('theme2')">Green</p>
                    </a-menu-item>
                </a-sub-menu>
                <a-menu-item key="login" style="float: right;">
                    <loginVue :acc="acc"/>
                </a-menu-item>
        </a-menu>
        
    </header> 
       </a-anchor>
    <articleHeader/>
    </div>
</template>

<script>

import articleHeader from './article-header.vue';
import itemMenu from './item-menu.vue';
import loginVue from './login.vue';
import Vue from 'vue';
// import "../assets/scss/scss"
import fs from "fs"
import {ref} from "vue" 
export default{
    components:{
        itemMenu,
        articleHeader,
        loginVue
    },
  
    setup:()=>{
        const acc  = ref({})
        try {
            acc.value =Vue.$cookies.get("acc");
        } catch (error) { }
        console.log(acc.value);
        
        const chooseTheme = ref((theme)=>{
            
            try {
                const scssToJs = require("nuxt-scss-to-js")
            } catch (error) {
                console.log(error);
                // console.log(fs);
            }
            // scssToJs.path=`~/assets/scss/${theme}.scss`
        })
        chooseTheme.value("theme1")

        if(typeof acc.value == undefined || acc.value =="" || acc.value== null){
            acc.value={
                username:"",
                password:""
            }
        }
        console.log(23);
        return{
            acc,
            chooseTheme
        }
    },
    methods:{
        theme(color){
            let acc= this.$cookies.get("acc")
            acc.themeId=color
            console.log(acc);
            this.chooseTheme()
            // axios.put("http://localhost:8080/account/theme",acc).
            // then(()=>{
            //     this.$cookies.set("acc",acc);
            //     // import(`../static/css/style/css.css`)

            //     location.reload();
            // })
        },
    }
}
</script>
<style scoped> 

</style>


