import React from 'react'
import './Main.less'
import {public_resource} from "../constants/urls"
// StockIndex可能会有溢出
import StockIndex from '../components/StockIndex'
import DiskReadBrief from '../containers/DiskReadBrief'
import NewsInformationBreif from '../containers/NewsInformationBreif'
import TeacherReportBreif from '../containers/TeacherReportBreif'
import ProductGameMasterBrief from '../containers/ProductGameMasterBrief'
import VideoBrief from '../VideosPage/VideoBrief'  //直接木偶组件
import SpecialClassBrief from '../containers/SpecialClassBrief'

export default class Main extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    // let {check,receivedAt} = this.props.user
    // if(!check){
    //   alert('需要注册后方可观看')
    //   return this.props.history.replace('/Center')
    // }
    // if(moment().isAfter(moment.unix(receivedAt).add(1,'days'))){
    //   alert('登录信息已经失效')
    //   return this.props.history.replace('/Center')
    // }
  }

  render(){
    let banner = `${public_resource}/banner.jpg`
    return(
        <div className="main">
          <div className="banner">
            <img src={banner} alt=""/>
          </div>
          <StockIndex />
          <div className="blank_20" />
          <VideoBrief />
          <div className="blank_20" />
          <DiskReadBrief />
          <div className="blank_20" />
          <ProductGameMasterBrief />
          <div className="blank_20" />
          <NewsInformationBreif />
          <div className="blank_20" />
          <TeacherReportBreif />
          <div className="blank_20" />
          <SpecialClassBrief />
        </div>
    )
  }
}