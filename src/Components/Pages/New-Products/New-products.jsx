import React ,{useEffect,useState} from 'react'
import "./New-products.scss"
import ProdCard from '../Card/ProdCard'
import { CiFilter } from "react-icons/ci";
import axios from 'axios';

const Newproducts = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = (await axios.get('https://api.jsonsilo.com/demo/74e3ebbb-35d5-4d89-a346-e80bd9f82b20'));
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="newProducts">
      <h1>New Products</h1>
      <div className='newProducts-heder'>
        <ul>
          <li>All Products</li>
          <li>T-Shirt</li>
          <li>Hoodies</li>
          <li>Jacket</li>
        </ul>
        <button><CiFilter />Filter</button>
      </div>

      <div className='card_div'>
        {data?.map((item, key) => (
          <ProdCard key={key} product={item.product_name} price={item.price} img={item.image_source} category={item.category} id={item.product_id} />
        ))}


      </div>
    </div>
  )
}

export default Newproducts