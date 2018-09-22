import * as React from 'react'

interface Props {
  sidebarHidden: boolean
}

const Sidebar: React.SFC<Props> = ({ sidebarHidden }) =>
  (
    <nav className="sidebar" style={{
      width: sidebarHidden ? 0 : '25%',
      transition: 'width .3s'
    }}>
      <h3>Sidebar</h3>
    </nav>
  )

export default Sidebar