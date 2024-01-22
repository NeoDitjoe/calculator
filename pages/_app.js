import Wrapper from '@/components/wrapper/wrapper'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className='background'>
      <Wrapper Children={<Component {...pageProps} />}/>
    </div>
  )
}
