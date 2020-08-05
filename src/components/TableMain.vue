<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">IVIEW布局</div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              TAB 1
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              TAB 2
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              TAB 3
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              TAB 4
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '20px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <div style="min-height: 200px;">
            <v-table
              is-horizontal-resize
              style="width:100%"
              :columns="columns"
              :table-data="tableData"
              row-hover-color="#eee"
              row-click-color="#edf7ff"
            ></v-table>
          </div>
        </Card>
      </Content>
      <Footer class="layout-footer-center"> 陈良</Footer>
    </Layout>
  </div>
</template>
<script>
  export default {
    name: "table-main",
    data() {
      return {
        tableData: [],
        columns: [
          {field: 'id', title: '序号', width: 80, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'createTime', title: '日期', width: 80, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'username', title: '姓名', width: 80, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'phone', title: '手机号码', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'email', title: '邮箱', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'zone', title: '地址', width: 280, titleAlign: 'center', columnAlign: 'center', isResize: true}
        ]
      }
    },
    created() {
      //在created函数中使用axios的get请求向后台获取用户信息数据 配置api为http://localhost:8083/解决跨域请求
      this.$ajax('/api/findAll').then(res => {
        this.tableData = res.data
        console.info(res.data);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
</script>

<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    font-weight: bold;
    text-align: center;
    color: #49ffcc;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }

  .layout-footer-center {
    text-align: center;
  }
</style>
