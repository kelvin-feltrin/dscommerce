import './App.css'

import computerImg from './assets/computer.png';
import HeaderClient from './components/HeaderClient';

export default function App() {
  return (
    <>
      <HeaderClient />

    <main>
        <section id="product-details-section" className="dsc-container">
            <div className="dsc-card dsc-mb20">
                <div className="dsc-product-details-top dsc-line-bottom">
                    <img src={computerImg} alt="Computador" />
                </div>

                <div className="dsc-product-details-bottom">
                    <h3>R$ 5000,00</h3>
                    <h4>Computador Gamer XT</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem alias commodi iste minus nobis sed nisi, consectetur earum perferendis quod praesentium culpa minima doloremque quaerat, facilis voluptate officia a et.
                    </p>
                    <div className="dsc-category-container">
                        <div className="dsc-category">
                            Eletrônicos
                        </div>
                        <div className="dsc-category">
                            Computadores
                        </div>
                    </div>
                </div>
            </div>
            <div className="dsc-btn-page-container">
                <div className="dsc-btn dsc-btn-blue">
                    Comprar
                </div>
                <div className="dsc-btn dsc-btn-white">
                    Início
                </div>
            </div>
        </section>
    </main>
    </>
  );
}