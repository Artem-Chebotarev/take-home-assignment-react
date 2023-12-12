import { IProduct } from '../../api/productsApi/types';
import { ProductItem } from './ProductItem/ProductItem';

import cls from './ProductList.module.scss';

interface ProductListProps {
    products?: IProduct[];
}

export const ProductList = (props: ProductListProps) => {
    const { products } = props;

    return (
        <div className={cls.ProductsList}>
            {products?.length ? (
                <>
                    {products.map(el => (
                        <ProductItem key={el.id} product={el} />
                    ))}
                </>
            ) : (
                <p className={cls.Text}>There are no products</p>
            )}
        </div>
    );
};
