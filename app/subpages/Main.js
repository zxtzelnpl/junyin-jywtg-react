import React from 'react'
import './Main.less'
import {public_resource} from "../constants/urls"
// StockIndex可能会有溢出
import StockIndex from '../components/StockIndex'
import DiskReadBrief from '../containers/DiskReadBrief'
import NewsInformationBreif from '../containers/NewsInformationBreif'
import TeacherReportBreif from '../containers/TeacherReportBreif'

export default class Main extends React.Component{
  constructor(props){
    super(props)
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
          <DiskReadBrief />
          <div className="blank_20" />
          <NewsInformationBreif />
          <div className="blank_20" />
          <TeacherReportBreif />
        </div>
    )
  }
}