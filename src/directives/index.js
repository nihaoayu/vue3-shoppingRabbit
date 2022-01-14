import { useIntersectionObserver } from '@vueuse/core'
import defaultImg from '@/assets/images/load.gif'
export default {
  install (app) {
    app.directive('imglazy', {
      mounted (imgDom, binding) {
        const { stop } = useIntersectionObserver(
          imgDom,
          ([{ isIntersecting }]) => {
            if (isIntersecting) {
              imgDom.src = defaultImg
              setTimeout(() => {
                imgDom.src = binding.value
              }, 300)
              imgDom.onerror = () => {
                imgDom.src = defaultImg
              }
              stop()
            }
          },
          {
            // 加快数据请求的速度
            threshold: 0
          }
        )
      }
    })
  }
}
