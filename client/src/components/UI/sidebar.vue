<template>
  <div>
    <!-- Page Sidebar Start-->
    <div class="page-sidebar">
      <div class="main-header-left d-none d-lg-block">
        <div class="logo-wrapper" style="text-align:center;">
          <router-link to="/"
            ><img
              class="blur-up lazyloaded"
              src="../../assets/images/avatar/banner_chu.svg"
              alt=""
              style="height:30px; weight:60px;"
          /></router-link>
        </div>
      </div>
      <div class="sidebar custom-scrollbar">
        <div class="sidebar-user text-center">
          <div>
            <img
              class="img-60 rounded-circle lazyloaded blur-up"
              src="../../assets/images/avatar/avatar.jpg"
              alt="#"
            />
          </div>
          <h6 class="mt-3 f-14">{{currentUser.MA_DONVI}}</h6>
          <p>{{currentUser.TEN_DONVI}}</p>
        </div>
        <ul class="sidebar-menu" id="myDIV">
          <li
            v-for="(menuItem, index) in menuItems"
            :key="index"
            :class="{ active: menuItem.active }"
          >
            <!-- Sub -->
            <a
              href="javascript:void(0)"
              class="sidebar-header"
              v-if="menuItem.type == 'sub'"
              @click="setNavActive(menuItem, index)"
            >
              <feather :type="menuItem.icon"> </feather>
              <span @click="dashboardClick(menuItem.title)">
                {{ $t(menuItem.title) }}
              </span>

              <span
                :class="'badge badge-pill badge-' + menuItem.badgeType"
                v-if="menuItem.badgeType"
                >{{ $t(menuItem.badgeValue) }}</span
              >
              <i
                class="fa fa-angle-right pull-right"
                v-if="menuItem.children"
              ></i>
            </a>
            <router-link
              :to="menuItem.path"
              class="sidebar-header"
              v-if="menuItem.type == 'link'"
              router-link-exact-active
            >
              <feather :type="menuItem.icon" class="middle"></feather>
              <span>
                {{ $t(menuItem.title) }}
                <span
                  :class="'badge badge-' + menuItem.badgeType + ' ml-3'"
                  v-if="menuItem.badgeType"
                  >{{ $t(menuItem.badgeValue) }}</span
                >
              </span>
              <i
                class="fa fa-angle-right pull-right"
                v-if="menuItem.children"
              ></i>
            </router-link>
            <!--</span>
            </span>-->
            <!-- External Link -->
            <a
              :href="menuItem.path"
              class="sidebar-header"
              v-if="menuItem.type == 'extLink'"
              @click="setNavActive(menuItem, index)"
            >
              <feather :type="menuItem.icon" class="middle"></feather>
              <span>
                {{ $t(menuItem.title) }}
                <span
                  :class="'badge badge-' + menuItem.badgeType + ' ml-3'"
                  v-if="menuItem.badgeType"
                  >{{ $t(menuItem.badgeValue) }}</span
                >
              </span>
              <i
                class="fa fa-angle-right pull-right"
                v-if="menuItem.children"
              ></i>
            </a>
            <!-- External Tab Link -->
            <a
              :href="menuItem.path"
              target="_blank"
              class="sidebar-header"
              v-if="menuItem.type == 'extTabLink'"
              @click="setNavActive(menuItem, index)"
            >
              <feather :type="menuItem.icon" class="middle"></feather>
              <span>
                {{ $t(menuItem.title) }}
                <span
                  :class="'badge badge-' + menuItem.badgeType + ' ml-3'"
                  v-if="menuItem.badgeType"
                  >{{ $t(menuItem.badgeValue) }}</span
                >
              </span>
              <i
                class="fa fa-angle-right pull-right"
                v-if="menuItem.children"
              ></i>
            </a>
            <!-- 2nd Level Menu -->
            <ul
              class="sidebar-submenu"
              v-if="menuItem.children"
              :class="{ 'menu-open': menuItem.active }"
            >
              <li
                v-for="(childrenItem, index) in menuItem.children"
                :key="index"
                :class="{ active: childrenItem.active }"
              >
                <!-- Sub -->
                <a
                  href="javascript:void(0)"
                  v-if="childrenItem.type == 'sub'"
                  @click="setNavActive(childrenItem, index)"
                >
                  <i class="fa fa-circle"></i>
                  {{ $t(childrenItem.title) }}
                  <span
                    :class="
                      'badge badge-' + childrenItem.badgeType + ' pull-right'
                    "
                    v-if="childrenItem.badgeType"
                    >{{ $t(childrenItem.badgeValue) }}</span
                  >
                  <i
                    class="fa fa-angle-right pull-right"
                    v-if="childrenItem.children"
                  ></i>
                </a>
                <!-- Link -->
                <!--{{ childrenItem.children }}-->
                <!--{{ childrenItem.path }}-->
                <span
                  v-for="(item, index) in childrenItem.children"
                  :key="index"
                >
                </span>

                <router-link
                  :to="childrenItem.path"
                  v-if="childrenItem.type == 'link'"
                  router-link-exact-active
                >
                  <i class="fa fa-circle"></i>
                  {{ $t(childrenItem.title) }}
                  <span
                    :class="
                      'badge badge-' + childrenItem.badgeType + ' pull-right'
                    "
                    v-if="childrenItem.badgeType"
                    >{{ $t(childrenItem.badgeValue) }}</span
                  >
                  <i
                    class="fa fa-angle-down pull-right"
                    v-if="childrenItem.children"
                  ></i>
                </router-link>
                <!-- External Link -->
                <a
                  :href="childrenItem.path"
                  v-if="childrenItem.type == 'extLink'"
                >
                  <i class="fa fa-circle"></i>
                  {{ $t(childrenItem.title) }}
                  <span
                    :class="
                      'badge badge-' + childrenItem.badgeType + ' pull-right'
                    "
                    v-if="childrenItem.badgeType"
                    >{{ $t(childrenItem.badgeValue) }}</span
                  >
                  <i
                    class="fa fa-angle-down pull-right"
                    v-if="childrenItem.children"
                  ></i>
                </a>
                <!-- External Tab Link -->
                <a
                  :href="childrenItem.path"
                  target="_blank"
                  v-if="childrenItem.type == 'extTabLink'"
                >
                  <i class="fa fa-circle"></i>
                  {{ childrenItem.title }}
                  <span
                    :class="
                      'badge badge-' + childrenItem.badgeType + ' pull-right'
                    "
                    v-if="childrenItem.badgeType"
                    >{{ $t(childrenItem.badgeValue) }}</span
                  >
                  <i
                    class="fa fa-angle-down pull-right"
                    v-if="childrenItem.children"
                  ></i>
                </a>
                <!-- 3rd Level Menu -->
                <ul class="sidebar-submenu" v-if="childrenItem.children">
                  <li
                    v-for="(childrenSubItem, index) in childrenItem.children"
                    :key="index"
                  >
                    <!-- Link -->
                    <router-link
                      :to="childrenSubItem.path"
                      v-if="childrenSubItem.type == 'link'"
                      router-link-exact-active
                    >
                      <i class="fa fa-circle"></i>
                      {{ $t(childrenSubItem.title) }}
                      <span
                        :class="
                          'badge badge-' +
                          childrenSubItem.badgeType +
                          ' pull-right'
                        "
                        v-if="childrenSubItem.badgeType"
                        >{{ $t(childrenSubItem.badgeValue) }}</span
                      >
                      <i
                        class="fa fa-angle-right pull-right"
                        v-if="childrenSubItem.children"
                      ></i>
                    </router-link>
                    <!-- External Link -->
                    <a
                      :href="childrenSubItem.path"
                      v-if="childrenSubItem.type == 'extLink'"
                    >
                      <i class="fa fa-circle"></i>
                      {{ $t(childrenSubItem.title) }}
                      <span
                        :class="
                          'badge badge-' +
                          childrenSubItem.badgeType +
                          ' pull-right'
                        "
                        v-if="childrenSubItem.badgeType"
                        >{{ $t(childrenSubItem.badgeValue) }}</span
                      >
                      <i
                        class="fa fa-angle-right pull-right"
                        v-if="childrenSubItem.children"
                      ></i>
                    </a>
                    <!-- External Tab Link -->
                    <a
                      :href="childrenSubItem.path"
                      target="_blank"
                      v-if="childrenSubItem.type == 'extTabLink'"
                    >
                      <i class="fa fa-circle"></i>
                      {{ childrenSubItem.title }}
                      <span
                        :class="
                          'badge badge-' +
                          childrenSubItem.badgeType +
                          ' pull-right'
                        "
                        v-if="childrenSubItem.badgeType"
                        >{{ childrenSubItem.badgeValue }}</span
                      >
                      <i
                        class="fa fa-angle-right pull-right"
                        v-if="childrenSubItem.children"
                      ></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- Page Sidebar Ends-->
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Sidebar",
  data() {
    return {
      width: 0,
      height: 0,
    };
  },
  computed: {
    ...mapState({
      menuItems: (state) => state.menu.data,
    }),
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    if (this.width < 991) {
      // this.layout.settings.sidebar.type = "default";
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  mounted() {
    this.menuItems.filter((items) => {
      if (items.path === this.$route.path)
        this.$store.dispatch("menu/setActiveRoute", items);
      if (!items.children) return false;
      items.children.filter((subItems) => {
        if (subItems.path === this.$route.path)
          this.$store.dispatch("menu/setActiveRoute", subItems);
        if (!subItems.children) return false;
        subItems.children.filter((subSubItems) => {
          if (subSubItems.path === this.$route.path)
            this.$store.dispatch("menu/setActiveRoute", subSubItems);
        });
      });
    });

    if (!this.currentUser) {
      this.$router.push("/auth/login");
    }
  },
  methods: {
    dashboardClick(title) {
      if (title == "Dashboard") {
        this.$router.push("/");
      }
    },
    setNavActive(item) {
      this.$store.dispatch("menu/setNavActive", item);
    },
    handleResize() {
      this.width = window.innerWidth - 310;
    },
  },
};
</script> 
<style scoped>
</style>
