import {
    MDBBtn,
    MDBCard,
    MDBCardBody,

    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import Cart_card from "../Card/Cart_card";
import React, { useContext } from "react";
import { Context } from "../../../Utils/Context/AppContext";
import { useNavigate } from "react-router-dom";


export default function Basic() {
    const navigate = useNavigate()
    const { cart ,subtotal} = useContext(Context)
    const prodlngth = cart.length
    return (

        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody className="p-4">
                                <MDBRow>
                                    <MDBCol lg="7">
                                        <MDBTypography tag="h5">
                                            <a  className="text-body" onClick={()=>navigate('/')}>
                                                <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                                                shopping
                                            </a>
                                        </MDBTypography>

                                        <hr />

                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <div>
                                                <p className="mb-1">Shopping cart</p>
                                                <p className="mb-0">{`You have ${prodlngth} items in your cart`}</p>
                                            </div>
                                            <div>
                                                <p>
                                                    <span className="text-muted">Sort by:</span>
                                                    <a href="#!" className="text-body">
                                                        price
                                                        <MDBIcon fas icon="angle-down mt-1" />
                                                    </a>
                                                </p>
                                            </div>
                                        </div>



                                        {cart.map((prod) => {
                                            return <Cart_card img={prod.image_source} price={ prod.price} name={prod.product_name } category={ prod.category} qty={prod.Qty } prod={prod} />
                                        })}


                                    </MDBCol>

                                    <MDBCol lg="5">
                                        <MDBCard className="bg-primary text-white rounded-3">
                                            <MDBCardBody>
                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                    <MDBTypography tag="h5" className="mb-0">
                                                        Card details
                                                    </MDBTypography>
                                                   
                                                </div>

                                                <p className="small">Card type</p>
                                                <a href="#!" type="submit" className="text-white">
                                                    <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                                                </a>
                                                <a href="#!" type="submit" className="text-white">
                                                    <MDBIcon fab icon="cc-visa fa-2x me-2" />
                                                </a>
                                                <a href="#!" type="submit" className="text-white">
                                                    <MDBIcon fab icon="cc-amex fa-2x me-2" />
                                                </a>
                                                <a href="#!" type="submit" className="text-white">
                                                    <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                                                </a>

                                                <form className="mt-4">
                                                    <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                                                        placeholder="Cardholder's Name" contrast />

                                                    <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                                                        minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

                                                    <MDBRow className="mb-4">
                                                        <MDBCol md="6">
                                                            <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                                                                minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                                                        </MDBCol>
                                                        <MDBCol md="6">
                                                            <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                                                                maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                                                        </MDBCol>
                                                    </MDBRow>
                                                </form>

                                                <hr />

                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Subtotal</p>
                                                    <p className="mb-2">{`$${subtotal}`}</p>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Shipping</p>
                                                    <p className="mb-2">$20.00</p>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Total(Incl. taxes)</p>
                                                    <p className="mb-2">{`$${subtotal+20}`}</p>
                                                </div>

                                                <MDBBtn color="info" block size="lg">
                                                    <div className="d-flex justify-content-between">
                                                        <span>{`$${subtotal+20}`}</span>
                                                        <span>
                                                            Checkout{" "}
                                                            <i className="fas fa-long-arrow-alt-right ms-2" ></i>
                                                        </span>
                                                    </div>
                                                </MDBBtn>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}