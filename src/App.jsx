import { useState, useEffect } from 'react'
import axios from 'axios'
import { Header, Navigation, Home, Product } from './components';
import { Routes, Route, useLocation } from 'react-router-dom'

const baseURL = 'https://api-test.innoloft.com';

function App() {
  const location = useLocation();
  const [config, setConfig] = useState(null);

  const fetchConfig = async () => {
    try {
      const response = await fetch(`${baseURL}/configuration/${import.meta.env.VITE_APP_ID}/`, { mode: 'cors' });
      const data = await response.json();
      setConfig(data);
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    fetchConfig();
  }, [])

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/product/6781/`).then(res => {
      setProduct(res.data);
    })
  }, [])

  return (
    <div className='font-Open_Sans bg-[#f9fafb]'>
      <Header baseURL={baseURL} userPicture={product?.user.profilePicture} config={config} />

      <div className={`flex items-start justify-between gap-4 sm:px-[5%] px-[3%] py-12`}>
        <div className='lg:w-[20%] md:block hidden'>
          <Navigation user={product?.user} company={product?.company} />
        </div>
        <div className='lg:w-[80%] md:w-[70%] w-full'>
          <Routes>
            <Route path='/' element={<Home config={config} />} />
            <Route path='/product' element={<Product config={config} product={product} user={product?.user} edit={false} baseURL={baseURL} />} />
            <Route path='/product/edit' element={<Product config={config} product={product} user={product?.user} edit={true} baseURL={baseURL} />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App