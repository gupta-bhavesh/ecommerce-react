import { MessageDisplay } from '@/components/common';
import { ProductShowcaseGrid } from '@/components/product';
import { useDocumentTitle, useRecommendedProducts, useScrollTop } from '@/hooks';
// import bannerImg from '@/images/banner-girl-1.png';
import bannerImg from '@/images/banner-pic.png';

import React from 'react';
import { shallowEqual, useSelector, useStore } from 'react-redux';
import { massFilter } from '@/selectors/selector';
import { ProductGrid, ProductList } from '@/components/product';

const RecommendedProducts = () => {
  useDocumentTitle('Recommended Products | MAP');
  useScrollTop();
  const store = useSelector((state) => ({
    filteredProducts: massFilter(state.products.items, state.profile.mass),
    products: state.products,
    requestStatus: state.app.requestStatus,
    isLoading: state.app.loading,
  }), shallowEqual);
  
  const xx = useStore();
  console.log("hi", xx.getState())
  return (
    <main className="content">
      <div className="featured">
        <div className="banner">
          <div className="banner-desc">
            <h1>Recommended Products</h1>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
        <main className="content">
          <section className="product-list-wrapper">
            <ProductList {...store}>
              <ProductGrid products={store.filteredProducts} />
            </ProductList>
          </section>
        </main>
      </div>
    </main>
  );
};

export default RecommendedProducts;
