import React from 'react'
import moment from 'moment'
import fetchJsonp from 'fetch-jsonp'

export default class Main extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){

  }

  updateDates(){
    this.removeScript()
    let body = document.body
    let script = document.createElement('script')
    script.onload=()=>{
      console.log(hq_str_s_sh000001)
      console.log(hq_str_s_sz399001)
      console.log(hq_str_s_sz399006)
    }
    body.appendChild(script)
    script.src="http://hq.sinajs.cn/list=s_sh000001,s_sz399001,s_sz399006"
    script.id='getDate'
  }

  removeScript(){
    let body = document.body
    let script = document.getElementById('getDate')
    if(script !== null){
      body.removeChild(script)
    }
  }

  render(){
    return (

        <div>
          <div>
            <button onClick={this.updateDates.bind(this)}>add</button>
            <button onClick={this.removeScript.bind(this)}>remove</button>
          </div>
        </div>
    )
  }
}