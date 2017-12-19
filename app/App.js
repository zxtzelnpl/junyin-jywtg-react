import React from 'react'
import {Route,Redirect,Link} from 'react-router-dom'
import DiskRead from './containers/DiskRead'
import NewsInformation from './containers/NewsInformation'
import NewsInformationDetail from './containers/NewsInformationDetail'
import TeacherReport from './containers/TeacherReport'
import TeacherReportDetail from './containers/TeacherReportDetail'
import User from './containers/User'

import './static/css/app.less'

const App = ()=>{
  return(
      <div className="container">
        <div style={{position:'fixed',display:'flex',flexDirection:'column',bottom:0}}>
          <Link to="DiskRead">DiskRead</Link>
          <Link to="NewsInformation">NewsInformation</Link>
          <Link to="NewsInformationDetail">NewsInformationDetail</Link>
          <Link to="TeacherReport">TeacherReport</Link>
          <Link to="TeacherReportDetail">TeacherReportDetail</Link>
          <Link to="User">User</Link>
        </div>
        <Route exact path="/" render={()=>(<Redirect to="/DiskRead"/>)}/>
        <Route path="/DiskRead" component={DiskRead}/>
        <Route path="/NewsInformation" component={NewsInformation}/>
        <Route path="/NewsInformationDetail" component={NewsInformationDetail}/>
        <Route path="/TeacherReport" component={TeacherReport}/>
        <Route path="/TeacherReportDetail" component={TeacherReportDetail}/>
        <Route path="/User" component={User}/>
      </div>
  )
}

export default App