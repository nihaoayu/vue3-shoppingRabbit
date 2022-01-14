import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
export const useObserver = (getFn) => {
  const target = ref(null)
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        getFn()
        stop()
      }
    },
    {
      // 加快数据请求的速度
      threshold: 0
    }
  )
  return { target }
}
