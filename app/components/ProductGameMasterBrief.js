import React from 'react'
import {Link} from 'react-router-dom'
import './ProductGameMasterBrief.less'
import {public_resource} from "../constants/urls";
import moment from 'moment'

export default class ProductGameMasterBrief extends React.Component {

  componentDidMount(){

  }

  render() {
    let gameMaster_img = `${public_resource}/gameMaster.jpg`
    let timeDom = <div />
    if(this.props.user.time){
      let time = moment(this.props.user.time)
      let now = moment()
      let leftDays = time.diff(now,'days')
      if(leftDays>0){
        timeDom = <span className="leftDays">（剩余天数：{leftDays}）</span>
      }
    }

    return (
        <Link to="/ProductGameMaster">
          <div className="ProductGameMasterBrief">
            <div className="wrap_img">
              <img src={gameMaster_img} alt=""/>
            </div>
            <div className="wrap_info">
              <h4>博弈大师</h4>
              <p>每天1~2只短线金股，炒股可以很简单</p>
              <h6>
                <span className="money">3300</span>元/30天{timeDom}
              </h6>
            </div>
          </div>
        </Link>
    )
  }
}