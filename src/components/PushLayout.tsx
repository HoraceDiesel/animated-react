import * as React from 'react'

import BlockContainer from './BlockContainer'
import Sidebar from './Sidebar'
import sectionData from '../sectionData'

interface ComponentState {
  sidebarHidden: boolean
}

class Layout extends React.Component<{}, ComponentState> {

  constructor() {
    super({})
    this.state = {
      sidebarHidden: false
    }
  }

  handleFloatingButtonPress = () => this.setState({ sidebarHidden: !this.state.sidebarHidden })

  render() {
    const { sidebarHidden } = this.state
    return (
      <div className="container-push-layout">
        <Sidebar sidebarHidden={sidebarHidden} />
        <BlockContainer
          blocks={sectionData}
          sidebarHidden={sidebarHidden}
          handleFloatingButtonPress={this.handleFloatingButtonPress}
        />
      </div>
    )
  }
}

export default Layout