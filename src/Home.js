import React,{Component} from 'react';
import "./Home.css";
import Product from './Product';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

 


function Home() {
   
    return (
                 <div className="home">
        
                  <Carousel>

                   <img 
                    className="home__image"
                    src="banner1.png" alt=""/>

                    <img src="picture1.png" />
                    
                
                
                    <img src="picture2.png" />
                    
                
                
                    <img src="picture3.png" />

                    <img src="picture4.jpg" />
                   
                
                    </Carousel>
       
                   <div  className="home__row">
      
         <Product
             id="12345678"
             title="Dell Optiplex:Buy Dell Optiplex 3050 MT Desktop Computer - Intel Core...."
             price={999}
             rating={5}
             image="image22.jpg"
            />
            
           
          <Product
             id="12345678"
             title="Adonai Kente Cloth: Beautifully handwoven authentic Ghanaian Kente cloth ..."
             price={399}
             rating={5}
             image="image3.jpg"
           />
          
     
      
       </div>
       <div className="home__row">
       
       
       <Product
             id="12345678"
             title="Smart Watch:Smart watch android smartwatch iPhone watches,smartw...."
             price={69.33}
             rating={4}
             image="image6.jpg"
            />
          
          
          <Product
             id="12345678"
             title=" Ghana Made Women Bags: African Kente bag "
             price={43.23}
             rating={4}
             image="image7.jpg"
           />
           
       
         <Product
             id="12345678"
             title="Men Suites: Wool Blue Herringbone Retro Gentleman Style Custom Ma..."
             price={299}
             rating={4}
             image="image8.jpg"
           />
           
       
   
      
       
       </div>
       <div  className="home__row">
       
       <Product
             id="12345678"
             title="Samsung Galaxy Note 20: Meet Galaxy Note20 5G and Note20 Ultra 5G. This is not a smartphone as you know it. This is the power phone that forever changes how you work and play...."
             price={1.299}
             rating={5}
             image="image5.png"
           />
          
           </div>
         
        </div>
    );
};

export default Home;
