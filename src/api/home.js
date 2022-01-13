import request from '@/utils/request'

// 获取导航数据
export const findGateGoryList = () => {
  return request('/home/category/head', 'get')
}
/**
 * @description: 获取banner图
 * @param {*}
 * @return {*}
 */
export const findBanner = () => {
  return request('home/banner', 'get')
}
/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNew = () => {
  return request('home/new', 'get')
}
/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const findHot = () => {
  return request('home/hot', 'get')
}
