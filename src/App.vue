<template>
  <a-config-provider :getPopupContainer="getPopupContainer">
    <router-view />
  </a-config-provider>
</template>

<!-- <script lang="ts"> -->
<script>
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { Mutations } from "@/store/enums/StoreEnums";

export default defineComponent({
  name: "app",
  setup() {
    const store = useStore();

    onMounted(() => {
      /**
       * this is to override the layout config using saved data from localStorage
       * remove this to use config only from static config (@/core/config/DefaultLayoutConfig.ts)
       */
      store.commit(Mutations.OVERRIDE_LAYOUT_CONFIG);
    });
    document.title = "BELUCA | คลังสินค้า";
  },

  watch: {
    $route(to, from) {
      const getToken = localStorage.getItem("belucaCodex");

      if (!getToken) {
        if (
          to.name === "login" ||
          to.name === "register" ||
          to.name === "sysadmin" ||
          to.name === "public"
        ) {
          // this.$router.push("/public");
        } else {
          // this.$router.push("/public");
        }
      }
    },
  },

  methods: {
    getPopupContainer(el, dialogContext) {
      if (dialogContext) {
        return dialogContext.getDialogWrap();
      } else {
        return document.body;
      }
    },
  },
});
</script>

<style lang="scss">
@import "~bootstrap-icons/font/bootstrap-icons.css";
@import "~@vueform/multiselect/themes/default.css";
@import "~prism-themes/themes/prism-shades-of-purple.css";
@import "~sweetalert2/dist/sweetalert2.css";
@import "~element-plus/lib/theme-chalk/index.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";

// Main demo style scss
@import "assets/sass/plugins";
@import "assets/sass/style";
@import "assets/sass/input";
@import "assets/sass/loaderDashboard";
</style>

