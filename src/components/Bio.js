import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(5 / 4),
        }}
      >
       <img
          src={profilePic}
          alt={`Magnus Lindberg`}
          style={{
            float: 'left',
            marginRight: rhythm(1 / 4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        Written by me, <strong>Magnus Lindberg</strong>. I live in Stockholm / Europe / nearby.
        Email: kajmagnus3 at gmail dot com, Twitter:{' '}
        <a href="https://twitter.com/kajmagnus3">@kajmagnus3</a>.
      </p>
    )
  }
}

export default Bio
