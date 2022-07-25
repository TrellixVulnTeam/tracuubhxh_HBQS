<template>
  <!-- Page Header Start-->
  <div :class="!sidebar ? 'page-main-header open' : 'page-main-header '">
    <div class="main-header-right row">
      <div class="main-header-left d-lg-none">
        <div class="logo-wrapper">
          <router-link to="/">
            <img
              class="blur-up lazyloaded"
              src="../../assets/images/dashboard/multikart-logo.png"
              alt=""
          /></router-link>
        </div>
      </div>
      <div class="mobile-sidebar">
        <div class="media-body text-right switch-sm">
          <label class="switch"
            ><a @click="toggle_sidebar"
              ><i id="sidebar-toggle"
                ><feather type="align-left"></feather></i></a
          ></label>
        </div>
      </div>
      <div class="nav-right col">
        <ul class="nav-menus" :class="headerMenu ? 'open' : ''">
          <li>
            <form class="form-inline search-form">
              <div class="form-group">
                <!-- <i data-feather="search"> </i> -->
                <i
                  class="search-icon"
                  data-feather="search"
                  @click="toggle_search()"
                  ><feather type="search"></feather
                ></i>
                <input
                  class="form-control-plaintext"
                  :class="opensearch ? 'open' : ''"
                  type="search"
                  placeholder="Search.."
                /><span
                  class="d-sm-none mobile-search"
                  @click="toggle_search()"
                >
                </span>
              </div>
            </form>
          </li>
          <li class="onhover-dropdown">
            <div class="media align-items-center">
              <img
                class="
                  align-self-center
                  pull-right
                  img-50
                  rounded-circle
                  blur-up
                  lazyloaded
                "
                src="../../assets/images/avatar/avatar.jpg"
                alt="header-user"
              />
              <div class="dotted-animation">
                <span class="animate-circle"></span
                ><span class="main-circle"></span>
              </div>
            </div>
            <ul
              class="
                profile-dropdown
                onhover-show-div
                p-20
                profile-dropdown-hover
              "
            >
              <li>
                <router-link to="/settings/profile"
                  ><feather type="user"></feather>Thông tin</router-link
                >
              </li>
              <li>
                <router-link to="/feedback/change-info"
                  ><feather type="mail"></feather>Yêu cầu</router-link
                >
              </li>
              <li>
                <router-link to="/feedback/feeds"
                  ><feather type="clipboard"></feather>Xem yêu cầu</router-link
                >
              </li>
              <li>
                <a @click="logout"
                  ><feather type="log-out"></feather><span>Đăng xuất</span></a
                >
              </li>
            </ul>
          </li>
        </ul>
        <div class="d-lg-none mobile-toggle pull-right" @click="openHeader()">
          <feather type="more-horizontal"></feather>
        </div>
      </div>
    </div>
  </div>
  <!-- Page Header Ends -->
</template>

<script>
import { localeOptions } from "../../constants/config";
import { mapActions, mapState } from "vuex";

export default {
  name: "Header",
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.resized = this.sidebar_toggle_var;
  },
  data() {
    return {
      chatSidebar: false,
      headerMenu: false,
      opensearch: false,
      localeOptions: localeOptions,
      langIcon: localStorage.getItem("currentLanguageIcon") || "flag-icon-us",
    };
  },
  filters: {
    capitalize: function (value) {
      if (!value) {
        return "";
      }
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  watch: {
    "$i18n.locale"(to, from) {
      if (from !== to) {
        this.$router.go(this.$route.path);
      }
    },
  },
  computed: {
    sidebar() {
      return this.$store.state.menu.togglesidebar;
    },
    /* abc */
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/auth/login");
    }
  },
  methods: {
    ...mapActions(["setLang"]),
    toggle_sidebar() {
      this.$store.dispatch("menu/opensidebar");
    },
    openHeader() {
      this.headerMenu = !this.headerMenu;
    },
    openChatSidebar() {
      this.$store.dispatch("menu/openChatSidebar", true);
    },
    toggle_search() {
      this.opensearch = !this.opensearch;
    },
    toggle_fullscreen() {
      if (
        (document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)
      ) {
        if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/auth/login");
    },
    changeLocale(locale) {
      this.setLang(locale);
    },
    handleResize() {
      this.width = window.innerWidth;
    },
  },
};
</script>
