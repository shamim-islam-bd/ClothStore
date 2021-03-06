import React, {useState, useEffect} from 'react';
import './Products.css';
import { HashLink as Link } from 'react-router-hash-link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useAuth from '../../../hooks/useAuth';

// swal alert.
import Swal from 'sweetalert2'


// import { useHistory } from 'react-router';
// import Button from '@restart/ui/esm/Button';


const Products = () => {
  const {user} = useAuth();
  const [products, setProducts] = useState([]);
  

  // Histroy & Location for redirect...........
  // const history = useHistory();
  // const location = {
  //  pathname: '/placeOrder',
  //  state: { fromDashboard: true }
  // }

  // Useing Get method to show or read all data in Client Site.
   useEffect( () => {
       fetch('https://grisly-werewolf-53088.herokuapp.com/products')
         .then(res => res.json())
         .then(data=> setProducts(data))
   }, [])


    return (
        <div>
          <div className="row pt-5">
              <h1> #Exclusive </h1>
          </div>
          <div className="shell">
            <div className="container">
              <div className="row">
               { products.map((pd, index) => (
                 <div className="col-md-3">
                 <div className="wsk-cp-product">
                   <div className="wsk-cp-img">
                     <img className="" src={pd?.img} alt=""/>
                 </div>
                 <div className="wsk-cp-text">
                   <div className="category">
                     <span>Ethnic</span>
                   </div>
                   <div className="title-product">
                     <h3>{pd?.title}</h3>
                     </div>
                     <div className="description-prod">
                       <p>{pd?.des}</p>
                     </div>
                     <div className="card-footer">
                       <div className="wcf-left"><span className="price">{pd?.price}</span></div>
                       <div className="wcf-right">
                         <Link to={`/products/${pd._id}`}className="buy-btn"><AiOutlineShoppingCart /></Link>
                       </div>
                     </div>
                   </div>
                  </div>
                </div>
              ))
             }
             </div>
          </div>
        </div>
     </div>          
                               
    );

};

export default Products;



   

