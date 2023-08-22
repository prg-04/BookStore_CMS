import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryStatus } from "../redux/categories/categoriesSlice";

function Categories() {
  const categoryStatus = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryStatus('Under Construction'));
  });

  return (
    <p style={{ marginTop: "6rem", fontSize: "1.5rem", marginright: "0.5rem" }}>
      {categoryStatus}!
    </p>
  );
}

export default Categories;
