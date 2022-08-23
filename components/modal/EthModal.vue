<template>
  <div class="home">
    <button @click="callModal" class="btn my-6 rounded-md" >
      Buy PRSC With ETH
    </button>
    <Modal 
    v-if="isShowModal"
    :title="'Buy PRSC With ETH'"
    @close="close"
    >
    <template #body>
            <div class="container mx-auto">
                <div class="black-box">
                    <h2 class="md:mb-6 mb-8 text-gradient text-3xl">Buy PRSC With ETH</h2>
                    <form>
                    <div class="input-container mb-8">
                    <input class="input-field " type="number" placeholder="0"/>
                    <span class="right-txt">PRSC</span>
                    </div>
                    <div class="input-container ">
                        <input class="input-field " type="number" placeholder="0"/>
                        <span class="right-txt">ETH</span>
                    </div>
                     <button class="btn my-6 rounded-md">Buy PRSC With ETH</button>
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
@media screen and (max-width:500px){
   
   .black-box{
    padding: 2rem 1rem;
   }

}
</style>