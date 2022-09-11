import React from 'react'

function MethodsAsPropsChild(props) {
  return (
    <div>
        {props.isLoggedIn ? (
            <div>
                <p>Welcome! Please complete the following steps:</p>
                <ol>
                    <li>Comfirm your email</li>
                    <li>Complete your profile</li>
                    <li>Subscribe to the newsletter</li>
                </ol>
                <button onClick={props.handleSignOut}>Sign out</button>
            </div>
        ) :
        (<div>
            <p>Please sign in</p>
            <button onClick={props.handleSignIn}>Sign in</button>
        </div>)}
    </div>
  )
}

export default MethodsAsPropsChild