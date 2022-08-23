<template >
  <div class="modal-backdrop" >
    <div class="modal">
      <header class="modal-header">
        <img class="btn-close" @click="close"  src="../../assets/img/close.svg" alt="">
      </header>
      <section class="modal-body">
        <slot name="body" 
        />
      </section>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    props: {
      title: {
        type: String,
        required: false
      }
    },
    methods: {
      close() {
        this.$emit('close')
      }
    }
  };
</script>

<style lang="css">
  .modal-backdrop {
    position: fixed;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(49,49,49,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    position: relative;
    padding: 30px 30px 40px 30px;
    width: 630px;
    z-index: 1000;
    background: transparent;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background: linear-gradient(146.87deg, #5f36ff 3.58%, #08ff42 88.73%);
  }

  .btn-close {
    position: absolute;
    top: 17px;
    right: 17px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    color: #ffffff;
    width: 20px;
    background: transparent;
  }

</style>