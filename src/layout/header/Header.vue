<template>
  <div
    id="kt_header"
    class="header"
    data-kt-sticky="true"
    data-kt-sticky-name="header"
    data-kt-sticky-offset="{default: '200px', lg: '300px'}"
    style="animation-duration: 0.3s"
  >
    <div
      :class="{
        'container-fluid': headerWidthFluid,
        container: !headerWidthFluid,
      }"
      class="d-flex justify-content-between"
      id="kt_header_container"
    >
      <!-- <KTPageTitle :title="pageTitle" :breadcrumbs="breadcrumbs"></KTPageTitle> -->

      <KTTabletAndMobileLogo></KTTabletAndMobileLogo>
      <div
        id="header-title"
        class="mt-10"
        style="font-weight: bold; font-size: 20px"
      >
        {{ headerTitle }}
        <i class="ms-2" :class="icon" style="font-size: 20px"></i>
      </div>

      <KTTopbar></KTTopbar>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import KTTopbar from "@/layout/header/Topbar.vue";
import KTTabletAndMobileLogo from "@/layout/header/TabletAndMobileLogo.vue";
import KTPageTitle from "@/layout/header/PageTitle.vue";
import { headerWidthFluid } from "@/core/helpers/config";
import { StickyComponent } from "@/assets/ts/components";
import { useStore } from "vuex";

export default defineComponent({
  name: "KTHeader",
  components: {
    KTTopbar,
    KTPageTitle,
    KTTabletAndMobileLogo,
  },
  data: () => ({
    headerTitle: "",
    icon: "",
  }),
  setup() {
    const store = useStore();

    const pageTitle = computed(() => {
      return store.getters.pageTitle;
    });

    const breadcrumbs = computed(() => {
      return store.getters.pageBreadcrumbPath;
    });

    onMounted(() => {
      StickyComponent.bootstrap();
    });

    return {
      headerWidthFluid,
      pageTitle,
      breadcrumbs,
    };
  },

  mounted() {
    this.validatePathOnMounted();
  },

  watch: {
    $route(to, from) {
      let newPath = to.path.substring(1, 3);
      this.customHeaderTitle(newPath);
    },
  },

  methods: {
    validatePathOnMounted() {
      let newPath = this.$route.name;
      if (this.$route.name && newPath) {
        newPath = newPath.toString();
        newPath = newPath.substring(0, 2);
      }
      this.customHeaderTitle(newPath);
    },
    customHeaderTitle(val) {
      if (val === "pr") {
        this.headerTitle = "Profile";
        this.icon = "bi bi-emoji-sunglasses";
      }
      if (val === "da") {
        this.headerTitle = "Dashboard";
        this.icon = "bi bi-clipboard-data";
      }
      if (val === "ma") {
        this.headerTitle = "Manage System / จัดการระบบ";
        this.icon = "bi bi-briefcase-fill";
      }
      if (val === "wa" || val === "WH") {
        this.headerTitle = "Inventory / คลังสินค้า";
        this.icon = "bi bi-box-seam";
      }
      if (val === "pu") {
        this.headerTitle = "Purchase / ซื้อ";
        this.icon = "bi bi-cart4";
      }
      if (val === "sa") {
        if (this.$route.name === "sale-daily-retail-summary") {
          this.headerTitle = "สรุปขายปลีกประจำวัน";
          this.icon = "bi bi-cash-coin";
        } else {
          this.headerTitle = "Sale / ขาย";
          this.icon = "bi bi-cash-coin";
        }
      }
      if (val === "tr") {
        this.headerTitle = "Transfer Product / โอนสินค้า";
        this.icon = "bi bi-arrow-left-right";
      }
      if (val === "se") {
        this.headerTitle = "Setting / การตั้งค่า";
        this.icon = "bi bi-gear";
      }
      if (val === "re") {
        this.headerTitle = "Report / รายงาน";
        this.icon = "bi bi-file-bar-graph";
      }
    },
  },
});
</script>

<style scoped>
@media only screen and (max-width: 1000px) {
  #header-title {
    display: none;
  }
}
</style>
