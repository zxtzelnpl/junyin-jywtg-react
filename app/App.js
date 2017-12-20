import React from 'react'
import {Route,Redirect,Link} from 'react-router-dom'
import DiskRead from './containers/DiskRead'
import NewsInformation from './containers/NewsInformation'
import NewsInformationDetail from './containers/NewsInformationDetail'
import TeacherReport from './containers/TeacherReport'
import TeacherReportDetail from './containers/TeacherReportDetail'
import User from './containers/User'
import Login from './components/Login'
import Main from './subpages/Main'
import Footer from './components/Footer'
// import Test from './subpages/Test'

import './static/css/app.less'

const App = ()=>{
  return(
      <div className="container">
        <Route exact path="/" render={()=>(<Redirect to="/Login"/>)}/>
        <Route path="/Main" component={Main}/>
        <Route path="/DiskRead" component={DiskRead}/>
        <Route path="/NewsInformation" component={NewsInformation}/>
        <Route path="/NewsInformationDetail/:id" component={NewsInformationDetail}/>
        <Route path="/TeacherReport" component={TeacherReport}/>
        <Route path="/TeacherReportDetail/:id" component={TeacherReportDetail}/>
        <Route path="/User" component={User}/>
        <Route path="/Login" component={Login}/>
        <Footer />
      </div>
  )
}

export default App