<template>
  <MenuComponent menu-selector="#kt_aside_menu">
    <template v-slot:content>
      <!--begin::Menu-->
      <div
        class="menu menu-column menu-pill menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-arrow-gray-500 fw-bold fs-5 my-5 mt-lg-2 mb-lg-0"
        id="kt_aside_menu"
        data-kt-menu="true"
      >
        <div
          class="hover-scroll-y me-n3 pe-3"
          id="kt_aside_menu_scroll"
          data-kt-scroll="true"
          data-kt-scroll-activate="{default: false, lg: true}"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_aside_menu"
          data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
          data-kt-scroll-offset="20px"
        >
          <template v-for="(item, i) in MainMenuConfig" :key="i">
            <div v-if="item.heading" class="menu-item">
              <!-- <div class="menu-content">
                <div class="separator mx-1 my-4"></div>
              </div> -->
              <div class="menu-content pt-8 pb-2">
                <span class="menu-section text-muted text-uppercase fs-8 ls-1">
                  {{ translate(item.heading) }}
                </span>
              </div>
            </div>
            <template v-for="(menuItem, j) in item.pages" :key="j">
              <template v-if="menuItem.heading">
                <div class="menu-item">
                  <div class="separator mx-1 my-4"></div>
                  <router-link
                    v-slot="{ href, navigate, isActive, isExactActive }"
                    :to="menuItem.route"
                  >
                    <a
                      :class="[isActive && 'active', isExactActive && 'active']"
                      :href="href"
                      class="menu-link hover-change-color"
                      :style="hoverByClickDb"
                      @click="navigate"
                      @click.stop="hoverListDb"
                    >
                      <span
                        v-if="menuItem.svgIcon || menuItem.fontIcon"
                        class="menu-icon d-flex justify-content-end"
                      >
                        <!-- <i
                          v-if="asideMenuIcons === 'font'"
                          :class="menuItem.fontIcon"
                          class="bi fs-3"
                        ></i>
                        <span
                          v-else-if="asideMenuIcons === 'svg'"
                          class="svg-icon svg-icon-2"
                        >
                          <inline-svg :src="menuItem.svgIcon" />
                        </span> -->
                        <i
                          style="font-size: 18px"
                          class="bi bi-clipboard-data"
                        ></i>
                      </span>
                      <!-- <span class="menu-title">{{
                        translate(menuItem.heading)
                      }}</span> -->
                    </a>
                  </router-link>
                </div>
              </template>
              <div
                v-if="menuItem.sectionTitle"
                :class="{ show: hasActiveChildren(menuItem.route) }"
                class="menu-item menu-accordion"
                data-kt-menu-sub="accordion"
                data-kt-menu-trigger="click"
              >
                <span @click="subItemChange" class="menu-link">
                  <span
                    v-if="menuItem.svgIcon || menuItem.fontIcon"
                    class="menu-icon d-flex justify-content-end"
                  >
                    <i style="font-size: 20px" :class="menuItem.icon"></i>
                  </span>
                  <!-- <span class="menu-title">{{
                    translate(menuItem.sectionTitle)
                  }}</span> -->
                  <!-- <span class="menu-arrow"></span> -->
                </span>
                <div
                  :class="{ show: hasActiveChildren(menuItem.route) }"
                  class="menu-sub menu-sub-accordion"
                >
                  <template v-for="(item2, k) in menuItem.sub" :key="k">
                    <!-- <div v-if="item2.heading" class="menu-item">
                      <router-link
                        v-slot="{ href, navigate, isActive, isExactActive }"
                        :to="item2.route"
                      >
                        <a
                          :class="[
                            isActive && 'active',
                            isExactActive && 'active',
                          ]"
                          :href="href"
                          class="menu-link hover-change-color"
                          :style="
                            index2 === k
                              ? hoverByClickOther
                              : index1 === j
                              ? ''
                              : hoverByClickOther
                          "
                          @click="navigate"
                          @click.stop="hoverListOther(k, j)"
                        >
                          <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                          </span>
                          <span
                            :style="
                              index2 === k
                                ? textColorOther
                                : index1 === j
                                ? ''
                                : textColorOther
                            "
                            class="menu-title"
                            >{{ k }}</span
                          >
                        </a>
                      </router-link>
                    </div> -->
                    <div
                      v-if="item2.sectionTitle"
                      :class="{ show: hasActiveChildren(item2.route) }"
                      class="menu-item menu-accordion"
                      data-kt-menu-sub="accordion"
                      data-kt-menu-trigger="click"
                    >
                      <span class="menu-link">
                        <!-- <span class="menu-bullet">
                          <span class="bullet bullet-dot"></span>
                        </span> -->
                        <span class="menu-title">{{
                          translate(item2.sectionTitle)
                        }}</span>
                        <span class="menu-arrow"></span>
                      </span>
                      <div
                        :class="{ show: hasActiveChildren(item2.route) }"
                        class="menu-sub menu-sub-accordion"
                      >
                        <template v-for="(item3, k) in item2.sub" :key="k">
                          <div v-if="item3.heading" class="menu-item">
                            <router-link
                              v-slot="{
                                href,
                                navigate,
                                isActive,
                                isExactActive,
                              }"
                              :to="item3.route"
                            >
                              <a
                                class="menu-link"
                                :class="[
                                  isActive && 'active',
                                  isExactActive && 'active',
                                ]"
                                :href="href"
                                @click="navigate"
                              >
                                <!-- <span class="menu-bullet">
                                  <span class="bullet bullet-dot"></span>
                                </span> -->
                                <span class="menu-title">{{
                                  translate(item3.heading)
                                }}</span>
                              </a>
                            </router-link>
                          </div>
                        </template>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </template>
          </template>
          <!-- <div class="menu-item">
            <div class="menu-content">
              <div class="separator mx-1 my-4"></div>
            </div>
          </div> -->
          <!-- <div class="menu-item ">
            <a
              class="menu-link"
              href="https://preview.keenthemes.com/rider-vue-pro-docs/#/utilities"
            >
              <span class="menu-icon">
                <span class="svg-icon svg-icon-2">
                  <inline-svg src="media/icons/duotune/layouts/lay009.svg" />
                </span>
              </span>
              <span class="menu-title">{{ translate("components") }}</span>
            </a>
          </div>
          <div class="menu-item ">
            <a
              class="menu-link"
              href="https://preview.keenthemes.com/rider-vue-pro-docs/#/overview"
            >
              <span class="menu-icon">
                <span class="svg-icon svg-icon-2">
                  <inline-svg src="media/icons/duotune/abstract/abs027.svg" />
                </span>
              </span>
              <span class="menu-title">{{ translate("documentation") }}</span>
            </a>
          </div>
          <div class="menu-item">
            <router-link class="menu-link" to="/builder">
              <span class="menu-icon">
                <span class="svg-icon svg-icon-2">
                  <inline-svg src="media/icons/duotune/general/gen019.svg" />
                </span>
              </span>
              <span class="menu-title">{{ translate("layoutBuilder") }}</span>
            </router-link>
          </div>
          <div class="menu-item">
            <a
              class="menu-link"
              href="https://preview.keenthemes.com/rider-vue-pro-docs/#/changelog"
            >
              <span class="menu-icon">
                <span class="svg-icon svg-icon-2">
                  <inline-svg src="media/icons/duotune/general/gen005.svg" />
                </span>
              </span>
              <span class="menu-title"
                >{{ translate("changelog") }} v{{ version }}</span
              >
            </a>
          </div> -->
        </div>
      </div>
      <!--end::Menu-->
    </template>
  </MenuComponent>
