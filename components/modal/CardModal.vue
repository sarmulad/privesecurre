<template>
  <div class="home">
    <button @click="callModal" class="btn my-6 rounded-md" >
      Buy PRSC With CARD
    </button>
    <Modal 
    v-if="isShowModal"
    :title="'Buy PRSC With CARD'"
    @close="close"
    >
    <template #body>
            <div class="container mx-auto">
                <div class="black-box">
                    <h2 class="md:mb-6 mb-8 text-gradient text-3xl">Buy PRSC With CARD</h2>
                    
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


@media screen and (max-width:500px){
   
   .black-box{
    padding: 2rem 1rem;
   }

}
</style>