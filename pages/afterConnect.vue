<template>
  <main id="buy">
    <section class="mission">
      <div class="container mx-auto md:my-32 my-10">
        <h2 class="text-gradient-2 md:text-4xl text-xl mb-6">
          Get in Early
        </h2>
        <p class="md:max-w-md">
          During our pre-sale, acquiring tokens could not be simpler. You may purchase 
          PriveSecure directly with your credit card, or you can use USDT or ETH from your 
          existing wallet. After the conclusion of the public presale, 
          you will be able to claim your acquired PriveSecure Tokens through the claim button on the home page.
        </p>
        <div class="flex wallet-container ">
            <EthModal/>
            <CardModal/>
            <UsdtModal/>
        </div>

        <div class="mt-5">
           <p >1 USDT = <br/> USDT RAISED : $1,145,382.95 OF $2,000,000</p>
        </div>
        <div class="progress mt-10">
			   <div class="progress-done">
			   </div>
         </div>
      </div>
    </section>

    <section class="py-16 content-block block-1">
       <h2 class="text-gradient md:text-4xl text-center text-xl mb-6">
          How to Buy
        </h2>
      <div class="container mx-auto my-16 items-center">
        <div class="text-container">
          <h2 class="text-gradient my-10 md:my-0 md:mb-6 md:text-3xl text-xl">
            Step 1          
          </h2>
          <p>
           To get started, you'll need either a wallet supported by Wallet Connect or 
           a MetaMask wallet loaded on your screen (we recommend Trust Wallet). 
          </p>
          <p>
            You'll have a more streamlined buying experience using a desktop browser. 
            MetaMask is the perfect tool for this purpose. 
          </p>
          <p>
            We advise using Trust Wallet and linking through the app's built-in browser 
            (simply paste https://buy.provesecure.io into the Trust Wallet Browser) for all mobile purchases.
          </p>
        </div>
        <div class="img-container">
          <img src="../assets/img/Phone.svg" alt="" />
        </div>
      </div>
    </section>
     <section class=" md:pt-24 pt-16 ">
      <div class="container mx-auto">
        <div class="flex flex-col items-center ">
          <h2 class="text-gradient mb-10 text-3xl ">
            Step 2
          </h2>
          <p class="md:max-w-md text-center">
            Once your desired wallet provider is ready, click "Connect 
            Wallet" and choose the corresponding option. For mobile 
            wallet applications, you must choose "Wallet Connect."
            Then, you will have 3 choices:
          </p>

        </div>
        <div class="step-container mt-10 md:mb-10 mb-5">
          <div class="step-box">
            <img
              src="../assets/img/card.svg"
              alt="triangle alert"
              class="mb-8"
            />
          <h2 class="mx-auto text-gradient mb-5 text-2xl center">
            Buy with Card
          </h2>
            <p>This option enables you to acquire ETH, which will be 
              sent to your wallet through our partner, Transak. You 
              will then be able to buy $PRSC using this ETH. To begin, 
              click "Buy ETH With Card" and follow the on-screen instructions. 
              We propose acquiring at least $15 worth of
              ETH to satisfy the purchase minimum.</p>
          </div>
          
          <div class=" step-box">
            <img
              src="../assets/img/usdt.svg"
              alt="triangle alert"
              class="mb-8"
            />
            <h2 class="mx-auto text-gradient mb-5 text-2xl center">
            Buy PRSC with ETH
          </h2>
            <p>Once you have enough ETH in your wallet (please 
              choose option 1 to buy ETH first if you don't have ETH 
              or USDT), you can trade your ETH for PRSC. Enter the 
              minimum amount of PRSC you want to buy, and then 
              click "Convert ETH." Your wallet provider will ask you to 
              confirm the transaction and will also show you how 
              much gas costs.
            </p>
          </div>
          <div class="step-box">
            <img
              src="../assets/img/eth.svg"
              alt="triangle alert"
              class="mb-8"
            />

            <h2 class="mx-auto text-gradient mb-5 text-2xl center">
            Buy with Card
          </h2>
            <p>This option enables you to acquire ETH, which will be 
              sent to your wallet through our partner, Transak. You 
              will then be able to buy $PRSC using this ETH. To begin, 
              click "Buy ETH With Card" and follow the on-screen instructions. 
              We propose acquiring at least $15 worth of
              ETH to satisfy the purchase minimum.</p>
          </div>
          </div>
        </div>

    </section>
    

    <section class="my-16 content-block">
      <div class="container mx-auto items-center">
        <div class="img-container">
          <img src="../assets/img/secure.svg" alt="" />
        </div>

        <div class="text-container">
          <h2 class="text-gradient-3  md:my-0 md:mb-6 md:text-3xl text-xl">
           Step 3
          </h2>
          <p>After the presale has come to an end, you will be able to claim for your tokens. You will need to visit 
            the main site and click on the “Claim" button in order to receive your tokens. 
            We will release more information towards the end of the presale.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
<script >
import EnterPresale from "../components/EnterPresale.vue";
import EthModal from '../components/modal/EthModal.vue'
import UsdtModal from '../components/modal/UsdtModal.vue'
import CardModal from '../components/modal/CardModal.vue'


export default {
    components: { EnterPresale, EthModal,UsdtModal,CardModal},  
    head() {
        return {
            title: "How to buy | PriveSecure",
        };
    },

};
</script>

<style>
.mission .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.content-block .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: top center;
  grid-gap: 2rem;
}
.wallet-container{
    gap: 2rem;
    margin-top: 2rem;
}
.content-block:last-child .text-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.block-1 {
  background-image: url("../assets/img/blur-left.png");
  background-position: left center;
  background-repeat: no-repeat;
}
.block-2 {
  background: url("../assets/img/blur-right.png");
  background-position: right center;
  background-repeat: no-repeat;
}

.content-block ul {
  margin-left: 0;
  padding-left: 1rem;
  margin-top: 2rem;
}

.content-block li {
  line-height: 1.6;
  margin-bottom: 1.2rem;
}

.progress{
  width:400px;
  background: #4B4A51;
  height: 53px;
}
.progress-done{
  width:70%;
  height: 100%;
  background: linear-gradient(146.87deg, #5F36FF 3.58%, #08FF42 88.73%);
  box-shadow: inset 0px 5px 10px #08FF42;
  border-radius: 8px;
}
.step-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(5rem, 1fr));
  grid-gap: 2rem;
}
.step-box {
  background: #1e1c25;
  padding: 3rem 2rem;
  min-height: 400px;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.step-box::before {
  content: "";
  position: absolute;
  padding: 2px;
  border-radius: inherit;
  z-index: -1;
  top: -1px;
  bottom: -1px;
  right: -1px;
  left: -1px;
  background: linear-gradient(146.87deg, #5f36ff 3.58%, #08ff42 88.73%);
}

@media (max-width: 992px) {
   .step-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .content-block .container .step-container {
    grid-template-columns: auto;
  }
.step-container
   {
    grid-template-columns: 1fr;
  }
  .block-1,
  .block-2 {
    background: none;
  }

  .block-2 .img-container {
    order: 1;
  }
  .block-2 .text-container {
    order: 2;
  }

  .content-block ul {
    padding-left: 1.5rem;
  }

  .content-block h2 {
    line-height: 1.5;
  }
}

@media (max-width: 450px) {

  .progress{
    width: 300px;
  }

}
</style>
