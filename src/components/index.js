import Skeleton from './Skeleton/index.vue'
import Slider from './Slider/index.vue'
import More from './More/index.vue'
const cps = [Skeleton, Slider, More]
export default {
  install (app) {
    cps.forEach(item => {
      app.component(item.name, item)
    })
  }
}
