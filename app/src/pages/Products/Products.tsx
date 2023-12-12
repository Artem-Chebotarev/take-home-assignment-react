import { useQuery } from '@apollo/client';
import { Button, ButtonSize } from '../../components/Button/Button';
import { ACCESS_TOKEN, EXPIRES_AT, REFRESH_TOKEN } from '../../shared/consts/consts';
import { IProductsResponse } from '../../api/productsApi/types';
import { QUERY_PRODUCTS } from '../../api/productsApi/products';
import { PageLoader } from '../../components/PageLoader/PageLoader';
import { ProductList } from '../../components/ProductList/ProductList';
import { PageError } from '../../components/PageError/PageError';

import cls from './Products.module.scss';
import { PageContainer } from '../../components/PageContainer/PageContainer';

const Products = () => {
    const { data, loading, error } = useQuery<IProductsResponse>(QUERY_PRODUCTS);

    if (loading) {
        return <PageLoader />;
    }

    if (error) {
        return <PageError />;
    }

    const productsList = data?.products;

    const handleOnClick = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        localStorage.removeItem(EXPIRES_AT);

        window.location.reload();
    };

    return (
        <PageContainer className={cls.Products}>
            <Button className={cls.Button} size={ButtonSize.L} onClick={handleOnClick}>
                Logout
            </Button>
            <ProductList products={productsList} />
        </PageContainer>
    );
};

export default Products;
