import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import CategoriesPreview from '../categories-preview/categories-preview.component.jsx';
import Category from '../category/category.component.jsx';
import { fetchCategortiesStartAsync } from '../../store/categories/category.action';

import './shop.styles.scss'


const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategortiesStartAsync());
    }, []);

    return (
        <Routes>
            {/* The parent Route is set as 'home/*', so is pre-set */}
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>

    );
};

export default Shop;
