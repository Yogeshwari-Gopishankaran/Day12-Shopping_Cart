import React,{useState} from 'react'
import NavBar from './components/NavBar'
import Heading from './components/Heading'
import Products from './components/Products'
import Zzplant from './assets/plant1.jpg'
import Red from './assets/plant2.jpg'
import Spider from './assets/plant3.jpg'
import Plant4 from './assets/plant4.jpg'
import Plant5 from './assets/plant5.jpg'
import Plant6 from './assets/plant6.jpg'
import Plant7 from './assets/plant7.jpg'
import Plant8 from './assets/plant8.jpg'
import Plant9 from './assets/plant9.jpeg'
import Plant10 from './assets/Plant10.jpeg'




function App() {
  let [count,setCount]=useState(0)
  let data=[{
   image:Zzplant,
   title:'Zamioculcas zamiifolia (Zz Plant)',
   price:'250'
  },
{
  image:Red,
  title:'Red Feng Shui Good Luck',
  price:' 500'
},
{
  image:Spider,
  title:'Spider indore plant',
  price:'150 '
},
{
  image:Plant4,
  title:'Ficus Bonsai',
  price:'1000'
},
{
  image:Plant5,
  title:'Red Anthurium Plant',
  price:'893'
},
{
  image:Plant6,
  title:'Bambo Plant',
  price:'540'
},
{
  image:Plant7,
  title:'Cactus',
  price:'893'
},
{
  image:Plant8,
  title:'Button Rose',
  price:'299'
},
{
  image:Plant9,
  title:'Lilly',
  price:'1050'
},
{
  image:Plant10,
  title:'Lotus',
  price:'999'
}]
  return<>
  <NavBar count={count}/>
  <Heading/>

  {/* <!-- Section--> */}
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                     data.map((e,i)=>{
                      return <Products count={count} setCount={setCount} data={e} key={i}/>
                     
                     })
                    }
                    
                    

                  </div>
                  </div>
                  </section>
  </>
 
}

export default App

