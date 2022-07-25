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
                <h1>Bảo hiểm</h1>
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
