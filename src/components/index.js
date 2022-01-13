import Skeleton from './Skeleton/index.vue'
import Slider from './Slider/index.vue'
const cps = [Skeleton, Slider]
export default {
  install (app) {
    cps.forEach(item => {
      app.component(item.name, item)
    })
  }
}
