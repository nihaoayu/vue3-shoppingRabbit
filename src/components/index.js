import Skeleton from './Skeleton/index.vue'
const cps = [Skeleton]
export default {
  install (app) {
    cps.forEach(item => {
      app.component(item.name, item)
    })
  }
}
