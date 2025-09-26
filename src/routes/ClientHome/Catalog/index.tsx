import './styles.css';

import { useEffect, useState } from 'react';

import type { ProductDTO } from '../../../models/product';
import * as productService from '../../../services/product-service';

import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonNextPage from '../../../components/ButtonNextPage';



export default function Catalog() {
    const [products, setProducts] = useState<ProductDTO[]>([]);

    useEffect(() => {
        productService.findPageRequest(0, "")
            .then(response => {
                setProducts(response.data.content);
            });
    }, []);

    return (
        <main>
            <section id="catalog-section" className="dsc-container">
                <SearchBar />

                <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                    {
                        products.map(
                            product => <CatalogCard key={product.id} product={product} />
                        )
                    }
                </div>

                <ButtonNextPage />
            </section>
        </main>
    );
}