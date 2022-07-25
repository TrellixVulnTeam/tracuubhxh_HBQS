<template>
  <form
    class="form-horizontal auth-form"
    @submit.prevent="handleSubmit"
    method="post"
  >
    <div class="form-group">
      <input
        v-model="form.MA_DONVI"
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        placeholder="Mã đơn vị"
      />
    </div>
    <div class="form-group">
      <input
        type="text"
        v-model="form.MS_THUE"
        class="form-control"
        placeholder="Mã số thuế"
      />
    </div>
    <template v-if="check_SDT_LOGIN == false">
      <div class="form-group">
        <input
          type="text"
          v-model="form.SDT_NGUOI_DD"
          class="form-control"
          placeholder="Số điện thoại người đại diện"
        />
      </div>
    </template>
    <template v-else>
      <div class="form-group">
        <input
          type="text"
          v-model="form.DIEN_THOAI_DONVI"
          class="form-control"
          placeholder="Số điện thoại đơn vị"
        />
      </div>
    </template>

    <div class="form-terms">
      <div class="custom-control custom-checkbox mr-sm-2">
        <input
          v-model="check_SDT_LOGIN"
          type="checkbox"
          value="1"
          class="custom-control-input"
          id="customControlAutosizing"
        />
        <label class="custom-control-label" for="customControlAutosizing"
          >Dùng điện thoại đơn vị đăng nhập</label
        >
      </div>
    </div>
    <div class="form-button">
      <button class="btn btn-primary" type="submit" @click="login">
        Đăng nhập
      </button>
    </div>
  </form>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      type: "password",
      submitted: false,
      form: {
        MA_DONVI: null,
        MS_THUE: null,
        SDT_NGUOI_DD: null,
        DIEN_THOAI_DONVI: null,
      },
      message: "",
      check_SDT_LOGIN: false,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/dashboard/default");
    }
  },

  methods: {
    handleSubmit() {
      this.submitted = true;
    },
    async login() {
      //console.log(this.check_SDT_LOGIN)
      if (
        !this.form.MA_DONVI &&
        !this.form.MS_THUE &&
        !this.form.SDT_NGUOI_DD
      ) {
        const Toast = this.$swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", this.$swal.stopTimer);
            toast.addEventListener("mouseleave", this.$swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "warning",
          title: "Bạn không thể đăng nhập nếu không có thông tin chính xác.",
        });
      } else {
        if (this.check_SDT_LOGIN == true) {
          //alert('ok')
          this.$store.dispatch("auth/login2", this.form).then(
            () => {
              this.$router.push("/dashboard/default").catch(() => {});
            },
            (error) => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        } else {
          this.$store.dispatch("auth/login", this.form).then(
            () => {
              this.$router.push("/dashboard/default").catch(() => {});
            },
            (error) => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }
      }

      /* let response = await axios.post(
        `http://localhost:9999/api/users/mst/login`,
        this.form
      ); */
      //console.log(response.data.user);
      //localStorage.setItem("user-token", response.data.token);
      //this.$store.dispatch("user", response.data.user);

      /* this.$router.push("/dashboard/default"); */
    },
  },
};
</script>