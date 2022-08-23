<template>
  <main>
    <div class="hero-banner pb-48">
      <section class="hero">
        <div class="container mx-auto items-center pt-2 space-y-0">
          <div class="hero-text">
            <h1
              class="text-gradient text-3xl lg:text-5xl mb-4 lg:mr-10 lg:mt-10"
            >
              Securely save your files and information with Privesecure.
            </h1>
            <p class="mt-3 md:mb-10 mb-4 text-xl md:pr-10">
              Aspiring to be the most comprehensive and secure cloud service
              package available.
            </p>
            <div class="btn-container">
              <!-- <a
                href="https://presale.privesecure.io"
                target="_blank"
                class="btn my-6 rounded-md"
                >Login</a
              > -->
              <a
                href="/buy"
                class="btn md:my-6 md:ml-4 rounded-md presale-btn"
                >Enter Presale</a
              >
            </div>
          </div>
          <div class="hero-image">
            <img
              src="../assets/img/HeroImage.svg"
              alt=""
              class="block xl:hidden"
            />
            <div class="image-frame xl:block hidden">
              <img
                src="../assets/heroimage/Folder 1.svg"
                alt="folder"
                class="folder"
              />
              <img
                src="../assets/heroimage/Monitor 1.svg"
                alt="folder"
                class="monitor"
              />
              <img
                src="../assets/heroimage/Envelope 1.svg"
                alt="folder"
                class="envelope"
              />
              <img src="../assets/heroimage/PC 1.svg" alt="folder" class="pc" />
              <img
                src="../assets/heroimage/Secure Img 1.svg"
                alt="folder"
                class="secure-img"
              />
              <img
                src="../assets/heroimage/Lock 1.svg"
                alt="folder"
                class="lock"
              />
              <img
                src="../assets/heroimage/Phone 2.svg"
                alt="folder"
                class="phone-2"
              />
              <img
                src="../assets/heroimage/Bubble 2.svg"
                alt="folder"
                class="bubble-2"
              />
              <img
                src="../assets/heroimage/Bubble 6.svg"
                alt="folder"
                class="bubble-6"
              />
              <img
                src="../assets/heroimage/Bubble 5.svg"
                alt="folder"
                class="bubble-5"
              />
            </div>
          </div>
        </div>
      </section>

      <div class="container mx-auto mt-10 featured-on pb-10">
        <p class="md:text-xl text-2xl">We are Featured on</p>
        <div class="brands">
          <img src="../assets/img/coinmarket.svg" alt="Coin Market Cap" />
          <img src="../assets/img/coinbase.svg" alt="CoinBase" />
          <img src="../assets/img/coinGeckogrey.svg" alt="CoinGecko" />
          <img src="../assets/img/forbes.svg" alt="Forbes" />
          <img src="../assets/img/coinTelegraph.svg" alt="Coin Telegarph" />
        </div>
      </div>
    </div>

    <section class="features md:pt-24 pt-16" id="features">
      <div class="container mx-auto">
        <h2 class="mx-auto text-gradient mb-10 text-3xl center">
          Our Features
        </h2>
        <div class="features-container mt-10 md:mb-10 mb-5">
          <div class="feature-box">
            <img
              src="../assets/img/triangle-alert.svg"
              alt="triangle alert"
              class="mb-8"
            />

            <p>Intelligent threat detection and data leak prevention</p>
          </div>
          <div class="feature-box">
            <img
              src="../assets/img/shield-keyhole.svg"
              alt="triangle alert"
              class="mb-8"
            />

            <p>Security and compliance tailored to your requirements</p>
          </div>
          <div class="feature-box">
            <img
              src="../assets/img/ui-preferences.svg"
              alt="triangle alert"
              class="mb-8"
            />

            <p>Zero-trust security controls</p>
          </div>
          <div class="feature-box">
            <img
              src="../assets/img/arrow-cycle.svg"
              alt="arrow cycle"
              class="mb-8"
            />

            <p>99.9% uptime guarantee</p>
          </div>
          <div class="feature-box">
            <img src="../assets/img/bx_lock.svg" alt="lock" class="mb-8" />

            <p>End-to-end data encryption</p>
          </div>
          <div class="feature-box">
            <img
              src="../assets/img/cloud-security.svg"
              alt="cloud-security"
              class="mb-8"
            />

            <p>Capabilities for advanced cybersecurity</p>
          </div>
        </div>
        <Nuxt-link to="/ecosystem" class="btn my-4 mx-auto"
          >Learn more about Privesecure</Nuxt-link
        >
      </div>
    </section>

    <section class="secure md:pt-24">
      <div class="container mx-auto">
        <div class="text-container mt-16">
          <div class="cloud-img md:hidden mobile">
            <img src="../assets/img/secureCloudMobile.png" alt="cloud" />
          </div>
          <h3 class="text-2xl mb-6">Secure Cloud Adaptability</h3>
          <p class="mb-10">
            Our platform enables you to access your data from any location, on
            any device, and at any time. Monitor and manage your backups
            conveniently from anywhere: check the status of your backups or
            initiate a new one at any time. Take Privesecure Cloud with you
            everywhere you go. Your data is always available to you. Your data
            is always secure. Your information is always accessible.
          </p>
          <Nuxt-link to="/ecosystem" class="btn py-3 px-6 my-2 rounded-md"
            >Read more</Nuxt-link
          >
        </div>
        <div class="cloud-img hidden md:block">
          <img src="../assets/img/Frame-159.svg" alt="cloud" />
          <img src="../assets/img/Bubble2.svg" alt="bubble" class="bubble1" />
          <img src="../assets/img/Bubble2.svg" alt="bubble" class="bubble2" />
        </div>
      </div>
    </section>

    <section class="countdown md:py-32">
      <div class="container mx-auto">
        <h3 class="md:text-2xl text-base mb-4 md:mb-16">
          Hurry before Presale ends
        </h3>
        <div class="countdown-wrapper my-10">
          <div class="days box">{{ days | twoDigits }} <span>days</span></div>
          <div>:</div>
          <div class="hours box">
            {{ hours | twoDigits }} <span>hours</span>
          </div>
          <div>:</div>
          <div class="minutes box">
            {{ minutes | twoDigits }} <span>minutes</span>
          </div>
          <div>:</div>
          <div class="seconds box">
            {{ seconds | twoDigits }} <span>seconds</span>
          </div>

          <img
            src="../assets/img/Lock-1.svg"
            alt="lock"
            class="lock1 hidden md:block"
          />
          <img src="../assets/img/Phone.svg" alt="phone" class="phone" />
        </div>
      </div>
    </section>

    <SeenOn />
  </main>
