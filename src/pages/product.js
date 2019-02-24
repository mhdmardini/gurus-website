import React from 'react'
import Layout from '../components/layout'

class product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <Layout location={this.props.location}>
      <div>product</div>
      </Layout>
    )
  }
}

export default product
