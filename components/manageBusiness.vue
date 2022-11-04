<template>
    <div>
        <div class="container">
            <a-row>
                <a-col :span="10">
                    <a-carousel :autoplay=true class="bgr" effect="fade" arrows >
                        <div slot="prevArrow" slot-scope="props" class="custom-slick-arrow"
                            style="left: 10px;zIndex: 1">
                            <a-icon type="left-circle" />
                        </div>
                        <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 10px">
                            <a-icon type="right-circle" />
                        </div>
                        <div >
                            <img class="itemSlide" src="../assets/phone/0784b1_18cbbbe437dd4e80a19d28b7409c952e_mv2.webp" alt="">
                        </div>
                        <div >
                            <img class="itemSlide" src="../assets/phone/0784b1_88d46ca720464eb1b0fcec58df486dac_mv2.webp" alt="">
                        </div>
                        <div >
                            <img class="itemSlide" src="../assets/phone/0784b1_bd22c71214674958b1a5b1772e507e4e_mv2.webp" alt="">
                        </div>

                         
                    </a-carousel>
                </a-col>
                <a-col :span="14">
                    <div class="content">
                        <Strong class="title">
                            Manage your business like a pro
                        </Strong>
                        <p>
                            Capture leads, get reports and insights, automate your business, and more from desktop or on the go from your phone with the Wix Owner app.
                        </p>
                        <p>
                            Everything is synced for seamless management experience.
                        </p>
                        <a-button style="background-color: black; color:aliceblue;" shape="round">
                            Get Started
                        </a-button>
                    </div>
                </a-col>
            </a-row>
        </div>
    </div>

</template>

<style scoped>
.bgr{
    background-image: url("../assets/phone/bgr.webp");
    background-repeat: no-repeat;
    background-size: 100%;
    height: 850px;
    text-align: center;
}
.itemSlide{
    margin: auto;
    width: 59%;
    margin-top: 32%;
}
.content{
    margin: 200px 0 0 80px;
    width: 500px;
}
</style>