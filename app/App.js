import React from 'react'
import {Route,Redirect,Link} from 'react-router-dom'
import DiskRead from './containers/DiskRead'
import NewsInformation from './containers/NewsInformation'
import NewsInformationDetail from './containers/NewsInformationDetail'
import TeacherReport from './containers/TeacherReport'
import TeacherReportDetail from './containers/TeacherReportDetail'
import User from './containers/User'
import Login from './containers/Login'
import Center from './containers/Center'
import Main from './subpages/Main'
import NewsPage from './subpages/NewsPage'
import Footer from './containers/Footer'
import ProductGameMaster from './containers/ProductGameMaster'
import ProductGameMasterList from './containers/ProductGameMasterList'
// import Test from './subpages/Test'

import './static/css/app.less'

const App = ()=>{
  return(
      <div className="container">
        <Route exact path="/" render={()=>(<Redirect to="/Center"/>)}/>
        <Route path="/Main" component={Main}/>
        <Route path="/NewsPage/:mark" component={NewsPage}/>
        <Route path="/DiskRead" component={DiskRead}/>
        <Route path="/NewsInformation" component={NewsInformation}/>
        <Route path="/NewsInformationDetail/:id" component={NewsInformationDetail}/>
        <Route path="/TeacherReport" component={TeacherReport}/>
        <Route path="/TeacherReportDetail/:id" component={TeacherReportDetail}/>
        <Route path="/User" component={User}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Center" component={Center}/>
        <Route path="/ProductGameMaster" component={ProductGameMaster}/>
        <Route path="/ProductGameMasterList" component={ProductGameMasterList}/>
        <Route path="/ProductGameMasterList" component={ProductGameMasterList}/>
        <Footer />
      </div>
  )
}

export default App