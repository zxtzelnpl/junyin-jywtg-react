/**
 * 返回UNIX时间戳，以秒为单位，int类型
 * @param date {string}
 * @returns {number}
 */
export function getTimeStamp(date){
  let _date
  if(typeof date === 'undefined'){
    _date = new Date()
  }
  else{
    _date= new Date(date)
  }
  return Math.ceil(_date.getTime()/1000)
}