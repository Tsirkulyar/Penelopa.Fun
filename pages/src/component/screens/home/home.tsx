import {FC} from 'react'
import Layout from '../../Layout'
import Logo from '../../Logo'
import AboutUs from '../../../component/AboutUs'
import ReadNow from '../../../component/ReadNow'
import BlockRead from "../../../component/BlockRead"
const Home:FC = () =>{
    return (
      <Layout title='home' description=''>
      <Logo/>
      <AboutUs/>
      {/* <ReadNow /> */}
      <BlockRead/>
        </Layout>
    )
}
export default Home