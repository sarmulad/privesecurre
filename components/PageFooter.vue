<template>
  <footer class="footer py-10 px-10 md:px-16 text-base md:text-sm">
    <div class="footer-content pb-16 py-8 md:py-16">
      <div class="logo md:mb-0 mb-8">
        <img src="../assets/img/Logo.svg" alt="logo" />
      </div>
      <!--  <div class="locale">
        <h4>Language</h4>
         <LocaleSwitcher />
        <div class="locale-switcher md:mr-10">
          <img src="../assets/img/flags/us.svg" alt="" />
          <select>
            <option value="ENG">ENG</option>
            <option value="FRA">FRA</option>
          </select>
        </div>
      </div> -->
      <div class="links">
        <h4>Links</h4>
        <nav>
          <ul class="md:mr-10">
            <li><Nuxt-link to="/about">About</Nuxt-link></li>
            <li><Nuxt-link to="/tokenomics">Tokenomics</Nuxt-link></li>
            <li><Nuxt-link to="/roadmap">Roadmap</Nuxt-link></li>
          </ul>
          <ul class="md:mr-6">
            <li><a href="/privesecure.pdf" download="">WhitePaper</a></li>
            <li><Nuxt-link to="/faq">FAQ</Nuxt-link></li>
            <li>
              <a href="https://presale.privesecure.io/register" target="_blank"
                >EnterPresale</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <!-- <div class="subscribe">
        <p>Subscribe to Our Email</p>
        <form>
          <div class="input-container">
            <input
              placeholder="Enter Valid Email Adress"
              class="text-base"
              type="email"
              required
            />
            <button class="btn text-base">Subscribe</button>
          </div>
        </form>
      </div> -->
    </div>
    <hr />
    <div class="footer-bottom">
      <p>Copyright © 2022 Privesecure protocol. All rights reserved</p>
      <div class="socials">
        <div class="social-text pr-4">Connect With Us</div>
        <div class="social-icons">
          <a href="https://t.me/PriveSecureOfficial" target="_blank">
            <img src="../assets/img/u_telegram.svg" alt="telegram" />
          </a>
          <!-- <a href="#" class="pl-3">
            <img src="../assets/img/u_facebook.svg" alt="facebook" />
          </a> -->
          <a
            href="https://twitter.com/PriveSecure"
            target="_blank"
            class="pl-3"
          >
            <img src="../assets/img/u_twitter.svg" alt="twitter" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "PageFooter",
};
</script>

<style>
.footer {
  background: #1e1c25;
  z-index: 2;
}

.footer .logo {
  width: 70%;
}

.footer h4 {
  text-transform: uppercase;
  margin-bottom: 0.8rem;
  color: #08ff42;
  font-size: 0.875em;
  font-weight: 400;
}

.footer-content {
  display: grid;
  grid-template-columns: 25% auto 35%;
  grid-gap: 3rem;
}

.footer-content ul {
  padding-left: 0;
  list-style: none;
  margin-left: 0;
}

.footer li {
  margin-bottom: 0.8rem;
}

.footer-content a {
  text-decoration: none;
  color: #fff;
}

.links nav {
  display: flex;
  justify-content: space-between;
}

.subscribe p,
.social-text {
  color: #08ff42;
  font-size: 0.875em;
  margin-bottom: 0.8rem;
}

.input-container {
  position: relative;
  background: #0f0d16;
  border-radius: 0.4rem;
}

.input-container button {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
}

.input-container input {
  padding: 1.2rem 1rem;
  background: #0f0d16;
  color: #fff;
  border-radius: inherit;
}

.input-container input:focus {
  outline: none;
}

.footer-bottom {
  border-top: 2px solid #c4c4c4;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
}

.locale-switcher {
  display: flex;
}

.locale-switcher select {
  background: none;
  color: inherit;
  border: none;
}

.locale-switcher select:focus,
.locale-switcher select:active {
  outline: none;
  border: none;
}

.locale-switcher img {
  width: 1.5rem;
  margin-right: 0.5rem;
}

.footer .socials {
  display: flex;
  align-items: center;
}

@media (max-width: 1200px) {
  .footer-content {
    grid-template-columns: auto auto auto;
    grid-gap: 3rem;
  }

  .footer .subscribe {
    grid-column: span 3;
    width: 80%;
  }

  .footer .socials {
    display: block;
    padding-bottom: 1rem;
  }
}
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: auto;
    grid-gap: 3rem;
  }

  .input-container {
    background: none;
  }

  .input-container input {
    margin-bottom: 0.8rem;
    width: 100%;
  }

  .input-container button {
    position: static;
  }

  .footer-bottom {
    padding: 2.5rem 0 6rem;
    flex-direction: column-reverse;
  }

  .footer .socials {
    display: block;
    padding-bottom: 1rem;
  }

  .footer .subscribe {
    grid-column: span 1;
    width: 80%;
  }
}
</style>
