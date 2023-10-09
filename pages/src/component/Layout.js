import Meta from './SEO/Meta'
import Footer from './footer'
import Navbar from "./Navbar"

const Layout = ({children, title, description}) =>{
    
    return (
    <Meta title={title} description={description}>
        <Navbar/>
    <main>{children}</main>
    <Footer/>
    </Meta>)
}
export default Layout