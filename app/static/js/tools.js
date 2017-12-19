/**
 * 返回UNIX时间戳，以秒为单位，int类型
 * @returns {number}
 */
export function getTimeStamp(){
  return Math.ceil(new Date().getTime()/1000)
}