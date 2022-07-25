<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="page-header">
        <Breadcrumbs main="" title="Thông tin C12" />
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-12">
            <div class="card tab2-card">
              <div class="card-body">
                <table class="table table-bordered table-responsive">
                  <tbody>
                    <tr>
                      <th style="text-align: center; width: 5%">STT</th>
                      <th style="text-align: center; width: 50%">Chỉ tiêu</th>
                      <th style="text-align: center">BHXH</th>
                      <th style="text-align: center">BHYT</th>
                      <th style="text-align: center">BHTN</th>
                      <th style="text-align: center">TNLĐ, BNN</th>
                      <th style="text-align: center">Tổng cộng</th>
                    </tr>
                    <tr>
                      <th style="text-align: center">1</th>
                      <th>Số lao động tham gia (T07)</th>
                      <th style="text-align: center">
                        {{ c12dv.sldHttt | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv.sldBhytCk | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv.sldtn | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv.sldTnld | numeral("0,0") }}
                      </th>
                      <th style="text-align: center"></th>
                    </tr>
                    <tr>
                      <th style="text-align: center">2</th>
                      <th>Tổng quỹ lương tham gia</th>
                      <th style="text-align: center">
                        {{ c12dv._tql | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv._tqlyt | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv._tqltn | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv.tongQuyLuongTnldCk | numeral("0,0") }}
                      </th>
                      <th style="text-align: center"></th>
                    </tr>
                    <tr>
                      <th style="text-align: center">3</th>
                      <th>Số tiền phải nộp</th>
                      <th style="text-align: center">
                        {{ c12dv.tongtiennap_bhxh | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv.tongtiennap_bhyt | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv.tongtiennap_tn | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv.tongtiennap_tnld | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv.tong_tien_phainap | numeral("0,0") }}
                      </th>
                    </tr>
                    <tr>
                      <th style="text-align: center"></th>
                      <th>Trong đó:</th>
                      <th style="text-align: center"></th>
                      <th style="text-align: center"></th>
                      <th style="text-align: center"></th>
                      <th style="text-align: center"></th>
                      <th style="text-align: center"></th>
                    </tr>
                    <tr>
                      <th style="text-align: center">3.1</th>
                      <th>Phải nộp phát sinh</th>
                      <th style="text-align: center">
                        {{ c12dv._ps_bh | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv._ps_yt | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv._ps_tn | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv._ps_tnld | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv.sum_ps | numeral("0,0") }}
                      </th>
                    </tr>
                    <tr>
                      <th style="text-align: center">3.2</th>
                      <th>Điều chỉnh tăng</th>
                      <th style="text-align: center">
                        {{ c12dv._bst_bh | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv._bst_yt | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv._bst_tn | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv._bst_tnld | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv.sum_bst | numeral("0,0") }}
                      </th>
                    </tr>
                    <tr>
                      <th style="text-align: center">3.3</th>
                      <th>Điều chỉnh giảm</th>
                      <th style="text-align: center">
                        {{ c12dv._bsg_bh | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv._bsg_yt | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv._bsg_tn | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv._bsg_tnld | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv.sum_bsg | numeral("0,0") }}
                      </th>
                    </tr>
                    <tr>
                      <th style="text-align: center">3.4</th>
                      <th>Nợ kỳ trước chuyển sang</th>
                      <th style="text-align: center">
                        {{ c12dv.sum_lai_cd_bhxh | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv.sum_lai_cd_yt | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv.sum_lai_cd_tn | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv.sum_lai_cd_tnld | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv.sum_noktcs | numeral("0,0") }}
                      </th>
                    </tr>
                    <tr>
                      <th style="text-align: center"></th>
                      <th>Trong đó: Lãi chậm đóng</th>
                      <th style="text-align: center">
                        {{ c12dv._dk_lai1 | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv._dk_lai2 | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv._dk_lai3 | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv._dk_lai5 | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{
                          (c12dv._dk_lai1 +
                            c12dv._dk_lai2 +
                            c12dv._dk_lai3 +
                            c12dv._dk_lai5)
                            | numeral("0,0")
                        }}
                      </th>
                    </tr>
                    <tr>
                      <th style="text-align: center">3.5</th>
                      <th>Thừa kỳ trước chuyển sang</th>
                      <th style="text-align: center"></th>
                      <th style="text-align: center"></th>
                      <th style="text-align: center"></th>
                      <th style="text-align: center"></th>
                      <th style="text-align: center">
                        {{ c12dv.du_dk | numeral("0,0") }}
                      </th>
                    </tr>
                    <tr>
                      <th style="text-align: center">3.6</th>
                      <th>Lãi chậm đóng phát sinh</th>
                      <th style="text-align: center">
                        {{ c12dv.sum_lcd_ps | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv._lai2_ps | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv._lai3_ps | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv._lai5_ps | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv._laiqh | numeral("0,0") }}
                      </th>
                    </tr>
                    <tr>
                      <th style="text-align: center">4</th>
                      <th>Số tiền đã nộp</th>
                      <th style="text-align: center"></th>
                      <th style="text-align: center"></th>
                      <th style="text-align: center"></th>
                      <th style="text-align: center"></th>
                      <th style="text-align: center">
                        {{ c12dv._tien_unc | numeral("0,0") }}
                      </th>
                    </tr>
                    <tr>
                      <th style="text-align: center">5</th>
                      <th>Số tiền còn nợ</th>
                      <th style="text-align: center">
                        {{ c12dv.tien_no_bhxh | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv.tien_no_bhyt | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv.tien_no_tn | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv.tien_no_tnld | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv.sum_tien_con_no | numeral("0,0") }}
                      </th>
                    </tr>
                    <tr>
                      <th style="text-align: center"></th>
                      <th>Trong đó: Lãi chậm đóng</th>
                      <th style="text-align: center">
                        {{ c12dv._ck_lai1 | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv._ck_lai2 | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv._ck_lai3 | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv._ck_lai5 | numeral("0,0") }}
                      </th>
                      <th style="text-align: center">
                        {{ c12dv._ck_lai | numeral("0,0") }}
                      </th>
                    </tr>
                    <tr>
                      <th style="text-align: center">6</th>
                      <th>Thừa chuyển kỳ sau</th>
                      <th style="text-align: center"></th>
                      <th style="text-align: center"></th>
                      <th style="text-align: center"></th>
                      <th style="text-align: center"></th>
                      <th style="text-align: center">
                        {{ c12dv.du_ck | numeral("0,0") }}
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { mapGetters } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      c12: {},
      c12dv: {},
      form: {
        MA_DONVI: null,
      },
    };
  },

  mounted() {
    this.dsImport();
  },

  computed: {
    /* abc */
    currentUser() {
      return this.$store.state.auth.user;
    },
  },

  created() {
    this.form.MA_DONVI = this.currentUser.MA_DONVI;
    /* this.form.tendonvi = this.docthu.tendonvi;
    this.form.mahuyen = this.docthu.mahuyen;
    this.form.diachi = this.docthu.diachi;
    this.form.chuyenquan = this.docthu.chuyenquan; */
  },

  methods: {
    async dsImport() {
      const response = await axios.get(
        `http://14.224.129.177:8888/api/c12/getdatac12dv?madvi=${this.form.MA_DONVI}`
      );
      //console.log(this.items.data);
      this.c12 = response.data;
      this.c12dv = this.c12[0];
      //console.log(this.c12dv);
    },
  },
};
</script>
