import React from 'react'
import ui1 from './ui1.png';
import ui2 from './ui1.png';
import ui3 from './ui1.png';
import './Product.css';
import icon from './icon.png';

function Product() {
    return (
        <div >
            <h1 className="component">Products</h1>
            <span className="rectangle" />
            <div className="products_view">
                <img className='product' src={ui1} />
                <img className='product' src={ui2} />
                <img className='product' src={ui3} />
            </div>
            <div className="content" style={{textAlign:"center"}}>
                <img  id="icon" src={icon} />
                <p>Acuplan is indulged with E-Health record and Therapy Recommendation engine. It confers symptoms and patient-specific acupuncture point selection letting towards the revolution of personalized medicine. Our system assists the clinicians, therapists in enabling Patient-specific Treatment Planning to the complete clinical workflow. It helps practitioners to treat patients with scientific evidences and beneficence. The real-time navigation system is strengthened to outfit meticulous clinical effectiveness. Our standalone system is engulfed with many features to treat patients with more systematic evidence.</p>
                <button className="button">view more</button>
            </div>
           

        </div>
    );
}

export default Product
