import { IProduct } from '../../../api/productsApi/types';
import cls from './ProductItem.module.scss';

interface ProductItemProps {
    product: IProduct;
}

export const ProductItem = (props: ProductItemProps) => {
    const { product } = props;

    return (
        <div className={cls.ProductItem}>
            <p className={cls.TextBold}>{product.title}</p>
            <p>{product.description}</p>
            <p className={cls.TextBold}>
                {product.price} {product.currency}
            </p>
        </div>
    );
};
