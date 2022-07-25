<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="page-header">
        <Breadcrumbs main="Feedback" title="Gửi yêu cầu" />
      </div>
      <div class="row">
        <div class="col">
          <div class="card tab2-card">
            <div class="card-body">
              <ul class="nav nav-tabs tab-coupon" id="top-tab" role="tablist">
                <div class="tab-content" id="top-tabContent">
                  <b-tabs content-class="mt-3">
                    <b-tab
                      title="Thay đổi thông tin người liên hệ"
                      data-feather="user"
                      active
                    >
                      <form class="needs-validation user-add" novalidate="">
                        <div>
                          <h6 style="color: red">
                            * Nếu cần thay đổi thông tin gì thì ghi thông tin đó
                            vào ô và bấm gửi phản hồi về cho cơ quan Bảo hiểm xã
                            hội.
                          </h6>
                          <h6 style="color: red">
                            * Chỉ thay đổi thông tin kế toán, số điện thoại kế
                            toán, và địa chỉ liên hệ.
                          </h6>
                          <h6 style="color: red">
                            * Đơn vị chịu trách nhiệm hoàn toàn với cơ quan BHXH
                            với những thay đổi sau khi gửi.
                          </h6>
                        </div>
                        <div class="form-group row" style="margin-top: 30px">
                          <label
                            for="validationCustom0"
                            class="col-xl-3 col-md-4"
                            ><span></span> Tên người liên hệ</label
                          >
                          <input
                            class="form-control col-xl-8 col-md-7"
                            id="validationCustom0"
                            type="text"
                            required=""
                            v-model="form.nguoilienhe_new"
                          />
                        </div>
                        <div class="form-group row">
                          <label
                            for="validationCustom1"
                            class="col-xl-3 col-md-4"
                            ><span></span> Số điện thoại người liên hệ</label
                          >
                          <input
                            class="form-control col-xl-8 col-md-7"
                            id="validationCustom1"
                            type="text"
                            required=""
                            v-model="form.sodienthoai_new"
                          />
                        </div>
                        <div class="form-group row">
                          <label
                            for="validationCustom2"
                            class="col-xl-3 col-md-4"
                            ><span></span> Địa chỉ liên hệ</label
                          >
                          <input
                            class="form-control col-xl-8 col-md-7"
                            id="validationCustom2"
                            type="text"
                            required=""
                            v-model="form.diachi_new"
                          />
                        </div>
                      </form>
                    </b-tab>
                  </b-tabs>
                </div>
              </ul>
              <div class="pull-right">
                <button @click="onSubmit" type="button" class="btn btn-primary">
                  Gửi yêu cầu cho Bảo hiểm xã hội
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Container-fluid Ends-->
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        madonvi: null,
        masothue: null,
        sodienthoai: null,
        nguoidaidien: null,
        nguoilienhe_new: null,
        sodienthoai_new: null,
        diachi_new: null,
        ngaygui: new Date().toISOString().substr(0, 10),
      },
    };
  },

  computed: {
    /* abc */
    currentUser() {
      return this.$store.state.auth.user;
    },
  },

  created() {
    this.form.madonvi = this.currentUser.MA_DONVI;
    this.form.masothue = this.currentUser.MS_THUE;
    this.form.sodienthoai = this.currentUser.SDT_NGUOI_DD;
    this.form.nguoidaidien = this.currentUser.NGUOI_DAI_DIEN;
  },

  methods: {
    ...mapActions(["addFeed"]),
    onSubmit() {
      /* if (
        this.form.nguoilienhe_new ||
        this.form.sodienthoai_new ||
        this.form.diachi_new
      ) {
        //this.addFeed(this.form)
        this.$store.dispatch('addFeed', this.form)
        alert("đã gửi");
      } else {
        alert("not ok");
      } */
      this.$swal
        .fire({
          text: "Bạn chắc chắn muốn gửi yêu cầu đến cơ quan BHXH không?",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Đồng ý",
        })
        .then((result) => {
          if (result.isConfirmed) {
            if (
              this.form.nguoilienhe_new ||
              this.form.sodienthoai_new ||
              this.form.diachi_new
            ) {
              //this.addFeed(this.form)
              this.$store.dispatch("addFeed", this.form);
              this.$swal.fire(
                "Gửi thành công yêu cầu !",
                "Cơ quan BHXH sẽ tiếp nhận, xử lý và phản hồi lại đơn vị qua chuyên quản thu, xin cảm ơn!"
              );
            } else {
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
                title: "Nhập ít nhất 1 thông tin cần thay đổi !",
              });
            }
          }
        });
    },
  },
};
</script>
<style scoped>
</style>