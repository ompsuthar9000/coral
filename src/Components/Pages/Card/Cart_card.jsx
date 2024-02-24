import React , {useContext} from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBTypography,
} from "mdb-react-ui-kit";
import {Context} from '../../../Utils/Context/AppContext';


const Cart_card = ({img,price,name,category,qty,prod}) => {
  const {removeProductFromCart } = useContext(Context)
  return (
    <MDBCard className="mb-3">
      <MDBCardBody>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div>
              <MDBCardImage
                src={img}
                fluid className="rounded-3" style={{ width: "65px" }}
                alt="Shopping item" />
            </div>
            <div className="ms-3">
              <MDBTypography tag="h5">
              {name}
              </MDBTypography>
              <p className="small mb-0">{category}</p>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center">
            <div style={{ width: "50px" }}>
              <MDBTypography tag="h5" className="fw-normal mb-0">
                {qty}
              </MDBTypography>
            </div>
            <div style={{ width: "80px" }}>
              <MDBTypography tag="h5" className="mb-0">
                {`$${price}`}
              </MDBTypography>
            </div>
            <a href="#!" style={{ color: "#cecece" }} onClick={()=>{removeProductFromCart(prod)}}>
              <MDBIcon fas icon="trash-alt" />
            </a>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  )
}

export default Cart_card