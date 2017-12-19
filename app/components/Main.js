import React from 'react'
import moment from 'moment'
import fetchJsonp from 'fetch-jsonp'

export default class Main extends React.Component{
  constructor(props){
    super(props)
    this.state={
      hq_str_s_sh000001:'',
      hq_str_s_sz399001:'',
      hq_str_s_sz399006:''
    }
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
            Main
          </div>
        </div>
    )
  }
}