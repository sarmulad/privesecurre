<template>
  <header>
    <div class="topbar py-1">
      <div class="container md:flex items-center justify-center mx-auto">
        <p class="font-bold md:pr-10">Hurry before Presale ends in</p>
        <div class="time flex items-center">
          <p class="days flex items-center md:pl-4">
            <span class="font-bold md:mr-3 lg:text-2xl md:text-base">{{
              days | twoDigits
            }}</span>
            <span class="grey unit">days</span>
          </p>

          <p class="hours flex items-center">
            <span class="font-bold md:mr-3 lg:text-2xl md:text-base">
              <span class="ml-2">:</span> {{ hours | twoDigits }}
            </span>
            <span class="grey unit">hours</span>
          </p>
          <p class="mins flex items-center">
            <span class="font-bold md:mr-3 lg:text-2xl md:text-base">
              <span class="ml-2">:</span> {{ minutes | twoDigits }}
            </span>
            <span class="grey unit">minutes</span>
          </p>
          <p class="secs flex items-center">
            <span class="font-bold md:mr-3 lg:text-2xl md:text-base">
              <span class="ml-2">:</span> {{ seconds | twoDigits }}</span
            >
            <span class="grey unit">seconds</span>
          </p>
        </div>
      </div>
    </div>
    <nav class="navigation px-10 lg:px-16">
      <div class="mobile-nav justify-between flex md:hidden my-4">
        <Nuxt-link class="logo" to="/"
          ><img src="../assets/img/logo-mobile.svg" alt="logo"
        /></Nuxt-link>
        <button @click="toggleNav" class="togglebtn">
          <img src="../assets/img/fi_menu.svg" alt="menu" />
        </button>
      </div>

      <transition name="nav-links-mobile">
        <div
          class="nav-links mx-auto items-center justify-between space-x-6 md:flex py-6"
          v-show="showNav"
        >
          <ul>
            <li ><Nuxt-link to="/about"> About</Nuxt-link></li>
            <li><Nuxt-link to="/tokenomics"> Tokenomics</Nuxt-link></li>
            <li><Nuxt-link to="/roadmap"> Roadmap</Nuxt-link></li>
            <li><Nuxt-link to="/buy"> How To Buy</Nuxt-link></li>

          </ul>
          <Nuxt-link class="logo" to="/"
            ><img src="../assets/img/Logo.svg" alt="logo"
          /></Nuxt-link>
          <ul>
            <li><Nuxt-link to="/ecosystem"> Our Ecosystem</Nuxt-link></li>
            <li>
              <a href="/privesecure.pdf"> WhitePaper</a>
            </li>
            <li><Nuxt-link to="/faq"> FAQ</Nuxt-link></li>
          </ul>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      finish: false,
      endDate: new Date("2022-09-07T12:00:00"),
      mobile: null,
      windowWidth: null,
      showNav: true,
    };
  },
  created() {
    if (process.browser) {
      window.addEventListener("resize", this.checkScreen);
      this.checkScreen();
    }
  },
  mounted() {
    const _self = this;
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 768) {
        this.mobile = true;
        this.showNav = false;
        return;
      }
      this.mobile = false;
      this.showNav = true;

      return;
    },
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

<style scoped>
.topbar {
  background: #00ff78;
  color: #070020;
}

.grey {
  color: #3c3b42;
}

.time {
  text-transform: uppercase;
}

.logo {
  display: flex;
  justify-content: center;
}

.logo img {
  width: 70%;
}

.navigation ul {
  list-style-type: none;
  padding-left: 0;
}

.navigation li {
  display: inline;
  margin-right: 1.7rem;
  position: relative;
}

.navigation ul:first-child li:first-child {
  margin-right: none;
}

.navigation a {
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  transition: 0.4s ease-in;
}

/* .navigation li:before {
  content: "";
  position: absolute;
  transition: transform 0.4s ease;
  left: 0;
  top: -0.8rem;
  width: 100%;
  height: 1px;
  background: #00ff78;
  transform: scaleX(0);
} */
/* .navigation li:hover:before {
  transform: scaleX(1);
} */

.navigation a:hover {
  color: #00ff78;
}

.togglebtn {
  z-index: 9999;
}

.togglebtn:focus {
  border: none;
  outline: none;
}

@media (max-width: 992px) {
  .navigation li {
    margin-right: 0.5rem;
  }

  .nav-links a {
    font-size: 0.8rem;
  }

  .topbar p span:last-of-type {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .topbar p .unit {
    font-size: 0.85rem;
  }

  .topbar p span:last-of-type {
    font-size: 0.7rem;
    margin-left: 0.4rem;
  }

  .close {
    color: #fff;
    font-weight: 700;
    margin-top: 1rem;
  }

  .nav-links {
    position: fixed;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    padding: 8rem 0 0 3rem;
    background: #000000cc;
    backdrop-filter: blur(1px);
    z-index: 99;
    display: block;
    text-align: left;
  }

  .nav-links-mobile-enter-active,
  .nav-links-mobile-leave-active {
    transition: 0.5s ease-in;
  }

  .nav-links-mobile-enter,
  .nav-links-mobile-leave-to {
    transform: translateX(-100%);
  }
  .nav-links-mobile-enter-to .nav-links-mobile-leave {
    transform: translateX(0);
  }

  .nav-links a {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .nav-links .logo {
    display: none;
  }

  .logo {
    justify-content: left;
  }

  .logo img {
    width: 90%;
  }

  .container {
    width: 90%;
  }
}
</style>
