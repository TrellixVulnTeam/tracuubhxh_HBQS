<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form
      class="form-horizontal auth-form"
      @submit.prevent="handleSubmit"
      method="post"
    >
      <div class="form-group">
        <ValidationProvider
          name="username"
          rules="required"
          v-slot="{ errors }"
        >
          <input
            v-model="form.email"
            name="login[username]"
            type="email"
            class="form-control"
            placeholder="Email"
            id="exampleInputEmail12"
          />
          <span class="block text-danger text-xs absolute bottom-0 left-0">{{
            errors[0]
          }}</span>
        </ValidationProvider>
      </div>
      <div class="form-group">
        <ValidationProvider
          name="password"
          ref="password"
          :rules="{
            required: { allowFalse: false },
            regex:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          }"
          v-slot="{ errors }"
        >
          <input
            v-model="form.password"
            name="login[password]"
            type="password"
            class="form-control"
            placeholder="Mật khẩu"
          />
          <span class="block text-danger text-xs absolute bottom-0 left-0">{{
            errors[0]
          }}</span>
        </ValidationProvider>
      </div>
      <div class="form-button">
        <button class="btn btn-primary" type="submit" @click="register">
          Đăng nhập
        </button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  data() {
    return {
      form: {
        password: "",
        email: "",
      },

      submitted: false,
      confirmPassword: "",
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
    },
    register() {
      this.submitted = true;
      if (
        !this.form.email &&
        !this.form.password
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
        //alert('ok')
        this.$store.dispatch("auth/login3", this.form).then(
          () => {
            this.$router.push("/dashboard-canbobaohiem/default").catch(() => {});
          },
          (error) => {
            this.message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        );
      }
    },
  },
};
</script>