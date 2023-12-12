import { useQuery } from '@apollo/client';
import { Button, ButtonSize } from '../../components/Button/Button';
import { ACCESS_TOKEN, EXPIRES_AT, REFRESH_TOKEN } from '../../shared/consts/consts';
import { IProductsResponse } from '../../api/productsApi/types';
import { QUERY_PRODUCTS } from '../../api/productsApi/products';
import { PageLoader } from '../../components/PageLoader/PageLoader';

import cls from './Products.module.scss';

const Products = () => {
    const { data, loading, error } = useQuery<IProductsResponse>(QUERY_PRODUCTS);

    if (loading) {
        return <PageLoader />;
    }

    if (error) {
        return <div>Error has happened</div>;
    }

    const productsList = data?.products;

    const handleOnClick = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        localStorage.removeItem(EXPIRES_AT);

        window.location.reload();
    };

    return (
        <div className={cls.Products}>
            <Button size={ButtonSize.L} onClick={handleOnClick}>
                Logout
            </Button>
            {productsList?.length ? (
                <>
                    {productsList.map(el => (
                        <div className={cls.ProductsListWrapper} key={el.id}>
                            <p>{el.title}</p>
                            <p>{el.description}</p>
                            <p>
                                {el.price} {el.currency}
                            </p>
                        </div>
                    ))}
                </>
            ) : (
                <p>There are no products</p>
            )}
        </div>
    );
};

export default Products;
