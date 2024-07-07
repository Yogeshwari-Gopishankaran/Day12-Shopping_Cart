import React,{useState} from 'react'
import { Rating } from 'react-simple-star-rating'


function Products({count,setCount,data}) {

    let [toggle,setToggle]=useState(true)
    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)
    
        // other logic
      }
   
    
    
  return <>
   <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top design" src={data.image} alt="..." />
                           
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder"> {data.title}</h5>
                                    {/* <!-- Product price--> */}
                                   <h6><span> &#8377;</span> {data.price}</h6> 
                                    <br></br>
                                    <Rating onClick={handleRating} initialValue={rating} size={30} />  
                                    
                                </div>
                                
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               {
                                toggle? <div className="text-center"><button className="btn btn-outline-dark mt-auto" 
                                onClick={()=>{
                                    setCount(count+1)
                                     setToggle(!toggle)
                                    }} >Add To Cart</button></div>:<div className="text-center"><button className="btn btn-dark mt-auto" 
                                    onClick={()=>{
                                        setCount(count-1)
                                         setToggle(!toggle)
                                        }} >Remove from Cart</button></div>
                                
                               }
                            
                            </div>
                        </div>
                    </div>
  
  </>
}

export default Products
