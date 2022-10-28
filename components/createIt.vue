<template>
    <div>
       <div class="" >
        <a-row  align="middle" >
            <a-col :span="15">
                <div class="image h">
                </div>
            </a-col>
            <a-col :span="9" style="background-color:#DAC4FB ;" class="h">
                <a-row >
                    <a-col style="width: 400px; margin:  auto ;">
                        <div style="padding: 30px; margin: 100px 0;">
                                <Strong class="title">
                                    And create it your way
                                </Strong>
                                <div class="magin"></div>
                                <li>Smart drag and drop editor</li>
                                <li>1000’s of advanced design capabilities</li>
                                <li>Custom domain, logo and more brand tools</li>
                                <li>Full-stack web dev tools for custom functionality</li>
                                <li>AI technology that creates a site for you</li>
                        </div>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
       </div>
    </div>
</template>
<style scoped>
    .title{
        font-size: 55px;
        line-height: 55px;

    }
    li{
        list-style-type: "- " ;
    }
    .magin{
        margin-bottom: 40px;;
    }
    .h{
        height: 600px;
    }
    .image{
        background-image: url("../assets/img.webp");
        background-repeat: no-repeat;
        background-size: 100%;
    }
</style>