</template>

<script>
import Logo from "~/components/Logo.vue";
import SeenOn from "../components/SeenOn.vue";

export default {
  components: {
    Logo,
    SeenOn,
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      finish: false,
      endDate: new Date("2022-09-07T12:00:00"),
    };
  },
  mounted() {
    const _self = this;
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
      /* if (!this.finish && this.calculatedDate - this.now <= 0) {
        _self.finish = true;
        _self.$emit("onFinish");
      } */
    }, 1000);
  },
  computed: {
    secondCount() {
      return this.calculatedDate - this.now;
    },
    calculatedDate() {
      return Math.trunc(Date.parse(this.endDate) / 1000);
    },
    seconds() {
      if (this.secondCount < 0) return 0;
      return this.secondCount % 60;
    },
    minutes() {
      if (this.secondCount < 0) return 0;
      return Math.trunc(this.secondCount / 60) % 60;
    },
    hours() {
      if (this.secondCount < 0) return 0;
      return Math.trunc(this.secondCount / 60 / 60) % 24;
    },
    days() {
      if (this.secondCount < 0) return 0;
      return Math.trunc(this.secondCount / 60 / 60 / 24);
    },
  },
  filters: {
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return "0" + value.toString();
      }
      return value.toString();
    },
  },
};
</script>

<style>
#nuxt {
  overflow-x: hidden;
}
.hero-banner {
  background-image: url("../assets/img/hero-wavy.svg");
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: 100%;
  background-size: 45%;
}
.hero {
  background-image: url("../assets/img/BG\ Blur-1.png"),
    url("../assets/img/BG\ Blur.png");
  background-repeat: no-repeat, no-repeat;
  background-position: right center, left center;
}

.hero .btn {
  min-width: 13rem;
  text-align: center;
}

.hero-image img {
  transform: scale(1.1);
}

.hero .container {
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 55% 45%;
}

.secure .container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.secure .container {
  grid-template-columns: 45% 55%;
}

.featured-on {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow-x: scroll;
}

.featured-on::-webkit-scrollbar {
  display: none;
}

.featured-on p {
  color: #3c3b42;
}

.featured-on .brands {
  margin-top: 1.2rem;
  display: grid;
  grid-gap: 2rem;
  place-items: center;
  grid-template-columns: repeat(5, minmax(150px, auto));
  overflow-x: scroll;
}

