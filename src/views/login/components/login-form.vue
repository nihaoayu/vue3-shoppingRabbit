<template>
  <div class="account-box">
    <Form ref="fm" class="form" :validation-schema="rules" v-slot="{ errors }">
      <!-- <p>{{ errors }}</p> -->
      <div class="form-item">
        <div class="input">
          <i class="iconfont icon-user"></i>
          <Field
            type="text"
            v-model="form.account"
            name="account"
            placeholder="请输入用户名或手机号"
            :class="{ error: errors.account }"
          />
        </div>
        <!-- 表单验证错误信息提示 -->
        <div class="error" v-if="errors.account">
          <i class="iconfont icon-warning" />{{ errors.account }}
        </div>
      </div>
      <div class="form-item">
        <div class="input">
          <i class="iconfont icon-lock"></i>
          <Field
            v-model="form.password"
            name="password"
            type="password"
            placeholder="请输入密码"
            :class="{ error: errors.password }"
          />
        </div>
        <!-- 表单验证错误信息提示 -->
        <div class="error" v-if="errors.password">
          <i class="iconfont icon-warning" />{{ errors.password }}
        </div>
      </div>
      <div class="form-item">
        <div class="agree">
          <Field as="XtxCheckBox" v-model="form.isAgree" name="isAgree">
            <span>我已同意</span>
          </Field>
          <!-- <XtxCheckBox /> -->
          <a href="javascript:;">《隐私条款》</a>
          <span>和</span>
          <a href="javascript:;">《服务条款》</a>
        </div>
        <!-- 表单验证错误信息提示 -->
        <div class="error" v-if="errors.isAgree">
          <i class="iconfont icon-warning" />{{ errors.isAgree }}
        </div>
      </div>
      <a href="javascript:;" class="btn" @click="login">登录</a>
    </Form>
    <div class="action">
      <img
        src="https://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_7.png"
        alt=""
      />
      <div class="url">
        <a href="javascript:;">忘记密码</a>
        <a href="javascript:;">免费注册</a>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, Field } from 'vee-validate'
import { ref } from 'vue'
import validate from '@/utils/validate'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import msg from '@/components/Message/index'
export default {
  name: 'XtxLoginForm',
  components: {
    Form,
    Field
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const form = ref({
      account: '',
      password: '',
      isAgree: false
    })
    const rules = {
      account: validate.account,
      password: validate.password,
      isAgree: validate.isAgree
    }
    const fm = ref()
    const login = async () => {
      const { valid } = await fm.value.validate()
      if (valid) {
        try {
          await store.dispatch('user/updateProfile', form.value)
          msg({ type: 'success', text: '登陆成功' })
          store.dispatch('cart/margeCartAction')
          router.push(route.query.redirectUrl || '/')
          store.dispatch('cart/getCartAction')
        } catch (error) {
          // console.dir(error.response.data.message)
          msg({ type: 'error', text: error.response.data.message })
        }
      }
    }
    return { form, rules, login, fm }
  }
}
</script>
<style lang="less" scoped>
// 账号容器
.account-box {
  .toggle {
    padding: 15px 40px;
    text-align: right;
    a {
      color: @xtxColor;
      i {
        font-size: 14px;
      }
    }
  }
  .form {
    padding: 0 20px;
    &-item {
      margin-bottom: 28px;
      .input {
        position: relative;
        height: 36px;
        > i {
          width: 34px;
          height: 34px;
          background: #cfcdcd;
          color: #fff;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 18px;
        }
        input {
          padding-left: 44px;
          border: 1px solid #cfcdcd;
          height: 36px;
          line-height: 36px;
          width: 100%;
          &.error {
            border-color: @priceColor;
          }
          &.active,
          &:focus {
            border-color: @xtxColor;
          }
        }
        .code {
          position: absolute;
          right: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
          background: #f5f5f5;
          color: #666;
          width: 90px;
          height: 34px;
          cursor: pointer;
        }
      }
      > .error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: @priceColor;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }
    .agree {
      a {
        color: #069;
      }
    }
    .btn {
      display: block;
      width: 100%;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background: @xtxColor;
      &.disabled {
        background: #cfcdcd;
      }
    }
  }
  .action {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .url {
      a {
        color: #999;
        margin-left: 10px;
      }
    }
  }
}
</style>
