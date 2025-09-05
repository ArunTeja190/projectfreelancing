import type { FC } from 'react';

interface Item {
  title: string;
  description: string;
  icon: string;
}

interface ProductsAndServicesProps {
  products: Item[];
  services: Item[];
}

const ProductsAndServices: FC<ProductsAndServicesProps> = ({ products, services }) => {
  return (
    <div className="section-container">
      <div className="content-container">
        <div className="products-services-section">
          <div className="section-block">
            <h2>Our Products</h2>
            <div className="products-grid">
              {products.map((product, index) => (
                <div key={index} className="product-card">
                  <div className="card-icon">{product.icon}</div>
                  <h3>{product.title}</h3>
                  <p className="card-content">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="section-block">
            <h2>Our Services</h2>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="card-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p className="card-content">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsAndServices;
