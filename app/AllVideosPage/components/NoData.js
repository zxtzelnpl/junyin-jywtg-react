import './NoData.less'
import React from 'react';

export default function NoData({loading}){

  let msg;

  if(loading){
    msg = '正在加载视频'
  }else{
    msg = '最近没有上传相关视频'
  }

  return (
    <div className="videosNoData">{msg}</div>
  )
}