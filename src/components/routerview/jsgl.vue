// 角色管理
<template>
  <div>
    <div class="content-header">
      <div class="content-name">角色管理</div>
    </div>
    <div id="jsglToolbar" class="btn-group">
      <button type="button" class="btn btn-default" v-on:click="openAddModal">
        <span class="glyphicon glyphicon-plus" aria-hidden="true" style="color:#286090"></span>&nbsp;添加</button>
      <button class='btn btn-default'>
        <span class='glyphicon glyphicon-pencil' style='color:#28b779'></span>&nbsp;修改</button>
      <button class='btn btn-default'>
        <span class='glyphicon glyphicon-remove' style='color:#d9534f'></span>&nbsp;删除 </button>
    </div>
    <table id="jsglTable"></table>
    <!-- Modal -->
    <div class="modal fade" id="jsglAddModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">添加角色</h4>
          </div>
          <div class="modal-body">
            <div class="row">
              <label class="col-sm-2 col-xs-12">角色名称:</label>
              <input type="text" placeholder="请输入模板名称" class="col-sm-8 col-xs-10" />
              <div class="col-sm-2 col-xs-2">
                <a tabindex="-1" title="该项不能为空!">*</a>
                <a tabindex="-1">
                  <i class="glyphicon glyphicon-warning-sign" style="color: red;"></i>
                </a>
              </div>
            </div>
            <div class="row">
              <label class="col-sm-2 col-xs-12">角色编码:</label>
              <input type="text" placeholder="角色编码只能为数字" class="col-sm-8 col-xs-10" />
              <div class="col-sm-2 col-xs-2">
                <a tabindex="-1" title="该项不能为空!">*</a>
                <a tabindex="-1">
                  <i class="glyphicon glyphicon-warning-sign" style="color: red;"></i>
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-5">
                <p>功能菜单</p>
                <div></div>
              </div>
              <div class="col-sm-7">
                <p>权限分配</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">保存</button>
          </div>
        </div>
      </div>
    </div>
    <!-- /.modal -->
  </div>
</template>

<script>
export default {
  name: "Jsgl",
  data() {
    return {
      jsglList: [
        {
          appnames: "已处理任务,数据资源申请,待处理任务",
          code: "zfjdy",
          name: "执法监督员",
          id: "1ab9edc12ec043c68b995a629bdd86c1",
          authnames: "初审,发起领导交办,发起紧急警情,发起集群战役下发线索,发起立案申请,发起追逃申请"
        },
        {
          appnames: "数据资源申请,待处理任务,已处理任务",
          code: "fzdz",
          name: "副支队长",
          id: "1f7d70e0118e407d9fe424a32aa1539d",
          authnames: "分配民警,结案"
        }
      ],
      appList: [],
      authList: []
    }
  },
  methods: {
    initJsglTable: function() {
      $("#jsglTable").bootstrapTable({
        // sidePagination: "server",
        // url: "/admin/role/search/list",
        // method: "GET",
        data: this.jsglList,
        toolbar: "#jsglToolbar",
        striped: true,
        cache: false,
        pagination: true,
        pageSize: 20,
        pageList: [10, 20, 50, 100],
        clickToSelect: false,
        sortable: false,
        queryParams: function(params) {
          //插件的默认参数limit:20&offset:0&order:"asc"&search:undefined&sort:undefined
          var temp = {
            pagesize: params.limit,
            page: params.offset / params.limit + 1
          }
          console.log(temp)
          return temp
        },
        columns: [
          {
            checkbox: true,
            visible: true //是否显示复选框
          },
          {
            field: "name",
            title: "姓名"
          },
          {
            field: "authnames",
            title: "权限",
            formatter: function(value, row, index) {
              return `<span style='color:#888'>` + value + `</span>`
            }
          }
        ]
      })
    },
    openAddModal: function() {
      $("#jsglAddModal").modal("show")
    }
  },
  created() {
    let _this = this
    console.log("进入角色管理")
    let _postData = {
      syscode: "hswaoa",
      roleid: 1
    }
    let fakerData = [
      {
        id: "dc724bc356df4409bd283bab484d5ba7",
        gid: "07f07467e4594e19b215bd39793b788e",
        gname: "可发起案件",
        syscode: "hswaoa",
        code: "auth_start_qbxskc",
        name: "情报线索扩查"
      },
      {
        id: "dc724bc356df4409bd283bab484d5ba7",
        gid: "07f07467e4594e19b215bd39793b788e",
        gname: "可发起案件",
        syscode: "hswaoa",
        code: "auth_start_2",
        name: "名称2"
      },
      {
        id: "dc724bc356df4409bd283bab484d5ba7",
        gid: "07f07467e4594e19b215bd39793b788e",
        gname: "不可发起案件",
        syscode: "hswaoa",
        code: "auth_start_3",
        name: "名称3"
      }
    ]
    let gnameList = fakerData
      .map(function(item) {
        return item.gname
      })
      .distinct()
    _this.appList = gnameList.map(function(item) {
      let nameList = []
      for (let val of fakerData) {
        if (val.gname == item) {
          let nameObj = {
            name: val.name,
            code: val.code,
            id: val.id,
            syscode: val.syscode,
            isSelected: false
          }
          nameList.push(nameObj)
        }
      }
      return {
        gname: item,
        nameList: nameList
      }
    })
    console.log(_this.appList)
  },
  mounted() {
    this.initJsglTable()
  }
}
</script>

<style scoped>
.modal-body .row {
  line-height: 34px;
  margin-bottom: 10px;
  margin-left: 0;
}
.modal-body .row input {
  display: inline-block;
  height: 34px;
  padding: 6px 12px;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
}
</style>
