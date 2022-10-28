<template>
    <div class="backgrou">
       <div class="container" >
        <a-row  align="middle" >
            
            <a-col :span="9"  class="h ">
                <a-row >
                    <a-col style="width: 400px; margin:  auto ;">
                        <div style="padding: 30px; margin: 100px 0;">
                                <Strong class="title">
                                    Get inspired, gain new skills and see what’s trending
                                </Strong>
                                <a-button shape="round" style="margin-top: 20px;">
                                    Explore the Blog
                                </a-button>
                        </div>
                    </a-col>
                </a-row>
            </a-col>
            <a-col :span="15">
                <div class="h">
                    <div style="margin-top: 100px;">
                        <a-row   type="flex" justify="center">
                            <a-col class="item" :span="7">
                                <div>
                                    <img class="img" src="../assets/get/Group 3944.webp" alt="">
                                </div>
                                <a>
                                    <b>How to design a website </b>]
                                </a>
                            </a-col>
                            <a-col class="item" :span="7">
                                <div>
                                    <img class="img" src="../assets/get/Group 3945.webp" alt="">
                                </div>
                                <a>
                                    <b>How to design a website </b>]
                                </a>
                            </a-col>
                    </a-row>
                    <a-row   type="flex" justify="center">
                        <a-col class="item" :span="7">
                            <div>
                                <img class="img" src="../assets/get/Group 3947.webp" alt="">
                            </div>
                            <a>
                                <b>How to design a website </b>]
                            </a>
                        </a-col>
                        <a-col class="item" :span="7">
                            <div>
                                <img class="img" src="../assets/get/Group 3946.webp" alt="">
                            </div>
                            <a>
                                <b>How to design a website </b>]
                            </a>
                        </a-col>
                    </a-row>
                    </div>
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
        height: 450px;
    }
     
    .backgrou{
        background-color:black ;
        color: aliceblue;
    }
    .img{
        width: 200px;
    }
    .item{
        margin: 15px;
    }
</style>