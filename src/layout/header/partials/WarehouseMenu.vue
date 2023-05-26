<template>
  <!--begin::Menu-->
  <div
    class="menu menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold py-4 fs-6 w-275px"
    id="kt-wh-menu"
    data-kt-menu="true"
  >
    <!--begin::Menu item-->
    <div v-for="(item, index) in menuItem" :key="index">
      <div class="menu-item px-2">
        <router-link :to="item.path" class="menu-link px-5">
          {{ item.title }}
        </router-link>
      </div>

      <div
        v-if="index !== menuItem.length - 1"
        class="separator my-2 mx-2"
      ></div>
    </div>

    <!--end::Menu item-->

    <!-- <div class="separator my-2"></div>  -->
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Actions } from "@/store/enums/StoreEnums";
import { Decode, Encode } from "@/services";
import userApi from "@/api/user/";

export default defineComponent({
  name: "kt-wh-menu",
  components: {},
  setup() {
    const router = useRouter();
    const i18n = useI18n();
    const store = useStore();

    i18n.locale.value = localStorage.getItem("lang")
      ? (localStorage.getItem("lang") as string)
      : "en";

    const countries = {
      en: {
        flag: "media/flags/united-states.svg",
        name: "English",
      },
      es: {
        flag: "media/flags/spain.svg",
        name: "Spanish",
      },
      de: {
        flag: "media/flags/germany.svg",
        name: "German",
      },
      ja: {
        flag: "media/flags/japan.svg",
        name: "Japanese",
      },
      fr: {
        flag: "media/flags/france.svg",
        name: "French",
      },
    };

    const signOut = async () => {
      // store
      //   .dispatch(Actions.LOGOUT)
      //   .then(() => router.push({ name: "authentication-base-sign-in" }));
      await localStorage.clear();
      router.push("/public");
    };

    const setLang = (lang) => {
      localStorage.setItem("lang", lang);
      i18n.locale.value = lang;
    };

    const currentLanguage = (lang) => {
      return i18n.locale.value === lang;
    };

    const currentLangugeLocale = computed(() => {
      return countries[i18n.locale.value];
    });

    return {
      signOut,
      setLang,
      currentLanguage,
      currentLangugeLocale,
      countries,
    };
  },
  data: () => ({
    menuItem: [
      { id: 1, title: "คลังสินค้า", path: "/warehouse/WH1" },
      { id: 2, title: "เพิ่มกลุ่มสินค้าหลัก", path: "/warehouse/WH2" },
      { id: 3, title: "เพิ่มกลุ่มสินค้ารอง", path: "/warehouse/WH3" },
      { id: 4, title: "Product Library", path: "/warehouse/WH4" },
      { id: 5, title: "จัดการสินค้าหมดอายุ", path: "/warehouse/WH5" },
      { id: 6, title: "ตัดสินค้าหมดอายุ", path: "/warehouse/WH6-1" },
      { id: 7, title: "อนุมัติตัดสินค้าหมดอายุ", path: "/warehouse/WH6-2" },
      { id: 8, title: "เพิ่มจำนวนสินค้าเข้าระบบ", path: "/warehouse/WH6-3" },
      {
        id: 9,
        title: "อนุมัติเพิ่มจำนวนสินค้าเข้าระบบ",
        path: "/warehouse/WH6-4",
      },
    ],
  }),
  created() {},
  methods: {},
});
</script>

<style scoped>
#kt-wh-menu {
  padding-top: 6px !important;
  padding-bottom: 6px !important;
  transform: translate3d(-150.5px, 155px, 0px) !important;
}

@media only screen and (max-width: 600px) {
  #kt-wh-menu {
    padding-top: 6px !important;
    padding-bottom: 6px !important;
    transform: translate3d(-50.5px, 155px, 0px) !important;
  }
}
</style>
