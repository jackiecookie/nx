import React from 'react'
import Layout from './layout'
import Address from './component/address'
import { AbilityContext } from '../../casl/ability-context'
import ability from '../../casl/ability'

interface Props {
  name: string
  abilityContext: any
}

interface State {
  abilityContext: any
}

const layoutProps = {
  address: <Address />
}

export default class About extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      abilityContext: {
        ability,
        auth: 'Post'
      }
    }
  }
  // static getInitialProps() {   return {     abilityContext: { ability:ability,
  //    auth: 'Post'     }   } }
  render() {
    return (
      <AbilityContext.Provider value={this.state.abilityContext}>
        <Layout {...layoutProps} />
      </AbilityContext.Provider>
    )
  }
}
