<template>
  <KTLoader v-if="loaderEnabled" :logo="loaderLogo"></KTLoader>

  <!-- begin:: Body -->
  <div v-if="isHideLoading">
    <loaderOverlay />
  </div>

  <div
    class="page d-flex flex-row flex-column-fluid"
    style="background-color: #e9f1f6"
  >
    <!-- begin:: Aside Left -->
    <KTAside
      v-if="asideEnabled"
      @contentLeft="contentLeft"
      @contentRight="contentRight"
      :compact-logo="themeCompactLogo"
      :default-logo="themeDefaultLogo"
    ></KTAside>
    <!-- end:: Aside Left -->

    <div id="kt_wrapper" :class="isClassHeader">
      <KTHeader></KTHeader>

      <!-- begin:: Content -->
      <div
        id="kt_content"
        class="content d-flex flex-column flex-column-fluid fs-6 pt-0"
      >
        <!-- begin:: Content Body -->
        <div
          id="kt_content_container"
          :class="{
            'container-fluid': contentWidthFluid,
            container: !contentWidthFluid,
          }"
        >
          <router-view />
        </div>
        <!-- end:: Content Body -->
      </div>
      <!-- end:: Content -->
      <KTFooter></KTFooter>
    </div>
  </div>
  <!-- end:: Body -->
  <KTScrollTop></KTScrollTop>
  <KTPurchase></KTPurchase>
  <KTDrawerMessenger></KTDrawerMessenger>
  <KTUserMenu></KTUserMenu>
  <KTCreateAccountModal></KTCreateAccountModal>
  <KTNewCardModal></KTNewCardModal>
</template>

<!-- <script lang="ts"> -->
<script>
import { defineComponent, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import KTAside from "@/layout/aside/Aside.vue";
import KTHeader from "@/layout/header/Header.vue";
import KTFooter from "@/layout/footer/Footer.vue";
import HtmlClass from "@/core/services/LayoutService";
import KTScrollTop from "@/layout/extras/ScrollTop.vue";
import KTUserMenu from "@/layout/header/partials/ActivityDrawer.vue";
import KTLoader from "@/components/Loader.vue";
import KTPurchase from "@/layout/extras/Purchase.vue";
import KTDrawerMessenger from "@/layout/extras/DrawerMessenger.vue";
import { Actions } from "@/store/enums/StoreEnums";
import {
  MenuComponent,
  DrawerComponent,
  ScrollComponent,
} from "@/assets/ts/components/index";
import { removeModalBackdrop } from "@/core/helpers/dom";
import KTCreateAccountModal from "@/components/modals/CreateAccountModal.vue";
import KTNewCardModal from "@/components/modals/NewCardModal.vue";
import {
  toolbarDisplay,
  loaderEnabled,
  contentWidthFluid,
  loaderLogo,
  asideEnabled,
  subheaderDisplay,
  themeDefaultLogo,
  themeCompactLogo,
} from "@/core/helpers/config";
import { isDocPage } from "@/core/helpers/documentation";

import loaderOverlay from "../views/components/loaderDashboard/preLoader.vue";

import { mapState } from "vuex";

export default defineComponent({
  name: "Layout",
  components: {
    KTAside,
    KTHeader,
    KTFooter,
    KTScrollTop,
    KTCreateAccountModal,
    KTNewCardModal,
    KTUserMenu,
    KTPurchase,
    KTDrawerMessenger,
    KTLoader,

    loaderOverlay,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    // show page loading
    store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");

    // initialize html element classes
    HtmlClass.init();

    onMounted(() => {
      //check if current user is authenticated
      // if (!store.getters.isUserAuthenticated) {
      //   router.push({ name: "authentication-base-sign-in" });
      // }

      DrawerComponent.updateAll();
      ScrollComponent.updateAll();
      MenuComponent.createInstances('[data-kt-menu="true"]');

      // Simulate the delay page loading
      setTimeout(() => {
        // Remove page loader after some time
        store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
      }, 500);
    });

    watch(
      () => route.path,
      () => {
        MenuComponent.updateDropdowns();

        setTimeout(() => {
          DrawerComponent.bootstrap();
          ScrollComponent.bootstrap();
          MenuComponent.createInstances('[data-kt-menu="true"]');
        }, 10);

        // // check if current user is authenticated
        if (store.getters.isAuthenticated) {
          router.push({ name: "authentication-base-sign-in" });
        }

        removeModalBackdrop();
      }
    );

    const loading = false;

    return {
      toolbarDisplay,
      loaderEnabled,
      contentWidthFluid,
      loaderLogo,
      asideEnabled,
      subheaderDisplay,
      isDocPage,
      themeDefaultLogo,
      themeCompactLogo,
      loading,
    };
  },

  data: () => ({
    isClassHeader: "wrapper d-flex flex-column flex-row-fluid",

    isHideLoading: false,
  }),

  computed: {
    ...mapState({
      stateLoading: (state) => state.MockItems.isLoading,
    }),
  },

  watch: {
    stateLoading(val) {
      if (!val) {
        setTimeout(() => {
          this.isHideLoading = val;
        }, 800);
      } else {
        this.isHideLoading = val;
      }
    },
  },

  methods: {
    contentLeft() {
      this.isClassHeader = "d-flex flex-column flex-row-fluid";
    },
    contentRight() {
      this.isClassHeader = "wrapper d-flex flex-column flex-row-fluid";
    },
  },
});
</script>
