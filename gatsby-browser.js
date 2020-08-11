import React from "react"
import { Auth0Provider } from '@auth0/auth0-react'
import { navigate } from 'gatsby'

const onRedirectCallback = (appState) => {
  console.log(appState)
  navigate(appState?.returnTo || '/')
}

export const wrapRootElement = ({ element }) => {
  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN}
      clientId={process.env.AUTH0_CLIENTID}
      audience={process.env.AUTH0_AUDIENCE}
      redirectUri={process.env.AUTH0_CALLBACK}
      onRedirectCallback={onRedirectCallback}
    >
      {element}
    </Auth0Provider>
  )
}
