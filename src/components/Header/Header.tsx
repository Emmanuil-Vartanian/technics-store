import React from 'react'

import Bottom from './containers/Bottom'
import Top from './containers/Top'

const Header: React.FC = () => {
  return (
    <div>
      <Top />
      <Bottom />
    </div>
  )
}

export default Header
