import request from '@/utils/request'

/**
 * 获取下单信息
 */
export const findCheckoutInfo = () => {
  return request('/member/order/pre', 'get')
}
