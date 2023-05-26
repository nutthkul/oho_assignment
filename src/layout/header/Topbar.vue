<template>
  <!--begin::Toolbar wrapper-->
  <div class="d-flex align-items-stretch flex-shrink-0">
    <!--begin::Search-->
    <div class="d-flex align-items-stretch ms-1 ms-lg-3">
      <KTSearch></KTSearch>
    </div>
    <!--end::Search-->

    <!--begin::Activities-->
    <!-- <div class="d-flex align-items-center ms-1 ms-lg-3">
      <div
        class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
        id="kt_activities_toggle"
      >
        <span class="svg-icon svg-icon-1">
          <inline-svg src="media/icons/duotune/general/gen032.svg" />
        </span>
      </div>
    </div> -->
    <!--end::Activities-->

    <!--begin::Notifications-->
    <!-- <div class="d-flex align-items-center ms-1 ms-lg-3">
      <MenuComponent menu-selector="#kt-notification-menu">
        <template v-slot:toggle>
          <div
            class="btn btn-icon btn-active-light-primary position-relative w-30px h-30px w-md-40px h-md-40px"
            data-kt-menu-target="#kt-notification-menu"
            data-kt-menu-trigger="click"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="bottom"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/general/gen022.svg" />
            </span>
          </div>
        </template>
        <template v-slot:content>
          <KTNotificationMenu></KTNotificationMenu>
        </template>
      </MenuComponent>
    </div> -->
    <!--end::Notifications-->

    <!--begin::Chat-->
    <!-- <div class="d-flex align-items-center ms-1 ms-lg-3">
      <div
        class="btn btn-icon btn-active-light-primary position-relative w-30px h-30px w-md-40px h-md-40px"
        id="kt_drawer_chat_toggle"
      >
        <span class="svg-icon svg-icon-1">
          <inline-svg src="media/icons/duotune/communication/com012.svg" />
        </span>

        <span
          class="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"
        >
        </span>
      </div>
    </div> -->
    <!--end::Chat-->

    <!--begin::Quick links-->
    <div class="d-flex align-items-center ms-1 ms-lg-3">
      <MenuComponent menu-selector="#kt-quick-links-menu">
        <template v-slot:toggle>
          <div
            class="btn btn-icon btn-active-light-primary"
            data-kt-menu-target="#kt-quick-links-menu"
            data-kt-menu-trigger="click"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="bottom"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/general/gen025.svg" />
            </span>
          </div>
        </template>
        <template v-slot:content>
          <KTMyApps></KTMyApps>
        </template>
      </MenuComponent>
    </div>
    <!--end::Quick links-->

    <!--begin::User-->
    <div
      class="d-flex align-items-center ms-1 ms-lg-3"
      id="kt_header_user_menu_toggle"
    >
      <MenuComponent menu-selector="#kt-user-menu">
        <template v-slot:toggle>
          <div
            class="cursor-pointer symbol symbol-circle symbol-30px symbol-md-40px"
            data-kt-menu-target="#kt-user-menu"
            data-kt-menu-trigger="click"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="bottom"
          >
            <img
              alt="Pic"
              :src="imgShow ? imgShow : ' media/avatars/blank.png'"
            />
          </div>
        </template>
        <template v-slot:content>
          <KTUserMenu></KTUserMenu>
        </template>
      </MenuComponent>
    </div>
    <!--end::User -->
  </div>
  <!--end::Toolbar wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTSearch from "@/layout/header/partials/Search.vue";
import MenuComponent from "@/components/menu/MenuComponent.vue";
import KTUserMenu from "@/layout/header/partials/UserMenu.vue";
import KTMyApps from "@/layout/header/partials/MyApps.vue";
import KTNotificationMenu from "@/layout/header/partials/NotificationMenu.vue";

import { Decode, Encode } from "@/services";
import apiConfig from "@/config/api";
import userApi from "@/api/user/";

export default defineComponent({
  name: "topbar",
  components: {
    KTUserMenu,
    KTMyApps,
    KTNotificationMenu,
    KTSearch,
    MenuComponent,
  },

  data: () => ({
    user: "",
    userName: "",
    userId: "",
    classRole: "badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2",
    cssSignOut: "color: #F1416C;",

    imgShow: "",
  }),

  created() {
    this.getUser();
  },

  methods: {
    async getUser() {
      this.userId = Decode.decode(localStorage.getItem("boss"));
      let responseData = [];

      try {
        responseData = await userApi.user.getOne(this.userId);

        this.imgShow = responseData["data"].file
          ? `${apiConfig.ENDPOINT}${responseData["data"].file.path}`
          : "media/avatars/blank.png";
      } catch (error) {
        console.log(error);
      }

      if (responseData["response_status"] === "SUCCESS") {
        this.user = responseData["data"];
        this.userName = responseData["data"]["firstName"];
      }
    },
  },
});
</script>
