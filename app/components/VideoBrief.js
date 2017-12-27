import './VideoBrief.less'
import React from 'react'
import {Link} from 'react-router-dom'
import {public_resource} from "../constants/urls";
import moment from "moment/moment";

export default class VideoBrief extends React.Component {
  constructor(props) {
    super(props)
    this.img = {
      pmdj: `${public_resource}/pmdj.png`,
      pmdj_sm: `${public_resource}/pmdj_sm.png`,
      ydfp: `${public_resource}/ydfp.png`,
      ydfp_sm: `${public_resource}/ydfp_sm.png`,
      yxzzd: `${public_resource}/yxzzd.png`,
      yxzzd_sm: `${public_resource}/yxzzd_sm.png`,
      title: `${public_resource}/exchangeGuide.jpg`,
      detail: `${public_resource}/detail.jpg`

    }
  }

  componentDidMount() {

  }

  render() {
    let {title, detail, pmdj, pmdj_sm, ydfp, ydfp_sm, yxzzd, yxzzd_sm} = this.img
    let mark
    let {hours, minutes} = moment().toObject()
    if (hours === 10 && minutes <= 30) {
      mark = 'pmdj'
    }
    if (hours === 12 && minutes <= 30) {
      mark = 'ydfp'
    }
    if (hours === 15 && minutes <= 30) {
      mark = 'yxzzd'
    }


    return (
        <div className="VideoBrief">
          <p className="title">
            <span><img src={title}/>君银直播</span>
            <Link to="/Video"><img src={detail} alt=""/></Link>
          </p>
          <div className="wrap">
            <ul>
              <li className={mark==='pmdj'?'big':''}>
                <img src={mark==='pmdj'?pmdj:pmdj_sm}/>
                <p>10:00<span>-</span>10:30</p>
              </li>
              <li className={mark==='ydfp'?'big':''}>
                <img src={mark==='pmdj'?ydfp:ydfp_sm}/>
                <p>14:00<span>-</span>14:30</p>
              </li>
              <li className={mark==='yxzzd'?'big':''}>
                <img src={mark==='pmdj'?yxzzd:yxzzd_sm}/>
                <p>15:00<span>-</span>15:30</p>
              </li>
            </ul>
          </div>
        </div>
    )

  }
}