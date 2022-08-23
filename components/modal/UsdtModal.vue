<template>
  <div class="home">
    <button @click="callModal" class="btn my-6 rounded-md" >
      Buy PRSC With USDT
    </button>
    <Modal 
    v-if="isShowModal"
    :title="'Buy PRSC With USDT'"
    @close="close"
    >
    <template #body>
            <div class="container mx-auto">
                <div class="black-box">
                    <h2 class="md:mb-6 mb-8 text-gradient text-3xl">Buy PRSC With USDT</h2>
                    <form>
                    <div class="input-container mb-8">
                    <input class="input-field " type="number" placeholder="0"/>
                    <span class="right-txt">PRSC</span>
                    </div>
                    <div class="input-container ">
                        <input class="input-field " type="number" placeholder="0"/>
                        <span class="right-txt">USDT</span>
                    </div>
                     <button class="btn my-6 rounded-md">Buy PRSC With USDT</button>
                    </form>
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

.input-container, .input-field{
    background-color: #fff;
    color: #000;
}
.input-container {
    width: fit-content;
    position: relative;
    margin-top: 16px;
}
  
.input-field {
    padding: 8px 12px;
    position: relative;
    width: 300px;
    color: #000000;
    font-weight: 700;
    border-radius: 6.62185px;
    outline: none;
}
.right-txt {
    position: absolute;
    right: 8px;
    top: 10px;
    font-style: normal;
    font-size: 12.4675px;
    font-weight: 700;
    line-height: 19px;
    text-align: center;
    color: #000000;
}
@media screen and (max-width:500px){
   
   .black-box{
    padding: 2rem 1rem;
   }

}
</style>