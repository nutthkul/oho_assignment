<template>
  <!--begin::Menu-->
  <div
    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold py-4 fs-6 w-275px"
    id="kt-user-menu"
    data-kt-menu="true"
  >
    <!--begin::Menu item-->
    <div class="menu-item px-3">
      <div class="menu-content d-flex align-items-center">
        <!--begin::Avatar-->
        <div class="row">
          <div class="col-4 d-flex justify-content-center p-0">
            <div class="symbol symbol-50px symbol-circle">
              <img
                alt="Logo"
                :src="imgShow ? imgShow : ' media/avatars/blank.png'"
              />
            </div>
          </div>
          <!--end::Avatar-->

          <!--begin::Username-->
          <div class="col-8 p-0">
            <div class="row">
              <div class="col-12">
                <div class="fw-bolder fs-5">
                  <div
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    :title="userName"
                    style="cursor: default"
                  >
                    {{
                      userName.length > 17
                        ? userName.substring(0, 17) + "..."
                        : userName
                    }}
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  :title="
                    user['role'] === 'SYSTEM ADMIN'
                      ? 'SYSTEM ADMIN'
                      : user['role'] === 'BUSINESS OWNER'
                      ? 'BUSINESS OWNER'
                      : user['role'] === 'BUSINESS DIRECTOR'
                      ? 'BUSINESS DIRECTOR'
                      : user['role'] === 'MANAGER'
                      ? 'MANAGER'
                      : user['role'] === 'STAFF'
                      ? 'STAFF'
                      : ''
                  "
                  style="cursor: default"
                  :class="classRole"
                >
                  {{
                    user["role"] === "SYSTEM ADMIN"
                      ? "SYSTEM ADMIN"
                      : user["role"] === "BUSINESS OWNER"
                      ? "BUSINESS OWNER"
                      : user["role"] === "BUSINESS DIRECTOR"
                      ? "BUSINESS DIRECTOR"
                      : user["role"] === "MANAGER"
                      ? "MANAGER"
                      : user["role"] === "STAFF"
                      ? "STAFF"
                      : ""
                  }}
                </div>
              </div>
              <!-- <a href="#" class="fw-bold text-muted text-hover-primary fs-7"
              >aria@kt.com</a
            > -->
            </div>
          </div>
          <!--end::Username-->
        </div>
      </div>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator my-2"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <router-link to="/setting/user-profile" class="menu-link px-5">
        Profile
      </router-link>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <router-link to="/dashboard" class="menu-link px-5">
        <span class="menu-text">Dashboard</span>

        <span class="menu-badge">
          <span class="badge badge-light-danger badge-circle fw-bolder fs-7"
            >3</span
          >
        </span>
      </router-link>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <!-- <div
      class="menu-item px-5"
      data-kt-menu-trigger="hover"
      data-kt-menu-placement="left-start"
      data-kt-menu-flip="bottom"
    >
      <a href="#" class="menu-link px-5">
        <span class="menu-title">Subscription</span>

        <span class="menu-arrow"></span>
      </a>

      <div class="menu-sub menu-sub-dropdown w-175px py-4">
        <div class="menu-item px-3">
          <a href="#" class="menu-link px-5"> Plans </a>
        </div>

        <div class="menu-item px-3">
          <a href="#" class="menu-link px-5"> Billing </a>
        </div>

        <div class="menu-item px-3">
          <a href="#" class="menu-link px-5"> Payments </a>
        </div>

        <div class="menu-item px-3">
          <a href="#" class="menu-link d-flex flex-stack px-5">
            Statements

            <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              data-bs-toggle="tooltip"
              title="View your statements"
            ></i>
          </a>
        </div>

        <div class="separator my-2"></div>
        <div class="menu-item px-3">
          <div class="menu-content px-3">
            <label
              class="form-check form-switch form-check-custom form-check-solid"
            >
              <input
                class="form-check-input w-30px h-20px"
                type="checkbox"
                value="1"
                checked="checked"
                name="notifications"
              />

              <span class="form-check-label text-muted fs-7">
                Notifications
              </span>
            </label>
          </div>
        </div>
      </div>
    </div> -->
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <!-- <div class="menu-item px-5">
      <a href="#" class="menu-link px-5"> Reports </a>
    </div> -->
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator my-2"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div
      class="menu-item px-5"
      data-kt-menu-trigger="hover"
      data-kt-menu-placement="left-start"
      data-kt-menu-flip="bottom"
    >
      <a href="#" class="menu-link px-5">
        <span class="menu-title position-relative">
          Language

          <span
            class="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0"
          >
            Thai
            <img
              class="w-15px h-15px rounded-1 ms-2"
              src="media/flags/thailand.svg"
              alt="metronic"
            />
          </span>
        </span>
      </a>

      <!--begin::Menu sub-->
      <div class="menu-sub menu-sub-dropdown w-175px py-4">
        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a
            @click="setLang('en')"
            :class="{ active: currentLanguage('en') }"
            class="menu-link d-flex px-5"
          >
            <span class="symbol symbol-20px me-4">
              <img
                class="rounded-1"
                src="media/flags/united-states.svg"
                alt="metronic"
              />
            </span>
            English
          </a>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a
            @click="setLang('es')"
            :class="{ active: currentLanguage('es') }"
            class="menu-link d-flex px-5"
          >
            <span class="symbol symbol-20px me-4">
              <img
                class="rounded-1"
                src="media/flags/spain.svg"
                alt="metronic"
              />
            </span>
            Spanish
          </a>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a
            @click="setLang('de')"
            :class="{ active: currentLanguage('de') }"
            class="menu-link d-flex px-5"
          >
            <span class="symbol symbol-20px me-4">
              <img
                class="rounded-1"
                src="media/flags/germany.svg"
                alt="metronic"
              />
            </span>
            German
          </a>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a
            @click="setLang('ja')"
            :class="{ active: currentLanguage('ja') }"
            class="menu-link d-flex px-5"
          >
            <span class="symbol symbol-20px me-4">
              <img
                class="rounded-1"
                src="media/flags/japan.svg"
                alt="metronic"
              />
            </span>
            Japanese
          </a>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a
            @click="setLang('fr')"
            :class="{ active: currentLanguage('fr') }"
            class="menu-link d-flex px-5"
          >
            <span class="symbol symbol-20px me-4">
              <img
                class="rounded-1"
                src="media/flags/france.svg"
                alt="metronic"
              />
            </span>
            French
          </a>
        </div>
        <!--end::Menu item-->
      </div>
      <!--end::Menu sub-->
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <!-- <div class="menu-item px-5 my-1">
      <router-link to="" class="menu-link px-5"> Account Settings </router-link>
    </div> -->
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div
      class="menu-item px-5"
      @mouseenter="enterSignOut()"
      @mouseleave="leaveSignOut()"
    >
      <a class="menu-link px-5" :style="cssSignOut" @click="signOut()">
        Sign Out
      </a>
    </div>
    <!--end::Menu item-->
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
import apiConfig from "@/config/api";

