import React,{useState ,useContext ,useEffect} from 'react'
import axios from 'axios';
import "./ProductDetail.scss"
import { useParams } from 'react-router-dom'
import ProdCard from "../Card/ProdCard"
import {Context} from "../../../Utils/Context/AppContext"
import { BiShoppingBag } from "react-icons/bi";


const ProductDetail = () => {
    const [data, setData] = useState([]);
    const {addProductToCart} = useContext(Context)
    const { id } = useParams()
    const prod = data.filter((prod) => prod.product_id === id)
    const [count, setCount] = useState(1);
    

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://api.jsonsilo.com/demo/74e3ebbb-35d5-4d89-a346-e80bd9f82b20');
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [id]);
   
    
    return (
        <div className='ProdDetail_main'>
            <div className='ProdDetail'>
                <div className='prodImg'>
                    <img src={prod?.[0]?.image_source} alt="" />
                </div>
                <div className='ProdDescription'>
                    <h2>{prod?.[0]?.product_name}</h2>
                    <h3 className='Category'>{prod?.[0]?.category}</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut impedit aliquam porro error commodi iste nam accusantium architecto nihil accusamus, deleniti, magni quasi inventore possimus. Quasi optio amet veniam dicta!</p>

                    <div className='Counter_div'>
                        <h3>QTY</h3>
                        <div className='Counter'>
                            <div className='plus'onClick={() => setCount(count + 1)}>+</div>
                            <div className='count' >{count}</div>
                            <div className='Minus'onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</div>
                        </div>
                    </div>
                    <h3>
                        &#36;{prod?.[0]?.price}
                    </h3>
                    <button onClick={()=>addProductToCart({...prod?.[0],Qty:count,TotalPrice:prod?.[0]?.price*count})}><BiShoppingBag />Add To Cart</button>
                </div>
            </div>
            <div>
                <h1 className='Similar_Products-title'>Similar Products</h1>
                <div className='Similar_Products'>
                    {data?.slice(0, 4).map((item, key) => (
                        <ProdCard key={key} product={item.product_name} price={item.price} img={item.image_source} category={item.category} id={item.product_id} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ProductDetail