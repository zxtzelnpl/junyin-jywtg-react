import React from 'react'
import {Link} from 'react-router-dom'
import {public_resource} from "../constants/urls";
import './Footer.less'
import moment from "moment/moment";

class Footer extends React.Component {
  componentDidMount(){
    this.checkLogin()
  }

  componentDidUpdate(){
    this.checkLogin()
    window.scrollTo(0,0)
  }

  checkLogin(){
    let pathname = this.props.location.pathname.slice(1);
    let {check,receivedAt} = this.props.user
    if(!check&&pathname !== 'Center'){
      alert('需要登录后方可观看')
      return this.props.history.replace('/Center')
    }
    if(moment().isAfter(moment.unix(receivedAt).add(1,'days'))&&pathname !== 'Center'){
      alert('登录信息已经失效')
      return this.props.history.replace('/Center')
    }
  }

  render() {
    let pathname = this.props.location.pathname.slice(1);
    let footer_main_png, footer_main_color,
        footer_user_png, footer_user_color,
        footer_disk_png, footer_disk_color,
        footer_news_png, footer_news_color,
        footer_product_png, footer_product_color;
    if (pathname === 'Main') {
      footer_main_png = `${public_resource}/footer/main_a.png`
      footer_main_color = "red"
    }
    else {
      footer_main_png = `${public_resource}/footer/main.png`
      footer_main_color = "black"
    }

    if (pathname === 'Center') {
      footer_user_png = `${public_resource}/footer/user_a.png`
      footer_user_color = "red"
    }
    else {
      footer_user_png = `${public_resource}/footer/user.png`
      footer_user_color = "black"
    }

    if (pathname === 'DiskRead') {
      footer_disk_png = `${public_resource}/footer/disk_a.png`
      footer_disk_color = "red"
    }
    else {
      footer_disk_png = `${public_resource}/footer/disk.png`
      footer_disk_color = "black"
    }

    if (pathname.indexOf('NewsPage')>-1) {
      footer_news_png = `${public_resource}/footer/news_a.png`
      footer_news_color = "red"
    }
    else {
      footer_news_png = `${public_resource}/footer/news.png`
      footer_news_color = "black"
    }

    if (pathname === 'ProductGameMaster') {
      footer_product_png = `${public_resource}/footer/product_a.png`
      footer_product_color = "red"
    }
    else {
      footer_product_png = `${public_resource}/footer/product.png`
      footer_product_color = "black"
    }

    return (
        this.props.button.write ?
            <div/> :
            <footer>
              <Link to="/Main">
                <div>
                  <img src={footer_main_png} alt=""/>
                  <span style={{"color": footer_main_color}}>首页</span>
                </div>
              </Link>
              <Link to="/DiskRead">
                <div>
                  <img src={footer_disk_png} alt=""/>
                  <span style={{"color": footer_disk_color}}>解盘</span>
                </div>
              </Link>
              <Link to="/ProductGameMaster">
                <div>
                  <img src={footer_product_png} alt=""/>
                  <span style={{"color": footer_product_color}}>微投顾</span>
                </div>
              </Link>
              <Link to="/NewsPage/news">
                <div>
                  <img src={footer_news_png} alt=""/>
                  <span style={{"color": footer_news_color}}>资讯</span>
                </div>
              </Link>
              <Link to="/Center">
                <div>
                  <img src={footer_user_png} alt=""/>
                  <span style={{"color": footer_user_color}}>我的</span>
                </div>
              </Link>
            </footer>
    )
  }
}

export default Footer