.featured-on .brands::-webkit-scrollbar {
  display: none;
}

.features h2 {
  text-align: center;
}

.features .features-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(5rem, 1fr));
  grid-gap: 2rem;
}

.features .btn {
  align-self: center;
  margin: 2rem auto 2rem;
  display: inline-block;
  margin-left: 50%;
  transform: translateX(-50%);
}

.feature-box {
  background: #1e1c25;
  background-repeat: no-repeat;
  background-position: bottom right;
  padding: 4rem;
  min-height: 400px;
  border-radius: 0.8rem;
  position: relative;
}

.feature-box:nth-child(1) {
  background-image: url("../assets/img/features-1.svg");
}
.feature-box:nth-child(2) {
  background-image: url("../assets/img/features-2.svg");
}
.feature-box:nth-child(3) {
  background-image: url("../assets/img/features-3.svg");
}
.feature-box:nth-child(4) {
  background-image: url("../assets/img/features-4.svg");
}
.feature-box:nth-child(5) {
  background-image: url("../assets/img/features-5.svg");
}
.feature-box:nth-child(6) {
  background-image: url("../assets/img/features-6.svg");
}

.feature-box::before {
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

.feature-box p {
  font-weight: 800;
}

.secure {
  padding-bottom: 18rem;
  background-image: url("../assets/img/wavy-line.png"),
    url("../assets/img/BG\ Blur-1.png"), url("../assets/img/BG\ Blur.png");
  background-repeat: no-repeat;
  background-size: 100%, auto, auto;
  background-position: bottom center, right top, left top;
}

.secure .btn,
.presale-btn {
  background: none;
  box-shadow: none;
  border: 2px solid #5f36ff;
  color: #5f36ff;
}

.presale-btn {
  background: #5f36ff;
  background: linear-gradient(146.87deg, #5f36ff 3.58%, #5f36ff 88.73%);
  color: #fff;
  box-shadow: inset 0px 5px 10px #08ff42;
  border: none;
}

.secure .cloud-img {
  position: relative;
}

.secure .cloud-img .bubble1 {
  position: absolute;
  top: 25%;
  left: 30%;

  animation: move 0.8s linear infinite alternate;
}

.secure .cloud-img .bubble2 {
  position: absolute;
  top: 35%;
  right: 0%;
  animation: move 0.8s linear infinite alternate;
}

.countdown h3 {
  text-align: center;
}

.countdown-wrapper {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
  font-size: calc(4vw + 14px);
  place-items: center;
  background: #1e1c25;
  padding: 4rem 1rem 7rem;
  position: relative;
  border-radius: 0.8rem;
}

.countdown-wrapper::before {
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

.countdown-wrapper .phone,
.countdown-wrapper .lock1 {
  position: absolute;
  width: 26%;
}

.countdown-wrapper .lock1 {
  top: -30%;
  left: 0%;
  transform: translateX(-45%);
  z-index: -1;
  width: 20%;
  /* transform: translate(-200% -100%); */
}
.countdown-wrapper .phone {
  right: 0;
  bottom: -50%;
  transform: translateX(40%);
}

.box {
  background: linear-gradient(146.87deg, #5f36ff 3.58%, #08ff42 88.73%);
  border-radius: 0.8rem;
  padding: 2rem;
  text-align: center;
  font-weight: 700;
  position: relative;
}

.box > span {
  position: absolute;
  bottom: 0;
  margin-bottom: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: calc(0.5vw + 14px);
  text-transform: uppercase;
}

@media (max-width: 992px) {
  .hero {
    background: none;
    margin-top: 3rem;
  }

  .features .features-container {
    grid-template-columns: 1fr 1fr;
  }
}

/* sm */
@media (max-width: 768px) {
  .features .features-container,
  .hero .container,
  .secure .container {
    grid-template-columns: 1fr;
  }

  .featured-on {
    align-items: flex-start;
  }

  .featured-on p {
    color: #3c3b42;
    text-align: center;
    margin: 0 auto;
  }

  .hero-banner {
    background-image: url("../assets/img/hero-wave-mobile.svg");
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: 98%;
    background-size: 65%;
  }

  .hero,
  .secure {
    background: none;
  }

  .secure {
    padding-bottom: 4rem;
  }

  .hero-text {
    order: 2;
  }

  .hero-image {
    margin: 2rem 0;
  }

  .features h2 {
    display: none;
  }

  .features .btn {
    width: 100%;
    align-self: center;
    margin: 2rem auto 2rem;
    display: inline-block;
    -webkit-transform: none;
    transform: none;
  }

  .feature-box {
    min-height: auto;
    padding: 3rem 4rem;
    background-size: 40%;
  }

  .cloud-img.mobile {
    transform: scale(1.2);
    margin: 4rem 0;
  }

  .cloud-img.mobile img {
    width: 100%;
  }

  

  .countdown-wrapper .phone {
    right: 10%;
    bottom: -50%;
    width: 70%;
    z-index: -1;
  }

  .countdown .container {
    padding: 4rem 0;
  }

  .countdown-wrapper {
    font-size: 1.4rem;
    padding: 1rem 1rem 4rem;
  }

  .box {
    padding: 1.2rem 0.8rem;
  }

  .box > span {
    font-size: 0.85rem;
    margin-bottom: -2rem;
  }
}
/* 
.hero-image{
  position: relative;
} */

/* Property 1=Frame 144 */

.image-frame {
  position: relative;
  width: 40vw;
  height: 40vw;
  /* left: 16px;
top: 16px; */
}

/* Folder 1 */
.folder {
  position: absolute;
  width: 40%;
  left: 0%;
  right: 51.32%;
  top: 6.41%;
  bottom: 46.31%;
  animation: folder 1s linear infinite alternate;
}

@keyframes folder {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(0.7);
    left: 5%;
    top: 10%;
  }
  100% {
    transform: scale(0.9);
    left: 15%;
    top: 15%;
  }
}

/* Monitor 1 */
.monitor {
  position: absolute;
  left: 53.45%;
  width: 45%;
  right: 0%;
  top: 26.6%;
  bottom: 28.21%;
  animation: monitor 1s linear infinite alternate;
}

@keyframes monitor {
  0% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(40deg);
  }
  100% {
    left: 43.45%;
  }
}

/* Envelope 1 */
.envelope {
  position: absolute;
  left: 37.99%;
  right: 26.48%;
  top: 62.25%;
  bottom: 0%;
  animation: envelope 1s linear infinite alternate;
}

@keyframes envelope {
  0% {
    transform: rotate(0deg) scale(0.7);
  }
  40% {
    transform: rotate(40deg) scale(0.9);
    bottom: 9%;
    top: 56.25%;
  }
  100% {
    transform: rotate(30deg) scale(0.95);
    bottom: 15%;
    top: 46.25%;
  }
}

/* PC 1 */
.pc {
  position: absolute;
  left: 32.73%;
  right: 10.86%;
  width: 38%;
  top: 0%;
  bottom: 45.35%;
  animation: pc 1s linear infinite alternate;
}

@keyframes pc {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(0.7);
    top: 5%;
  }
  100% {
    transform: scale(0.9);
    top: 10%;
  }
}

/* Secure Img 1 */
.secure-img {
  position: absolute;
  left: 7.07%;
  right: 13.16%;
  top: 12.34%;
  bottom: 9.94%;
  width: 80%;
  animation: secure 1s linear infinite alternate;
}

@keyframes secure {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(0.95) rotate(-10deg);
  }
  100% {
    transform: scale(0.93) rotate(-10deg);
  }
}

