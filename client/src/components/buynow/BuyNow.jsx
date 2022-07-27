import { Divider } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./BuyNow.css";
import Option from "./Option";
import Right from "./Right";
import Subtotal from "./Subtotal";

const BuyNow = () => {

    window.scrollTo(0,0);
    const [cartdata, setCartdata] = useState("");
    console.log(cartdata.carts);

    const getdatabuy = async () => {
        const res = await fetch("/cartdetails", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            Credential: "include"
        });

        const data = await res.json();

        if (res.status !== 201) {
            console.log("error")
        } else {
            setCartdata(data.carts);
            // setCartdata(cartdata.carts);
        }
    };

    useEffect(() => {
        getdatabuy();
    }, []);

    return (
        <>
            {
                cartdata.length ? <div className="buynow_section">
                    <div className="buynow_container">
                        <div className="left_buy">
                            <h1>Shopping Cart</h1>
                            <p>Select all items</p>
                            <span className="leftbuyprice">Price</span>
                            <Divider />
                            {
                                cartdata.map((e, k) => {
                                    return (
                                        <>
                                            <div className="item_containert">
                                                <img src={e.detailUrl} alt="" />
                                                <div className="item_details">
                                                    <h5 style={{marginTop:"10px"}}>{e.title.longTitle}</h5>
                                                    <h5 style={{marginTop:"15px"}}>{e.title.shortTitle}</h5>
                                                    <h3 className="diffrentprice"> ₹{e.price.cost} </h3>
                                                    <p className="unusuall" style={{marginTop:"15px"}}>Usually dispatched in 8 days.</p>
                                                    <p style={{marginTop:"15px"}}>Eligible for FREE Shipping</p>
                                                    <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />
                                                    <Option deletedata={e.id} get={getdatabuy} />
                                                </div>
                                                <h4 className="item_price">₹{e.price.cost}</h4>
                                            </div>
                                            <Divider />
                                        </>
                                    )
                                })
                            }

                            
                            <Subtotal iteam={cartdata}/>
                        </div>

                        <Right iteam={cartdata} />
                    </div>
                </div> : ""
            }
        </>
    );
}

export default BuyNow;