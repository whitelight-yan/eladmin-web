<template>
  <el-dialog :append-to-body="true" :close-on-click-modal="false" :before-close="cancel" :visible.sync="dialog" :title="operate" width="500px">
    <el-form ref="form" :model="form" :rules="rules" size="small" label-width="80px" :disabled="operate==='详情'">
      <el-form-item label="功能标识符"  prop="functionId">
        <el-input v-model="form.functionId" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="脚本标识符"  prop="scriptId">
        <el-input v-model="form.scriptId" style="width: 370px;"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="text" @click="cancel">取消</el-button>
      <el-button v-if="operate!=='详情'" :loading="loading" type="primary" @click="doSubmit">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { add, edit } from '@/api/functionScript'
export default {
  props: {
    operate: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: false, dialog: false,
      form: {
        id: '',
        functionId: '',
        scriptId: ''
      },
      rules: {
      }
    }
  },
  methods: {
    cancel() {
      this.resetForm()
    },
    doSubmit() {
      this.$refs.form.validate((vaild)=>{
          if(vaild) {
            this.loading = true
            if (this.operate ==='新增') {
              this.doAdd();
            } else if(this.operate ==='修改'){
              this.doEdit();
            }
          }
        })

    },
    doAdd() {
      add(this.form).then(res => {
        this.resetForm()
        this.$notify({
          title: '添加成功',
          type: 'success',
          duration: 2500
        })
        this.loading = false
        this.$parent.init()
      }).catch(err => {
        this.loading = false
        console.log(err.response.data.message)
      })
    },
    doEdit() {
      edit(this.form).then(res => {
        this.resetForm()
        this.$notify({
          title: '修改成功',
          type: 'success',
          duration: 2500
        })
        this.loading = false
        this.$parent.init()
      }).catch(err => {
        this.loading = false
        console.log(err.response.data.message)
      })
    },
    resetForm() {
      this.dialog = false
      this.$refs['form'].resetFields()
      this.form = {
        id: '',
        functionId: '',
        scriptId: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
