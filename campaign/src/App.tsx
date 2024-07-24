import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { AuthProvider } from 'surveyDashboard/authContext'
import AdminDetails from './components/AdminDetails'

class App extends React.Component {
  render() {
  return (
    <AuthProvider>
      <AdminDetails/>
    </AuthProvider>
  )
}
}
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)


// class ReactMfe extends HTMLElement {
//   connectedCallback() {
//     root.render(<App/>);
//   }
// }

// customElements.define('react-element', ReactMfe)
