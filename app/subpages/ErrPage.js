'use strict'
import './ErrPage.less'
import React from 'react'

export default class ErrPage extends React.PureComponent{
  render(){
    return (
      <div className="ErrPage">
        <div className="innerWrap">
          <h1>哎呀</h1>
          <h2>出错啦！</h2>
          <article>
            <p>可能原因：</p>
            <p>
            {this.props.err.message}
            </p>
            <p>
              {this.props.err.stack?this.props.err.stack:''}
            </p>
          </article>
        </div>
      </div>
    )
  }
}