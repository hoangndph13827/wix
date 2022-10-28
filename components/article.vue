<template>
    <div>
        <posterVue/>
        <platformVue/>
        <templateWebVue/>
        <div>
            <div class="container">
                <a-row justify="space-between"  >
                    <a-col :span="12">
                        <Strong style="font-size: 55px;color: black; line-height: 60px; ">
                            Build more than a website
                        </Strong>
                    </a-col>
                    <a-col style="margin-top: 10px; padding-left:100px ;" :span="12">
                        <p>
                            From selling online, starting a blog and organizing events to promoting your business and building your community, create a website that can grow with you.
                        </p>
                        <div>
                            <a-button type="link" style="padding: 0; margin-top: 5px;">Get started-></a-button>
                        </div>
                    </a-col>
                </a-row>
            </div>
        </div>
        <createItVue/>
        <websiteFoundation/>
        <businessVue/>
        <driveTrafficVue/>
        <manageBusinessVue/>
        <createWebVue/>
        <getInspiredVue/>
        <whyVue/>
        <FAQsVue/>
    </div>
</template>

<script>
import createItVue from './createIt.vue';
import posterVue from './poster.vue';
import platformVue from './platform.vue';
import templateWebVue from './templateWeb.vue';
import websiteFoundation from './websiteFoundation.vue'
import businessVue from './business.vue';
import driveTrafficVue from './driveTraffic.vue';
import manageBusinessVue from './manageBusiness.vue';
import createWebVue from './createWeb.vue';
import getInspiredVue from './getInspired.vue';
import whyVue from './why.vue';
import FAQsVue from './FAQs.vue';
export default{
    components:{
        posterVue,
        platformVue,
        templateWebVue,
        createItVue,
        websiteFoundation,
        businessVue,
        driveTrafficVue,
        manageBusinessVue,
        createWebVue,
        getInspiredVue,
        whyVue,
        FAQsVue
    }
}
</script>