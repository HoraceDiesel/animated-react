import * as React from 'react'
import { Component } from 'react'

import Block from './Block'
import FloatingButton from './FloatingButton'
import { BlockModel } from '../model/Block'

interface Props {
  blocks: BlockModel[],
  sidebarHidden: boolean,
  handleFloatingButtonPress: () => void
}

interface ComponentState {
  groupView: boolean,
  currentBlock: string
}

class BlockContainer extends Component<Props, ComponentState> {
  constructor(props: Props) {
    super(props)
    const ids = this.props.blocks.map(block => block.id)
    this.state = {
      groupView: true,
      currentBlock: ''
    }
  }

  handlePress = (id: BlockModel['id']) => this.setState({ groupView: !this.state.groupView, currentBlock: id })

  render() {
    const { handleFloatingButtonPress, sidebarHidden } = this.props
    const { currentBlock, groupView } = this.state
    return (
      <div className="block-container">
        <FloatingButton hidden={sidebarHidden} onPress={handleFloatingButtonPress} />
        {this.props.blocks.map((block, i) => {
          return (<Block
            groupView={groupView}
            currentBlock={currentBlock === block.id}
            key={block.id}
            {...block}
            handlePress={this.handlePress}
          />)
        })}
      </div>
    )
  }
}

export default BlockContainer