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
              <b-table-simple bordered small caption-top responsive>
                <b-thead>
                  <b-tr>
                    <b-th style="text-align: center; width: 15%">Ngày gửi</b-th>
                    <b-th style="text-align: center">Người liên hệ</b-th>
                    <b-th style="text-align: center">Số điện thoại</b-th>
                    <b-th style="text-align: center">Địa chỉ liên hệ</b-th>
                  </b-tr>
                </b-thead>
                <b-tbody>
                  <b-tr v-for="(dt, index) in feedBackDv" :key="index">
                    <b-td style="text-align: center">{{
                      moment(dt.ngaygui).format("DD-MM-YYYY")
                    }}</b-td>
                    <template v-if="dt.nguoilienhe_new">
                      <b-td variant="success" style="text-align: center">
                        {{ dt.nguoilienhe_new }}
                      </b-td>
                    </template>
                    <template v-else>
                      <b-td style="text-align: center">Không</b-td>
                    </template>
                    <template v-if="dt.sodienthoai_new">
                      <b-td variant="success" style="text-align: center">
                        {{ dt.sodienthoai_new }}
                      </b-td>
                    </template>
                    <template v-else>
                      <b-td style="text-align: center">Không</b-td>
                    </template>
                    <template v-if="dt.diachi_new">
                      <b-td variant="success" style="text-align: center">
                        {{ dt.diachi_new }}
                      </b-td>
                    </template>
                    <template v-else>
                      <b-td style="text-align: center">Không</b-td>
                    </template>
                    <!-- <b-td variant="success">72</b-td> -->
                  </b-tr>
                </b-tbody>
                <!-- <b-tfoot>
                            <b-tr>
                              <b-td
                                colspan="7"
                                variant="secondary"
                                class="text-right"
                              >
                                Total Rows: <b>5</b>
                              </b-td>
                            </b-tr>
                          </b-tfoot> -->
              </b-table-simple>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Container-fluid Ends-->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },

  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    feedBackDv() {
      return this.$store.state.feedback.feedback_dv;
    },
  },

  created() {
    this.fetchFeeds();
    this.fetchFeedDv(this.currentUser.MA_DONVI);
  },

  methods: {
    ...mapActions(["fetchFeeds", "fetchFeedDv"]),
  },
};
</script>
<style scoped>
</style>