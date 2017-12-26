import React from 'react'
import {Link} from 'react-router-dom'
import './ProductGameMaster.less'
import {public_resource} from "../constants/urls";
import moment from 'moment'

export default class ProductGameMaster extends React.Component {


  render() {
    let img1 = `${public_resource}/gameMaster/1.jpg`
    let img2 = `${public_resource}/gameMaster/2.jpg`
    let img3 = `${public_resource}/gameMaster/3.jpg`
    let img4 = `${public_resource}/gameMaster/4.jpg`
    let img5 = `${public_resource}/gameMaster/5.jpg`
    let img6 = `${public_resource}/gameMaster/6.jpg`
    let timeDom = <div />
    if(this.props.user.time){
      let time = moment(this.props.user.time)
      let now = moment()
      let leftDays = time.diff(now,'days')
      if(leftDays>0){
        timeDom = <span>（剩余天数：{leftDays}）</span>
      }

    }
    return (
        <div className="ProductGameMaster">
          <div className="wrap_img product_info_wrap">
            <img src={img1} alt=""/>
            <div className="product_info">
              <div className="innerWrap">
                <h4>博弈大师</h4>
                <p className="content">以市场为导向，以技术面分析为核心，辅以宏观、行业以及策略等，形成了一套有效的短线博弈体系。</p>
                <h6>
                  <p><span className="momey">3300</span>元/30天{timeDom}</p>
                </h6>
                <Link to="/ProductGameMasterList">查看产品</Link>
              </div>
            </div>
          </div>
          <div className="wrap_img">
            <img src={img2} alt=""/>
          </div>
          <div className="wrap_img">
            <img src={img3} alt=""/>
          </div>
          <div className="wrap_img">
            <img src={img4} alt=""/>
          </div>
          <div className="wrap_img">
            <img src={img5} alt=""/>
          </div>
          <div className="wrap_img">
            <img src={img6} alt=""/>
          </div>
        </div>
    )
  }
}