/* Lock 1 */
.lock {
  position: absolute;
  left: -5.99%;
  right: 57.73%;
  top: 31.73%;
  bottom: 28.21%;
  animation: lock 1s linear infinite alternate;
}

@keyframes lock {
  0% {
    transform: scale(0.7);
  }
  40% {
    transform: scale(0.9);
    left: 2%;
  }
  100% {
    transform: scale(0.9);
    left: 8%;
  }
}

/* Phone 2 */
.phone-2 {
  position: absolute;
  left: 2.96%;
  right: 48.36%;
  top: 52.72%;
  bottom: 0%;
  width: 38%;
  animation: phone 1s linear infinite alternate;
}

@keyframes phone {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(0.9);
    top: 45%;
    left: 10%;
  }
  100% {
    transform: scale(0.9);
    top: 40%;
    left: 15%;
  }
}

/* Bubble 2 */
.bubble-2 {
  position: absolute;
  left: 30.43%;
  right: 51.15%;
  top: 22.28%;
  bottom: 60.26%;
}

/* Bubble 5 */
.bubble-5 {
  position: absolute;
  left: 59.38%;
  right: 30.92%;
  top: 56.73%;
  bottom: 33.81%;
}

/* Bubble 6 */
.bubble-6 {
  position: absolute;
  left: 9.7%;
  right: 83.39%;
  top: 62.98%;
  bottom: 30.61%;
}

@keyframes move {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-2rem);
  }
}
</style>
