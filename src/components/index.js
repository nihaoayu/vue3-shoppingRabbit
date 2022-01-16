import Skeleton from './Skeleton/index.vue'
import Slider from './Slider/index.vue'
import More from './More/index.vue'
import Bread from './Bread/index.vue'
import BreadItem from './Bread/item.vue'
import City from './City/index'
import Sku from './Sku/index'
import Numbox from './Numbox/index'
import Button from './Button/index'
import CheckBox from './CheckBox/index.vue'
const cps = [Skeleton, CheckBox, Button, Numbox, Slider, More, Bread, BreadItem, City, Sku]
export default {
  install (app) {
    cps.forEach(item => {
      app.component(item.name, item)
    })
  }
}
