<template>
  <div class="home">
    <button @click="callModal" class="btn my-6 rounded-md" >
      Connect Wallet
    </button>
    <Modal 
    v-if="isShowModal"
    :title="'Wallet Connect'"
    @close="close"
    >
    <template #body>
            <div class="container mx-auto">
                <div class="black-box">
                    <h2 class="md:mb-6 mb-8 text-gradient text-3xl">Select Provider</h2>
                    <div class=" img-container">   
                       <div>
                        <img src='../../assets/img/meta.svg' alt='logo' className="img"/>
                        <p class="text-white">MetaMask</p>
                       </div>
                       <div>
                        <img src='../../assets/img/wallet.svg' alt='logo' className="img"/>
                        <p class="text-white">Wallet Connect</p>
                       </div>
                   </div>
                </div>
            </div>
            
    </template>
    </Modal>
  </div>
</template>

<script>
import Modal from './Modal.vue'

export default {
  data() {
    return {
      isShowModal: false
    }
  },
  components: {
    Modal
  },
  methods: {
    close() {
      this.isShowModal = false
    },
    callModal() {
      this.isShowModal = true
    }
  }
}
</script>
<style lang="css" scoped>

.black-box{
  background: #1e1c25;
  border-radius: inherit;
  padding: 5rem 4.5rem;
  text-align: center;
  border-radius: 10px;
}
.img-container{
    display: flex;
    gap: 3rem;
}

.img-container > div{
    display: flex;
    align-items: center;
    flex-direction: column;
}

.img{
    width: 136px;
    height: 136px;
    margin-bottom: 20px;
}

@media screen and (max-width:500px){
    .img-container{
     gap: 1.5rem;
    }
    .img-container > div p{
        font-size: 12px;
    }
  .img{
    width: 130px;
    height: 130px;
   }
   .black-box{
    padding: 2rem 1rem;
   }

}
</style>