import React from 'react'
import {Link} from 'react-router-dom'
import {public_resource} from "../constants/urls";
import './Footer.less'
import moment from "moment/moment";

import main from '../static/img/footer/main.png'
import main_a from '../static/img/footer/main_a.png'
import disk from '../static/img/footer/disk.png'
import disk_a from '../static/img/footer/disk_a.png'
import news from '../static/img/footer/news.png'
import news_a from '../static/img/footer/news_a.png'
import product from '../static/img/footer/product.png'
import product_a from '../static/img/footer/product_a.png'
import video from '../static/img/footer/video.png'
import video_a from '../static/img/footer/video_a.png'

const color_red = '#fc0404'
const color_gray = '#8d8d8d'

class Footer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.img = {
      main: main,
      main_a: main_a,
      disk: disk,
      disk_a: disk_a,
      news: news,
      news_a: news_a,
      product: product,
      product_a: product_a,
      video: video,
      video_a: video_a,
      right_fix: `${public_resource}/right_fix.png`
    }
  }


  componentDidMount() {
    this.checkLogin()
  }

  componentDidUpdate() {
    window.scrollTo(0, 0)
    this.checkLogin()
  }

  checkLogin() {
    let pathname = this.props.location.pathname.slice(1);
    let {check, receivedAt} = this.props.user
    if (!check && pathname !== 'Center') {
      alert('需要登录后方可观看')
      return this.props.history.replace('/Center')
    }
    else if (moment().isAfter(moment.unix(receivedAt).add(7, 'days')) && pathname !== 'Center') {
      alert('登录信息已经失效')
      return this.props.history.replace('/Center')
    }
    else {

    }
  }

  render() {
    let pathname = this.props.location.pathname.slice(1);
    let footer_main_png, footer_main_color,
        footer_user_png, footer_user_color,
        footer_disk_png, footer_disk_color,
        footer_news_png, footer_news_color,
        footer_product_png, footer_product_color,
        right_fix_display
    ;

    let {check, receivedAt} = this.props.user
    if (!check || moment().isAfter(moment.unix(receivedAt).add(7, 'days'))) {
      return (<div/>)
    }

    if (pathname === 'Main') {
      footer_main_png = this.img.main_a
      footer_main_color = color_red
    }
    else {
      footer_main_png = this.img.main
      footer_main_color = color_gray
    }

    if (pathname === 'VideosPage') {
      footer_user_png = this.img.video_a
      footer_user_color = color_red
    }
    else {
      footer_user_png = this.img.video
      footer_user_color = color_gray
    }

    if (pathname === 'DiskRead') {
      footer_disk_png = this.img.disk_a
      footer_disk_color = color_red
    }
    else {
      footer_disk_png = this.img.disk
      footer_disk_color = color_gray
    }

    if (pathname === 'NewsPage') {
      footer_news_png = this.img.news_a
      footer_news_color = color_red
    }
    else {
      footer_news_png = this.img.news
      footer_news_color = color_gray
    }

    if (pathname === 'ProductGameMaster') {
      footer_product_png = this.img.product_a
      footer_product_color = color_red
    }
    else {
      footer_product_png = this.img.product
      footer_product_color = color_gray
    }

    if (pathname === "Center") {
      right_fix_display = {"display": "none"}
    }

    return (
        <div>
          <footer>
            <Link to="/Main">
              <img src={footer_main_png} alt=""/>
              <span style={{"color": footer_main_color}}>首页</span>
            </Link>
            <Link to="/DiskRead">
              <img src={footer_disk_png} alt=""/>
              <span style={{"color": footer_disk_color}}>解盘</span>
            </Link>
            <Link to="/ProductGameMaster">
              <img src={footer_product_png} alt=""/>
              <span style={{"color": footer_product_color}}>微投顾</span>
            </Link>
            <Link to="/VideosPage">
              <img src={footer_user_png} alt=""/>
              <span style={{"color": footer_user_color}}>视频</span>
            </Link>
            <Link to="/NewsPage">
              <img src={footer_news_png} alt=""/>
              <span style={{"color": footer_news_color}}>资讯</span>
            </Link>
          </footer>

          <div className="right_fix" style={right_fix_display}>
            <Link to="/Center">
              <img src={this.img.right_fix} alt=""/>
            </Link>
          </div>
        </div>
    )
  }
}

export default Footer