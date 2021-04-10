'use strict'

/**
 * 判断类型
 * @param {unknown} val: 需要获取类型的变量
 * @return {string} 变量的类型
 */
// eslint-disable-next-line no-undef
export const getTypeof = (val: unknown): string => Object.prototype.toString.call(val).slice(8, -1)

/**
 * 在数字或字符串前面补零
 * @param {number | string} num: 需要补零的数字
 * @param {number} len：需要补几个零
 * @return {string} 补零后的字符串
 */
export const appendZero = (num: number | string, len: number = 1): string => {
	if(!num) return '0'
	return `${'0'.repeat(len)}${num}`
}

/**
 * 判断是否小于10，是则前面补个0
 * @param {number | string} num: 需要格式化的数字
 * @return {string} 格式后的字符串
 */
export const isLargeThanTen = (num: number | string): string => {
	if(!num) return '0'
	return appendZero(num)
}

/**
 * 隐藏手机号码，中间以 * 代替
 * @param {string | number} phone 手机号
 * @return {string} 格式化后的手机号
 */
export const hidePhone = (phone: string | number): string =>{
	if(!phone) return '--'
	return phone.toString().replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}

/**
 * * 时间戳转化为年 月 日 时 分 秒
 * * formatTime(time, 'Y-M-D h:m:s') => 2020-03-03 03:03:03
 * @param {string | number| Date} time: 传入的时间戳
 * @param {string} format：返回格式，支持自定义，可选值 ['Y', 'M', 'D', 'h', 'm', 's']
 * @return {string} 格式化后的时间
 */
export const formatTime =(time: string | number | Date, format: string = 'Y-M-D'): string =>  {
	const date = new Date(+time)
	// 判断 Invalid Date
	if (Number.isNaN(+date)) return '--'

	const formatOption = ['Y', 'M', 'D', 'h', 'm', 's']
	const dateArray = [
		date.getFullYear(),
		date.getMonth() + 1,
		date.getDate(),
		date.getHours(),
		date.getMinutes(),
		date.getSeconds()
	].map(isLargeThanTen)

	let formatResult = format
	dateArray.forEach((v, i) => {
		formatResult = formatResult.replace(formatOption[i], v)
	})

	return formatResult
}
