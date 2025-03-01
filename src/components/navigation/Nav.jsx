import React from 'react';

function Navigation({ onRouteChange, isSignnedIn }) {
  if (isSignnedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p onClick={() => onRouteChange('signout')} className='f5 dim white underline pa2 mv3 pointer'>Sign out</p>
      </nav>
    )
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p onClick={() => onRouteChange('signin')} className='f5 dim white underline pa2 mv3 pointer'>Sign In</p>
        <p onClick={() => onRouteChange('register')} className='f5 dim white underline pa2 mv3 pointer'>Register</p>
      </nav>
    )


  }

}

export default Navigation;