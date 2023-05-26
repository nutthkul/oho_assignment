<template>
  <!--begin::Aside-->
  <div
    id="kt_aside"
    class="shadow d-sm-block"
    v-if="isToggle"
    style="background-color: white"
  >
    <div
      class="btn btn-icon btn-circle btn-active-light-primary mt-7 ms-5"
      @click="handleToggleShow"
    >
      <span class="svg-icon svg-icon-2x">
        <inline-svg src="media/Toggle-Left.svg" />
      </span>
    </div>
    <div
      class="aside-menu flex-column-fluid ms-1 px-1"
      @mouseenter="handleMouseEnter()"
    >
      <KTMenuLogo></KTMenuLogo>
    </div>
  </div>

  <div
    id="kt_aside"
    class="aside bg-white shadow"
    data-kt-drawer="true"
    data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_aside_toggle"
    :hidden="isToggle"
    @mouseleave="handleMouseLeave()"
  >
    <!--begin::Brand-->
    <div class="row aside-logo flex-column-auto pt-9 px-9" id="kt_aside_logo">
      <img
        @click="reloadPage"
        alt="Logo"
        src="../../../public/media/logos/belucalogo.svg"
        class="max-h-50px logo-default col-9"
        style="cursor: pointer"
      />
      <img
        @click="reloadPage"
        alt="Logo"
        src="../../../public/media/logos/belucalogo.svg"
        class="max-h-50px logo-minimize col-9"
      />
      <div
        @click="handleToggleHide"
        class="btn btn-icon btn-circle btn-active-light-primary ms-n2 me-1"
      >
        <span class="svg-icon svg-icon-2x">
          <inline-svg src="media/Toggle-Right.svg" />
        </span>
      </div>
    </div>

    <!-- <div class="aside-logo flex-column-auto pt-9 pb-7 px-9" id="kt_aside_logo">
      <a href="#">
        11
        <img
          alt="Logo"
          src="media/logos/logo-default.svg"
          class="max-h-50px logo-default"
        />
        22
        <img
          alt="Logo"
          src="media/logos/logo-compact.svg"
          class="max-h-50px logo-minimize"
        />
      </a>

      <div
        @click="handleToggleHide"
        class="btn btn-icon btn-circle btn-active-light-primary ms-n2 me-1"
      >
        <span class="svg-icon svg-icon-2x">
          <inline-svg src="media/Toggle-Right.svg" />
        </span>
      </div>
    </div> -->

    <!--begin::Aside menu-->
    <div class="aside-menu flex-column-fluid px-3 px-lg-6">
      <KTMenu></KTMenu>
    </div>
    <!--end::Aside menu-->

    <!--begin::Footer-->
    <!-- <div class="aside-footer flex-column-auto px-6 pb-5" id="kt_aside_footer">
      <a
        href="https://keenthemes.com/products/rider-vue-pro"
        class="btn btn-light-primary w-100"
      >
        Purchase {{ themeName }} HTML Pro
      </a>
    </div> -->
    <!--end::Footer-->
  </div>
  <!--end::Aside-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { DrawerComponent } from "@/assets/ts/components";
import KTMenu from "@/layout/aside/Menu.vue";
import KTMenuLogo from "@/layout/aside/MenuLogo.vue";
import { isDocPage, themeName } from "@/core/helpers/documentation";
import { asideTheme } from "@/core/helpers/config";

export default defineComponent({
  name: "KTAside",
  components: {
    KTMenu,
    KTMenuLogo,
  },
  props: {
    defaultLogo: String,
    compactLogo: String,
  },
  setup() {
    const { t } = useI18n();

    onMounted(() => {
      DrawerComponent.reinitialization();
    });

    return {
      isDocPage,
      asideTheme,
      t,
      themeName,
    };
  },
  data: () => ({
    isToggle: false,
    stateDrawer: false,
  }),
  methods: {
    reloadPage() {
      this.$router.push("/dashboard");
    },
    handleToggleHide() {
      this.isToggle = true;
      if (this.stateDrawer) {
        this.stateDrawer = false;
      }
      if (!this.stateDrawer) {
        this.stateDrawer = true;
      }
      this.$emit("contentLeft");
    },
    handleToggleShow() {
      this.isToggle = false;
      this.stateDrawer = false;
      this.$emit("contentRight");
    },
    handleMouseEnter() {
      this.isToggle = false;
    },
    handleMouseLeave() {
      if (this.stateDrawer) {
        this.isToggle = true;
      }
    },
  },
});
</script>
