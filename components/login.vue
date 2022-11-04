<template>
    <div>
      <a-button v-if="!loggedIn" type="primary" @click="showModal">
        Login
      </a-button>
      <div @click="logout"  style="color: black !important;" v-if="loggedIn">Heloo!
        {{acc.fullname}}
      </div>
      <a-modal
        title="Đăng nhập"
        :visible="visible"
        :confirm-loading="confirmLoading"
        @ok="login"
        @cancel="handleCancel"
      >
      <p>{{ ModalText }}</p>
        <a-input v-model="acc.username" placeholder="username"></a-input>
        <a-input v-model="acc.password" type="password" style="margin-top: 30px;" placeholder="Password">
      </a-input>
      </a-modal>
    </div>
  </template>
  <script>
  import axios from "axios";
  import { ref} from "vue";
  import Vue from "vue";
  export default {
    
    data() {
      return {
        ModalText: 'Nhập account',
        visible: false,
        confirmLoading: false,
        
      };
    },
    props:{
      acc:{}
    },
    setup(props ){
      const loggedIn = ref(true)
      const acc = ref(props.acc)
      
      console.log(acc.value);
      if(acc.value.username==""){
        loggedIn.value=false
      }
      return{
        loggedIn,
        acc
      }
    },
    methods: {
      logout(){
        this.$cookies.remove("acc")
        location.reload();
      },
      showModal() {
        this.visible = true;
      },
      handleOk(e) {
        this.ModalText = 'Đang đăng nhập';
        this.confirmLoading = true;
        this.login()
      },
      handleCancel(e) {
        this.visible = false;
      },login(){
      axios.post("http://localhost:8080/account/login",this.acc).then
      ((respon)=>{
        this.acc=respon.data
        this.loggedIn=true
        import(`../static/css/style/${respon.data.themeId}.css`)
        this.handleCancel()
        this.$cookies.set("acc",this.acc)
      })
    }
    },
  };
  </script>
  