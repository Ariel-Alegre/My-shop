import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMoreSold } from "../../redux/actions";
import styles from "./MoreSold.module.css";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MoreSold() {
  const dispatch = useDispatch();
  const moreSold = useSelector((state) => state.productsMoreSold);
  console.log(moreSold);

  useEffect(() => {
    dispatch(getMoreSold());
  }, [dispatch]);



  return (
    <div className={styles.detailContainer}>
      mas vendidos
      <Carousel responsive={responsive}>
        {moreSold &&
          moreSold.map((data) => (
            <Link to={`/productDetail/${data.id}`}>
            <div className={styles.imgContainer}>
              <img src={data.image} alt="" />
              <hr />

              <label>{data.price}</label>
              <label>{data.name}</label>
            </div>
          </Link>
          ))}
          </Carousel>
    </div>
  );
}

export default MoreSold;


