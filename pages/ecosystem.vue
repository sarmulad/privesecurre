<template>
  <main id="ecosystem">
    <section class="mission">
      <div class="container mx-auto md:my-32 my-10">
        <h2 class="text-gradient-2 md:text-4xl text-xl mb-6">
          Privesecure Ecosystem
        </h2>
        <p class="md:max-w-md">
          Privesecure's mission is to provide cryptocurrency users with a
          long-term, robust, and ever-evolving open-source cloud storage
          infrastructure. The Privesecure ecosystem is made up of interconnected
          components that provide users with a complete experience. These are
          some of them:
        </p>
      </div>
    </section>

    <section class="my-16 content-block block-1">
      <div class="container mx-auto">
        <div class="img-container">
          <img src="../assets/img/UserFame.svg" alt="" />
        </div>
        <div class="text-container">
          <h2 class="text-gradient-2 my-10 md:my-0 md:mb-6 md:text-3xl text-xl">
            User Control - You have complete control over your files.
          </h2>
          <p>
            By default, files uploaded to Privesecure are private. You may only
            share or make them public if you wish to share or make them public.
          </p>
          <ul>
            <li>
              Granting Access: Share a collaboration folder with other
              Privesecure users - Any Privesecure user can share a folder with
              other Privesecure users.
            </li>
            <li>
              Users can upload and download files, leave comments, and start
              discussions depending on the rights you provide them. At any
              moment, the folder owner can disable access to one or all the
              users.
            </li>
            <li>
              Distribute a public link: Link to the file download or embed the
              link directly in your website, blog, or another third-party
              program. Privesecure generates a unique URL and ID from a randomly
              generated combination of letters and numbers in both
              circumstances.
            </li>
            <li>
              Construct a widget: Create a widget to share a file or folder on a
              public site. After you've completed the form, you'll receive HTML
              code that you may use to embed on any site you own. Your files
              will be shown in the widget, and visitors will be able to download
              them as needed.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="my-16 content-block block-2">
      <div class="container mx-auto">
        <div class="text-container">
          <h2 class="text-gradient-2 my-10 md:my-0 md:mb-6 md:text-3xl text-xl">
            Restrictions on access
          </h2>
          <ul>
            <li>
              Grant specific rights: When sharing content, you may give
              different levels of access to different people. There are three
              levels: Preview only (only viewable on your web browser;
              downloading is not permitted), Upload only, Download only, Full
              Access (which includes the right to delete files), Upload and
              Download, or Download Only.
            </li>
            <li>
              Protect a link to a file or folder with a password: You can opt to
              password-protect a public link to a file or folder when you create
              it.
            </li>
            <li>
              Set a date for a public link to expire – Set a date for a public
              link to expire. The link will become invalid on this date, and the
              user will no longer be able to access the file or folder.
            </li>

            <li>
              Set an expiration date for a file that will be automatically
              removed and hence no longer available.
            </li>
            <li>
              Unshare a file — You can opt to unshare a file at any time, even
              if no expiration date has been selected. When a file is unshared,
              all public links to it are deactivated, and it is removed from any
              widgets.
            </li>
          </ul>
        </div>

        <div class="img-container">
          <img src="../assets/img/UserFame2.svg" alt="" />
        </div>
      </div>
    </section>

    <section class="my-16 content-block">
      <div class="container mx-auto">
        <div class="img-container">
          <img src="../assets/img/UserFame3.svg" alt="" />
        </div>

        <div class="text-container">
          <h2 class="text-gradient-2 mt-10 md:my-0 md:mb-6 md:text-3xl text-xl">
            User Privilege Management – Platform Security
          </h2>
          <ul>
            <li>
              Validated data access - Privesecure validates data access using
              proven password and privilege mechanisms depending on a user's
              privileges. Unauthorized access will result in failure.
            </li>
            <li>
              With every request to the platform, Privesecure uses robust user
              authentication. In essence, any activity in Privesecure is only
              permitted once the system verifies that the user has the necessary
              permissions.
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import EnterPresale from "../components/EnterPresale.vue";
export default {
  components: { EnterPresale },
  head() {
    return {
      title: "Ecosystem | PriveSecure",
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

@media (max-width: 768px) {
  .content-block .container {
    grid-template-columns: auto;
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
</style>
