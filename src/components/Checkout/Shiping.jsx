import "./Checkout.css";
import Button from "@mui/material/Button";
import { LiaSmsSolid } from "react-icons/lia";
import { IoBagOutline } from "react-icons/io5";
import { SiNike } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMapPin } from "react-icons/hi2";
import Headroom from "react-headroom";
import { useSelector } from "react-redux";
import { Box, Stack } from "@mui/material";
import toast from "react-hot-toast";

const Shipping = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  console.log("cart data in shiping", cart);
  console.log("user data in shiping", user);

  console.log("user data", user);

  let subtotal = 0;
  let deliveryCoast = 1250;

  for (let i of cart) {
    let price =
      i && i.products && i.products[0] && i.products[0].productId?.price?.mrp;
    subtotal = subtotal + price;
  }
  let total = deliveryCoast + subtotal;

  const footerImg = [
    {
      id: "01",
      images: "footerImg1.jpeg",
    },
    {
      id: "02",
      images: "footerImg2.png",
    },
    {
      id: "03",
      images: "footerImg3.png",
    },
    {
      id: "04",
      images: "footerImg4.png",
    },
    {
      id: "05",
      images: "footerImg5.jpeg",
    },
    {
      id: "06",
      images: "footerImg6.png",
    },
    {
      id: "07",
      images: "footerImg7.jpeg",
    },
    {
      id: "08",
      images: "footerImg8.png",
    },
    {
      id: "09",
      images: "footerImg9.jpeg",
    },
    {
      id: "10",
      images: "footerImg10.png",
    },
    {
      id: "11",
      images: "footerImg11.jpeg",
    },
  ];

  const handleEdit = () => {
    navigate("/checkout");
  };

  const handleToBilling = () => {
    navigate("/billing");
    toast.success("Shipping successful");
  };

  return (
    <div className="main-checkout-cont h-full w-full">
      <Headroom className="">
        <div className="checkout-nav checkout-nav flex justify-between px-5 pt-6 lg:px-20">
          <div className="left-logo">
            <Link to="/">
              <SiNike className="logo-img" />
            </Link>
          </div>
          <div className="right-nav-cont flex justify-evenly items-center gap-4">
            <span className="contact-num">000 800 100 9538</span>
            <div className="flex gap-4">
              <Link to="">
                <LiaSmsSolid className="check-right-logo sms-log" />
              </Link>
              <Link to="/cart" className="relative ">
                <IoBagOutline
                  className="check-right-logo bag-log"
                  style={{ cursor: "pointer" }}
                ></IoBagOutline>
                <div
                  className="bag-item-count text-[11px]"
                  style={{
                    textDecoration: "none",
                    color: "#111111",
                    position: "relative",
                    right: "6px",
                    top: "8px",
                    display: Object.keys(cart).length === 0 ? "none" : "flex",
                  }}
                >
                  {cart.length}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Headroom>
      <div className="checkout-body-cont px-8  pt-8 lg:px-20 md:flex md:gap-4 md:justify-evenly">
        <div className="checkout-left-part" style={{ height: "100%" }}>
          <div className="order-heading w-full">
            <h2 className="text-xl px-3 pb-10 w-full">
              When would you like to get your order?
            </h2>
            <div className="pb-4">
              <Stack spacing={2} direction="row" className="w-full">
                <Button className="w-[440px] h-[82px]" variant="outlined">
                  <span className="w-[70%] text-black">
                    Arrives Tue, 16 Jan - Wed, 7 Feb
                  </span>
                  <span className="text-slate-500 w-[30%]">
                    ₹ {deliveryCoast.toFixed(2)}
                  </span>
                </Button>
              </Stack>
            </div>
            <div className="item-delivery-section ">
              <div className="flex ">
                {cart.map((data) => (
                  <div
                    key={data.id}
                    className="add-input-area"
                    style={{ padding: "20px 0px 0px" }}
                  >
                    <img
                      className="pl-5 shipment gap-8 pt-8"
                      src={data?.products[0]?.productId?.image}
                      alt=""
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm pt-5 text-slate-500">
                  This is an international shipment requiring customs clearance
                </p>
              </div>

              <Button
                variant="outlined"
                size="large"
                type="submit"
                style={{
                  marginTop: "50px",
                  width: "100%",
                  height: "60px",
                  borderRadius: "30px",
                  border: "none",
                  padding: "16px 20px",
                  color: "white",
                  backgroundColor: "black",
                }}
                onClick={handleToBilling}
              >
                Continue
              </Button>
            </div>
            <div className="item-summary-section" style={{ marginTop: "25px" }}>
              <div className="flex items-center justify-between">
                <div className="section-heading mb-[40%]">
                  <div className="flex items-center justify-between">
                    <h2 className="mb-2">Delivery</h2>
                    <div className="edit-info-btn ">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          flexWrap: "wrap",
                          border: "2px solid grey",
                          borderRadius: "20px",
                        }}
                      >
                        <Button onClick={handleEdit} size="sm">
                          Edit
                        </Button>
                      </Box>
                    </div>
                  </div>
                  <div className="flex pl-2">
                    <div className="text-[20px]">
                      <div className="user-address-info flex ">
                        <div className="flex gap-3">
                          <h3>Name :</h3>
                          <div className=" text-slate-600">
                            {user?.firstName}
                          </div>
                          <div className=" text-slate-600">
                            {user?.lastName}
                          </div>
                        </div>
                      </div>
                      <div className="user-city">
                        <div className="flex gap-3">
                          <h3>Email :</h3>
                          <div className=" text-slate-600">{user?.email}</div>
                        </div>
                        <div className="flex gap-3">
                          <h3>Phone No. :</h3>
                          <div className=" text-slate-600">
                            {user?.address?.[0]?.phone}
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <h3>PAN No. :</h3>
                          <div className=" text-slate-600">
                            {user?.address?.[0]?.panNumber}
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <h4>Address:</h4>
                          <div className=" text-slate-600">
                            {user?.address?.[0]?.city}
                          </div>
                          <div className=" text-slate-600">
                            {user?.address?.[0]?.state}
                          </div>
                          <div className=" text-slate-600">
                            {user?.address?.[0]?.zipcode}
                          </div>
                          <div className=" text-slate-600">
                            {user?.address?.[0]?.locality}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-heading">
                <h2>Shipping</h2>
              </div>
              <div className="section-heading text-slate-500">
                <h2>Billing</h2>
              </div>
              <div className="section-heading text-slate-500">
                <h2>Payment</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-right-part">
          <h2 className="order-summary-title">Order Summary</h2>
          <div className="price-summary">
            <div className="prices">
              <div className="sub-info info">Subtotal</div>
              <div className="sub-value info"> ₹ {subtotal.toFixed(2)}</div>
            </div>
            <div className="delevery-info">
              <div className="dele-info info">
                Estimated Delivery & Handling
              </div>
              <div className="dele-value info">
                ₹ {deliveryCoast.toFixed(2)}
              </div>
            </div>
            <div className="price-total">
              <div className="total-info ">Total</div>
              <div className="total-value "> ₹ {total.toFixed(2)}</div>
            </div>
            <div className="summary-help-text" style={{ fontSize: "0.8rem" }}>
              (The total reflects the price of your order, including all duties
              and taxes)
            </div>
          </div>
          <div className="order-summary pb-3" style={{ marginTop: "20px" }}>
            <h3
              className="shipment-title"
              style={{ display: "flex", justifyContent: "center" }}
            >
              Arrives Tue, 16 Jan - Wed, 7 Feb
            </h3>
            {cart.map((data) => (
              <div
                key={data.id}
                className=" shipment gap-8 pt-8"
                style={{
                  display: "flex",
                }}
              >
                <div className="item-imgs">
                  <img src={data?.products[0]?.productId?.image} />
                </div>
                <div className="item-order-info">
                  <div className="item-title">
                    <a href="/" style={{ textDecoration: "none" }}>
                      {data?.products[0]?.productId?.title?.longTitle}
                    </a>
                  </div>
                  <div className="item-name">
                    {" "}
                    {data?.products[0]?.productId?.title?.shortTitle}
                  </div>
                  <div className="item-color">
                    {data?.products[0]?.productId?.colour}
                  </div>

                  <div className="item-quant">
                    {" "}
                    Quantity: {data?.products[0]?.qty}
                  </div>

                  <div className="item-price">
                    {" "}
                    MRP:₹ {data?.products[0]?.productId?.price?.mrp.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="shipent-summary"></div>
        </div>
      </div>
      <div
        className="checkout-footer"
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          background: "#111",
          color: "#ffff",
          height: "50px",
          width: "100%",
        }}
      >
        <div className="left-sub-footer" style={{ display: "flex" }}>
          <a
            href="#"
            style={{
              display: "flex",
              color: "#ffff",
              margin: "0 8px 0 8px ",
              textDecoration: "none",
              fontSize: "0.8rem",
            }}
          >
            <HiOutlineMapPin />
            <div className="cuntry-name">India</div>
          </a>
          <div
            className="foot-link"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              padding: "0 0 0 5px",
            }}
          >
            <div
              className="footer-element-links"
              style={{
                color: "#898989",
                paddingLeft: "10px",
                fontSize: "0.8rem",
              }}
            >
              <span>© 2023 Nike,Inc.All Rights Reserved</span>
            </div>
            <div className="footer-element-links">
              <Link
                to="https://www.eshopworld.com/shoppers/help/retailer/nike/terms-and-conditions-of-sale-en/"
                style={{
                  color: "#898989",
                  textDecoration: "none",
                  paddingLeft: "20px",
                  fontSize: "0.8rem",
                }}
              >
                Terms of Sale
              </Link>
            </div>
            <div className="footer-element-links">
              <Link
                to="https://agreementservice.svs.nike.com/in/en_gb/rest/agreement?agreementType=termsOfUse&uxId=com.nike&country=IN&language=en&requestType=redirect"
                style={{
                  color: "#898989",
                  textDecoration: "none",
                  paddingLeft: "20px",
                  fontSize: "0.8rem",
                }}
              >
                Terms of Use
              </Link>
            </div>
            <div className="footer-element-links">
              <Link
                to="https://agreementservice.svs.nike.com/sg/en_gb/rest/agreement?agreementType=privacyPolicy&uxId=com.nike.unite&country=SG&language=en&requestType=redirect"
                style={{
                  color: "#898989",
                  textDecoration: "none",
                  paddingLeft: "20px",
                  fontSize: "0.8rem",
                }}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="right-sub-footer absolute right-0 ">
          <div className="footer-element-right flex ">
            {footerImg.map((item) => (
              <div
                className="footer-product hidden lg:flex justify-end "
                key={item.id}
              >
                <img
                  className="flex w-[45px] h-[27px] justify-end pr-2 mr-[8px]"
                  src={item.images}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
