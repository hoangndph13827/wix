<template>
    <div>
       <div class="" >
        <a-row  align="middle" >
            
            <a-col :span="9"  class="h backgrou">
                <a-row >
                    <a-col style="width: 400px; margin:  auto ;">
                        <div style="padding: 30px; margin: 100px 0;">
                                <Strong class="title">
                                    Drive traffic that converts
                                </Strong>
                                <p>Promote your business and reach the right audience:</p>
                                <ul>
                                    <li>Complete SEO solution</li>
                                    <li>AI-driven FB & IG Ads</li>
                                    <li>Email campaigns</li>
                                    <li>Social posts and more</li>
                                </ul>
                                <a-button shape="round" style="margin-top: 20px;">
                                    Get Started
                                </a-button>
                        </div>
                    </a-col>
                </a-row>
            </a-col>
            <a-col :span="15">
                <div class="image h">
                </div>
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
    .h{
        height: 600px;
    }
    .image{
        background-image: url("../assets/0784b1_aed5316fd629405b996ee28522eab926_mv2.webp");
        background-repeat: no-repeat;
        background-size: 100%;
    }
    .backgrou{
        background-color:black ;
        color: aliceblue;

    }
    li{
        list-style-type: "- " ;
    }
    ul{
        margin-top: 20px;
    }
</style>