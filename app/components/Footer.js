import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import {public_resource} from "../constants/urls";
import './Footer.less'

class Footer extends React.Component{
  render(){
    let pathname = this.props.location.pathname.slice(1);
    let footer_main_png,footer_main_color,footer_user_png,footer_user_color;
    if(pathname === 'Main'){
      footer_main_png = `${public_resource}/footer_main_active.png`
      footer_main_color="red"
    }
    else{
      footer_main_png = `${public_resource}/footer_main.png`
      footer_main_color="black"
    }

    if(pathname === 'Center'){
      footer_user_png = `${public_resource}/footer_user_active.png`
      footer_user_color="red"
    }
    else{
      footer_user_png = `${public_resource}/footer_user.png`
      footer_user_color="black"
    }
    return (
        <footer>
          <Link to="/Main">
            <div>
              <img src={footer_main_png} alt=""/>
              <span style={{"color":footer_main_color}}>技术干货</span>
            </div>
          </Link>
          <Link to="/Center">
            <div>
              <img src={footer_user_png} alt=""/>
              <span style={{"color":footer_user_color}}>个人中心</span>
            </div>
          </Link>
        </footer>
    )
  }
}

export default withRouter(Footer)