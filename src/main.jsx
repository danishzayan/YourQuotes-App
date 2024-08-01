import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App'
import './index.css'
const clientId = "537577681906-379ajvh68vgtnkrpd0am696qiuf72ulc.apps.googleusercontent.com";
ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={clientId}>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </GoogleOAuthProvider>
)
