import React from 'react';

function Navigation({ onRouteChange, isSignnedIn }) {
  if (isSignnedIn) {
    return (
      <nav className="flex justify-end">
        <p onClick={() => onRouteChange('signout')} className="text-base text-white underline p-2 my-3 cursor-pointer hover:opacity-75">Sign out</p>
      </nav>
    )
  } else {
    return (
      <nav className="flex justify-end">
        <p onClick={() => onRouteChange('signin')} className="text-base text-white underline p-2 my-3 cursor-pointer hover:opacity-75">Sign In</p>
        <p onClick={() => onRouteChange('register')} className="text-base text-white underline p-2 my-3 cursor-pointer hover:opacity-75">Register</p>
      </nav>
    )
  }
}

export default Navigation;