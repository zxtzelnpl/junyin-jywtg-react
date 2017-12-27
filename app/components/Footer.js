import React from 'react'
import {Link} from 'react-router-dom'
import {public_resource} from "../constants/urls";
import './Footer.less'
import moment from "moment/moment";

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.img = {
      main: `${public_resource}/footer/main.png`,
      main_a: `${public_resource}/footer/main_a.png`,
      disk: `${public_resource}/footer/disk.png`,
      disk_a: `${public_resource}/footer/disk_a.png`,
      news: `${public_resource}/footer/news.png`,
      news_a: `${public_resource}/footer/news_a.png`,
      product: `${public_resource}/footer/product.png`,
      product_a: `${public_resource}/footer/product_a.png`,
      video: `${public_resource}/footer/video.png`,
      video_a: `${public_resource}/footer/video_a.png`,
      right_fix: `${public_resource}/right_fix.png`
    }
  }


  componentDidMount() {
    this.checkLogin()
  }

  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  checkLogin() {
    let pathname = this.props.location.pathname.slice(1);
    let {check, receivedAt} = this.props.user
    if (!check && pathname !== 'Center') {
      alert('需要登录后方可观看')
      return this.props.history.replace('/Center')
    }
    else if (moment().isAfter(moment.unix(receivedAt).add(1, 'days')) && pathname !== 'Center') {
      alert('登录信息已经失效')
      return this.props.history.replace('/Center')
    }
    else{

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
    if(!check||moment().isAfter(moment.unix(receivedAt).add(1, 'days'))){
      return (<div />)
    }

    if (pathname === 'Main') {
      footer_main_png = this.img.main_a
      footer_main_color = "red"
    }
    else {
      footer_main_png = this.img.main
      footer_main_color = "black"
    }

    if (pathname === 'Video') {
      footer_user_png = this.img.video_a
      footer_user_color = "red"
    }
    else {
      footer_user_png = this.img.video
      footer_user_color = "black"
    }

    if (pathname === 'DiskRead') {
      footer_disk_png = this.img.disk_a
      footer_disk_color = "red"
    }
    else {
      footer_disk_png = this.img.disk
      footer_disk_color = "black"
    }

    if (pathname === 'NewsPage') {
      footer_news_png = this.img.news_a
      footer_news_color = "red"
    }
    else {
      footer_news_png = this.img.news
      footer_news_color = "black"
    }

    if (pathname === 'ProductGameMaster') {
      footer_product_png = this.img.product_a
      footer_product_color = "red"
    }
    else {
      footer_product_png = this.img.product
      footer_product_color = "black"
    }

    if (pathname === "Center") {
      right_fix_display = {"display": "none"}
    }

    return (
        <div>
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
            <Link to="/Video">
              <div>
                <img src={footer_user_png} alt=""/>
                <span style={{"color": footer_user_color}}>视频</span>
              </div>
            </Link>
            <Link to="/NewsPage">
              <div>
                <img src={footer_news_png} alt=""/>
                <span style={{"color": footer_news_color}}>资讯</span>
              </div>
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