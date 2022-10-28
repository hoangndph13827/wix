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
        </a-menu>
        
    </header> 
       </a-anchor>
    <articleHeader/>
    </div>
</template>

<script>
import articleHeader from './article-header.vue';
import itemMenu from './item-menu.vue';
export default{
    components:{
        itemMenu,
        articleHeader
    }
}
</script>
<style scoped> 
 
  </style>


