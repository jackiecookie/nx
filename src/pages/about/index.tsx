import React from "react"
import axios from "axios"
import Layout from "./layout"
import Address from "./component/address"
import { AbilityContext } from "../../casl/ability-context"
import { AuthFromServer } from "../../casl/type"
import { getAbility } from "../../casl/ability"

interface Props {
  authData: AuthFromServer
}

interface State {
  abilityContext: any
}

const layoutProps = {
  address: <Address />
}

class About extends React.Component<Props, State> {
  static async getInitialProps() {
    const response = await axios.post(
      "http://mock.eolinker.com/td1pdjj6f0d1910c659b334de1e929b431ab8dc2c0e09fc?uri=/Po" +
        "st/Auth"
    )
    const authData: AuthFromServer = response.data
    return {
      authData
    }
  }
  render() {
    const ability = getAbility(this.props.authData)
    return (
      <div>
        <AbilityContext.Provider value={{ ability, auth: "post" }}>
          <Layout {...layoutProps} />
        </AbilityContext.Provider>
      </div>
    )
  }
}
export default About
