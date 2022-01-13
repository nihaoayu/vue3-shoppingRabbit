import request from '@/utils/request'

// 获取导航数据
export const findGateGoryList = () => {
  return request('/home/category/head', 'get')
}
