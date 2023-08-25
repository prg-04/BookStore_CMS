import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryStatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const categoryStatus = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategoryStatus('Under Construction'));
  });

  return (
    <p style={{ marginTop: '6rem', fontSize: '1.5rem', marginright: '0.5rem' }}>
      {categoryStatus}
      !
    </p>
  );
}

export default Categories;
