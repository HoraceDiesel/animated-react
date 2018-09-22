import * as React from 'react'

interface Props {
  hidden: boolean
  onPress: () => void
}

const FloatingButton: React.SFC<Props> = ({ hidden, onPress }) => (
  <div className="floating-button" onClick={onPress}>
    {hidden ? '>' : '<'}
  </div>
)
export default FloatingButton