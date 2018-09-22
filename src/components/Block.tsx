import * as React from "react"

import { BlockModel } from '../model/Block'

enum Status {
  groupView = 'groupView',
  active = 'active',
  inactive = 'inactive'
}

interface Props {
  color: BlockModel['color']
  currentBlock: boolean
  groupView: boolean
  handlePress: (id: string) => void
  id: BlockModel['id']
}

interface ComponentState {
  status: Status
}

class Block extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    this.state = {
      status: Status.groupView
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState({ status: nextProps.groupView ? Status.groupView : nextProps.currentBlock ? Status.active : Status.inactive })
  }

  statusToFLexMapper = () => {
    switch (this.state.status) {
      case 'groupView':
        return 25
      case 'active':
        return 100
      case 'inactive':
      default:
        return 0
    }
  }

  render() {
    const { id, color, handlePress, groupView } = this.props

    return (
      <div
        className="block"
        style={{
          backgroundColor: color,
          flexGrow: this.statusToFLexMapper(),
          transition: 'all .3s'
        }}
        onClick={() => handlePress(groupView ? id : '')}
      >
        {this.state.status !== 'inactive' && (<h4>Block {id}</h4>)}
        {this.state.status === 'active' && (<p>is active</p>)}
      </div>
    )
  }
}

export default Block