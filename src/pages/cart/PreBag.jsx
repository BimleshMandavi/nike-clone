import { FaRegHeart } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import HomeSlider from "../home/HomeSlider";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../redux/slices/productSlice";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Rating,
} from "@mui/material";
import { LiaBellSlash } from "react-icons/lia";
import StarIcon from "@mui/icons-material/Star";
import { createCart } from "../../redux/slices/cart";
import toast from "react-hot-toast";

const PreBag = () => {
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  const getLabelText = (value) => {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  };
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState();

  const {user} = useSelector((state) => state.auth)
  console.log("user",user)
  const handleAddtoFav = () => {
    navigate("/favourites");
  };
  const handleAddToBag = async() => {
    try {
      let data = {
        "userId":user?.id,
         "products":[
        {
            "productId": id,
            "qty": 1
        }
     ]
}   
  console.log("data",data)
      const result = await dispatch(createCart(data))
      console.log("result",result)
      if(result.status ===  'SUCCESS'){
        toast.success("Your Product is added to Cart")
        navigate("/cart")
      }
    } catch (error) {
      console.log("error",error)
    }
  };
  const fetchSingleProduct = async () => {
    let result = await dispatch(getSingleProduct(id));
    if (result) {
      setProduct(result?.data); // &&
      return true;
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  return (
    <div className="main-pre-container " style={{ overflow: "hidden" }}>
      <div
        className="pre-bag-container"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "450px",
          marginTop: "50px",
        }}
      >
        <div
          className="product-right-part"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="product-img">
            <img
              src={product?.image}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
        <div
          className="product-left-part pl-12 max-h-[70vh] overflow-y-auto overflow-x-hidden"
          style={{ width: "180vw", overflowY: "scroll" }}
        >
          <div
            className="product-info"
            style={{ width: "50%", margin: " 0 0", padding: "0 0 0 20px" }}
          >
            <h1 className="text-3xl">{product?.title?.shortTitle}</h1>
            <h3>{product?.title?.longTitle}</h3>
            <div className="product-price">MRP : ₹{product?.price?.mrp}.00</div>
            <span className="text-gray-400">
              incl. of taxes (Also includes all applicable duties)
            </span>
            <div className="product-color">
              <p className="text-xl">color : {product?.subCategory}</p>
            </div>

            <div className="product-size">
              <p className="text-1xl">Select Size</p>
              <div className="size-grid">
                <div
                  className="grid1"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3,1fr)",
                    gap: "7px",
                    margin: "8px",
                    background: "rgb(255, 255, 255)",
                    boxShadow: "rgb(229, 229, 229) 0px 0px 0px 1px",
                    width: "100%",
                  }}
                >
                  <button style={{ cursor: "pointer" }}>UK 6</button>
                  <button style={{ cursor: "pointer" }}>UK 6.5</button>
                  <button style={{ cursor: "pointer" }}>UK 7</button>
                  <button style={{ cursor: "pointer" }}>UK 7.5</button>
                  <button style={{ cursor: "pointer" }}>UK 8</button>
                  <button style={{ cursor: "pointer" }}>UK 8.5</button>
                  <button style={{ cursor: "pointer" }}>UK 9</button>
                  <button style={{ cursor: "pointer" }}>UK 9.5</button>
                  <button style={{ cursor: "pointer" }}>UK 10</button>
                  <button style={{ cursor: "pointer" }}>UK 10.5</button>
                  <button style={{ cursor: "pointer" }}>UK 11</button>
                  <button style={{ cursor: "pointer" }}>UK 11.5</button>
                  <button style={{ cursor: "pointer" }}>UK 12</button>
                </div>
              </div>
            </div>
            <div
              className="product-btns"
              style={{
                margin: "12px 0 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div className="add-product pt-10">
                <button
                  style={{
                    background: "black",
                    color: "white",
                    width: "100%",
                    height: "48px",
                    borderRadius: "30px",
                    cursor: "pointer",
                  }}
                  onClick={handleAddToBag}
                >
                  Add to Bag
                </button>
              </div>
              <div
                className="fav-add-product border-current"
                style={{ marginTop: "12px" }}
              >
                <button
                  className="w-full border-inherit rounded-3xl bg-[#8e8e8e55] h-12 white relative"
                  onClick={handleAddtoFav}
                >
                  Favourite{" "}
                  <FaRegHeart className="absolute top-4 right-[112px] t-2" />
                </button>
              </div>
            </div>
            <div className="info-section pt-12">
              <div className="delivery-info">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Delivery & Returns
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="product-discreption">
                      <article style={{ margin: "18px 0 0" }}>
                        All purchases are subject to delivery fees. Standard
                        delivery 4 to 9 business days Orders are processed and
                        delivered Monday to Friday (excluding public holidays)
                        Nike Members enjoy free returns.
                      </article>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="review-info">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Reviwes
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box
                      sx={{
                        width: 200,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Rating
                        name="hover-feedback"
                        value={value}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                          setHover(newHover);
                        }}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      {value !== null && (
                        <Box sx={{ ml: 2 }}>
                          {LiaBellSlash[hover !== -1 ? hover : value]}
                        </Box>
                      )}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="pro-info">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Product information
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="product-discreption">
                      <article style={{ margin: "18px 0 0" }}>
                        Quicker than 1, 2, 3—the original hoops shoe lets you
                        step in and get going. Its easy-entry EasyOn system
                        gives you a hands-free experience. Crisp leather dons
                        the cleanest colour for the ultimate wearability. Yeah,
                        its everything you love and then some.
                      </article>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="more-info">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    More Info
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="other-products mt-12 h-[500px]">
        <h1 className="h-[20%]" style={{ fontSize: "30px" }}>
          You Might Also Like
        </h1>
        <HomeSlider className="h-[80%]" />
      </div>
    </div>
  );
};

export default PreBag;