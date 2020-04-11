/*
 * @Description:
 * @Author: tiange
 * @Date: 2020-04-07 17:44:38
 * @LastEditTime: 2020-04-11 15:30:53
 * @LastEditors: tiange
 */
// 补0操作,当时间数据小于10的时候，给该数据前面加一个0
function getzf (num) {
  if (parseInt(num) < 10) {
    num = '0' + num
  }
  return num
}

/**
 *
 *
 * @export
 * @param {*} time 时间戳
 * @returns
 */
export default function getMyDate (time) {
  var oDate = new Date(time)
  var oHour = oDate.getHours()
  var oMin = oDate.getMinutes()
  if (oHour < 9) {
    return `早上好 ${getzf(oHour)}:${getzf(oMin)}`
  } else if (oHour < 12) {
    return `上午好 ${getzf(oHour)}:${getzf(oMin)}`
  } else if (oHour < 14) {
    return `中午好 ${getzf(oHour)}:${getzf(oMin)}`
  } else if (oHour < 17) {
    return `下午好 ${getzf(oHour)}:${getzf(oMin)}`
  } else if (oHour < 19) {
    return `傍晚好 ${getzf(oHour)}:${getzf(oMin)}`
  } else if (oHour < 22) {
    return `晚上好 ${getzf(oHour)}:${getzf(oMin)}`
  }
}
