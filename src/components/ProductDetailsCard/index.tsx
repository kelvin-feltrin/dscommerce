import './styles.css';
import computerImg from '../../assets/computer.png';
import ProductCategory from '../ProductCategory';

export default function ProductDetailsCard() {
    return (
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
                    <ProductCategory />
                    <ProductCategory />
                </div>
            </div>
        </div>
    );
}