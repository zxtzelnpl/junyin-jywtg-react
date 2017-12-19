import React from 'react'
export default class NewsInformationDetail extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log(this.props)
  }

  render(){
    return (
        <div>
          NewsInformationDetail
        </div>
    )
  }
}