export default defineComponent({
  name: "kt-user-menu",
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
    user: "",
    userName: "",
    userId: "",
    classRole: "badge badge-light-success fw-bolder fs-8 px-2 py-1",
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
        this.userName =
          responseData["data"]["firstName"] +
          " " +
          responseData["data"]["lastName"];
        this.setClassRole();
      }
    },
    setClassRole() {
      this.user["role"] === "SYSTEM ADMIN"
        ? (this.classRole =
            "badge badge-light-primary fw-bolder fs-8 px-2 py-1")
        : this.user["role"] === "BUSINESS OWNER"
        ? (this.classRole =
            "badge badge-light-success fw-bolder fs-8 px-2 py-1")
        : this.user["role"] === "BUSINESS DIRECTOR"
        ? (this.classRole =
            "badge badge-light-warning fw-bolder fs-8 px-2 py-1")
        : this.user["role"] === "MANAGER"
        ? (this.classRole = "badge badge-light-danger fw-bolder fs-8 px-2 py-1")
        : this.user["role"] === "STAFF"
        ? (this.classRole = "badge badge-light-info fw-bolder fs-8 px-2 py-1")
        : (this.classRole =
            "badge badge-light-success fw-bolder fs-8 px-2 py-1");
    },

    enterSignOut() {
      this.cssSignOut = "color: #D9214E; background-color: #FFF5F8";
    },

    leaveSignOut() {
      this.cssSignOut = "color: #F1416C;";
    },
  },
});
</script>

<style scoped></style>
