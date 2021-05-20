import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Nav/>
      <div className="page-content">
        { children }
      </div>
      <Footer />
    </div>
  )
}