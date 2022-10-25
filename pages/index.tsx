import type { GetStaticProps, NextPage } from 'next'

import Home from '@/screens/home/Home'

const HomePage: NextPage = props => {
  return <Home {...props} />
}

export default HomePage
