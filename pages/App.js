// import Image from 'next/image'
import { Inter } from 'next/font/google'
// import Layout from './src/component/Layout/Layout'
// import { title } from 'process'
import Home from './src/component/screens/home/home'

const inter = Inter({ subsets: ['latin'] })

const HomePage = () => {
  return (
    <Home/>
  )
}
 export default HomePage
