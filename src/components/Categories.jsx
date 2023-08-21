import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryStatus } from '../features/categories/categoriesSlice';

function Categories() {
  const categoryStatus = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryStatus());
  });

  return (
    <p style={{ marginTop: '6rem', fontSize: '1.5rem', marginright: '0.5rem' }}>
      {categoryStatus}
      !
    </p>
  );
}

export default Categories;