</template>

<style lang="scss">
.aside-menu .menu .menu-sub .menu-item a a.menu-link {
  padding-left: calc(0.75rem + 25px);
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  flex: 0 0 100%;
  transition: none;
  outline: none !important;
}

.aside-menu .menu .menu-sub .menu-sub .menu-item a a.menu-link {
  padding-left: calc(1.5rem + 25px);
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  flex: 0 0 100%;
  transition: none;
  outline: none !important;
}
</style>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { ScrollComponent } from "@/assets/ts/components";
import MenuComponent from "@/components/menu/MenuComponent.vue";
import { version } from "@/core/helpers/documentation";
import { asideMenuIcons } from "@/core/helpers/config";
import MainMenuConfig from "@/core/config/MainMenuConfig";

export default defineComponent({
  name: "kt-menu",
  components: {
    MenuComponent,
  },
  setup() {
    const { t, te } = useI18n();
    const route = useRoute();
    const scrollElRef = ref<null | HTMLElement>(null);

    onMounted(() => {
      ScrollComponent.reinitialization();
      if (scrollElRef.value) {
        scrollElRef.value.scrollTop = 0;
      }
    });

    const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    const hasActiveChildren = (match) => {
      return route.path.indexOf(match) !== -1;
    };

    return {
      hasActiveChildren,
      MainMenuConfig,
      asideMenuIcons,
      version,
      translate,
    };
  },
  data: () => ({
    hoverByClickDb: "",
    hoverByClickOther: "",
    index1: "",
    index2: "",
    textColorDb: "",
    textColorOther: "",
  }),
  methods: {
    subItemChange() {
      this.hoverByClickOther = "";
      this.textColorOther = "";
    },
    hoverListDb() {
      this.hoverByClickDb = "background-color: AliceBlue;";
      this.textColorDb = "color: #3699ff";
    },
    hoverListOther(k, j) {
      this.index1 = j;
      this.index2 = k;
      this.hoverByClickDb = "";
      this.hoverByClickOther = "background-color: AliceBlue;";

      this.textColorDb = "";
      this.textColorOther = "color: #3699ff";
    },
  },
});
</script>

<style scoped>
.hover-change-color:hover {
  background-color: AliceBlue;
}
</style>
