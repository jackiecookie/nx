import React, { Fragment } from 'react'
import { Can } from '../../casl/ability-context'

interface Props {
  address: React.ReactNode
}

export default class Layout extends React.Component<Props> {
  render() {
    return (
      <Fragment>
        <Can I="read">{this.props.address}</Can>
      </Fragment>
    )
  }
}
