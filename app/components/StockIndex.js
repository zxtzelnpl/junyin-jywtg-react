import React from 'react'
import './StockIndex.less'


class StockIndexItem extends React.Component {
  render() {
    let arr = this.props.str.split(',')
    let name = arr[0]
    let total = arr[1]
    let change = arr[2]
    let persent = arr[3]
    let color = change.indexOf('-')>-1?'green':'red'
    let mark = change.indexOf('-')>-1?'':'+'

    return (
        <div className="stockIndexItem" style={{'color':color}}>
          <p>{name}</p>
          <p>{total}</p>
          <p><span>{mark}{change}</span><span>{mark}{persent}%</span></p>
        </div>
    )
  }
}

export default class StockIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hq_str_s_sh000001: hq_str_s_sh000001,
      hq_str_s_sz399001: hq_str_s_sz399001,
      hq_str_s_sz399006: hq_str_s_sz399006
    }
  }

  componentDidMount() {
    this.updating = setInterval(this.updateDates.bind(this), 5000)
  }

  componentWillUnmount() {
    clearInterval(this.updating)
  }

  updateDates() {
    this.removeScript()
    let body = document.body
    let script = document.createElement('script')
    script.onload = () => {
      this.setState({
        hq_str_s_sh000001: hq_str_s_sh000001,
        hq_str_s_sz399001: hq_str_s_sz399001,
        hq_str_s_sz399006: hq_str_s_sz399006
      })
    }
    body.appendChild(script)
    script.src = "http://hq.sinajs.cn/list=s_sh000001,s_sz399001,s_sz399006"
    script.id = 'getDate'
  }

  removeScript() {
    let body = document.body
    let script = document.getElementById('getDate')
    if (script !== null) {
      body.removeChild(script)
    }
  }

  render() {
    return (
        <div className="stockIndex">
          <StockIndexItem str={this.state.hq_str_s_sh000001}/>
          <div className="line" />
          <StockIndexItem str={this.state.hq_str_s_sz399001}/>
          <div className="line" />
          <StockIndexItem str={this.state.hq_str_s_sz399006}/>
        </div>
    )
  }
}