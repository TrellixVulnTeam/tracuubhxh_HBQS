<template>
  <div>
    <div class="container-fluid">
      <div class="page-header">
        <Breadcrumbs main="Settings" title="Thông tin đơn vị" />
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-12">
          <div class="card tab2-card">
            <div class="card-body">
              <ul
                class="nav nav-tabs tab-coupon mb-0"
                id="top-tab"
                role="tablist"
              >
                <div class="tab-content" id="top-tabContent">
                  <b-tabs content-class="mt-3">
                    <b-tab title="profile" data-feather="user" active>
                      <template slot="title">
                        <feather type="box"></feather>Đơn vị
                      </template>
                      <b-card-text>
                        <div
                          class="tab-pane fade show active"
                          id="top-profile"
                          role="tabpanel"
                          aria-labelledby="top-profile-tab"
                        >
                          <div class="table-responsive profile-table mb-0">
                            <table class="table table-responsive mb-0">
                              <tbody>
                                <tr>
                                  <td>Tên đơn vị:</td>
                                  <td>{{ currentUser.TEN_DONVI }}</td>
                                </tr>
                                <tr>
                                  <td>Mã đơn vị:</td>
                                  <td>{{ currentUser.MA_DONVI }}</td>
                                </tr>
                                <tr>
                                  <td>Mã số thuế:</td>
                                  <td>{{ currentUser.MS_THUE }}</td>
                                </tr>
                                <tr>
                                  <td>Điện thoại:</td>
                                  <td>{{ currentUser.DIEN_THOAI_DONVI }}</td>
                                </tr>
                                <tr>
                                  <td>Email đơn vị:</td>
                                  <td>{{ currentUser.EMAIL_DONVI }}</td>
                                </tr>
                                <tr>
                                  <td>Cán bộ BHXH chuyên quản:</td>
                                  <td>{{ currentUser.CHUYEN_QUAN_THU }}</td>
                                </tr>
                                <tr>
                                  <td>Địa chỉ trụ sở:</td>
                                  <td>{{ currentUser.DC_TRU_SO }}</td>
                                </tr>
                                <tr>
                                  <td>Địa chỉ liên hệ:</td>
                                  <td>{{ currentUser.DC_LIEN_HE }}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>                          
                        </div>
                      </b-card-text>
                    </b-tab>
                    <b-tab data-feather="lock" title="settings">
                      <template slot="title">
                        <feather type="user"></feather>Người đại diện 
                      </template>
                      <b-card-text>
                        <div
                          class="tab-pane fade show active"
                          id="top-profile"
                          role="tabpanel"
                          aria-labelledby="top-profile-tab"
                        >
                          <div class="table-responsive profile-table mb-0">
                            <table class="table table-responsive mb-0">
                              <tbody>
                                <tr>
                                  <td>Người đại diện:</td>
                                  <td>{{ currentUser.NGUOI_DAI_DIEN }}</td>
                                </tr>
                                <tr>
                                  <td>Số điện thoại:</td>
                                  <td>{{ currentUser.SDT_NGUOI_DD }}</td>
                                </tr>
                                <tr>
                                  <td>Số CMT:</td>
                                  <td>{{ currentUser.CMND_NDD }}</td>
                                </tr>                                
                              </tbody>
                            </table>
                          </div>                          
                        </div>
                      </b-card-text>
                    </b-tab>
                    <b-tab data-feather="lock" title="settings">
                      <template slot="title">
                        <feather type="user-plus"></feather>Người liên hệ
                      </template>
                      <b-card-text>
                        <div
                          class="tab-pane fade show active"
                          id="top-profile"
                          role="tabpanel"
                          aria-labelledby="top-profile-tab"
                        >
                          <div class="table-responsive profile-table mb-0">
                            <table class="table table-responsive mb-0">
                              <tbody>
                                <tr>
                                  <td>Người liên hệ:</td>
                                  <td>{{ currentUser.NGUOI_LH }}</td>
                                </tr>
                                <tr>
                                  <td>Số điện thoại:</td>
                                  <td>{{ currentUser.DIEN_THOAI_NLH }}</td>
                                </tr>
                                <tr>
                                  <td>Email:</td>
                                  <td>{{ currentUser.EMAIL_NLH }}</td>
                                </tr>                                
                              </tbody>
                            </table>
                          </div>                          
                        </div>
                      </b-card-text>
                    </b-tab>
                  </b-tabs>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "<h1>Some initial content</h1>",
    };
  },
  methods: {
    onComplete() {},
  },
  computed: {
    /* abc */
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
};
</script>
<style scoped></style>
