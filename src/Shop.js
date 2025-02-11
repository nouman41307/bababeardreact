import React, { useState } from "react";
import { Container, Col, Row, Modal } from "react-bootstrap";
import "./Style/Shop.css";
 
import SilverLogo from "./Content/PNG/SilverLogo.png";
import NavbarLogo from "./Content/PNG/Silver.png";
import LoginAvatar from "./Content/PNG/loginavatar.png";
import SocialMediaLogo1 from "./Content/PNG/FacebookLogo.png";
import SocialMediaLogo2 from "./Content/PNG/InstaLogo.png";
import SocialMediaLogo3 from "./Content/PNG/TwitterLogo.png";
import ActivateVariant from "./Content/PNG/ActivateW.R..png";
import FillPatchesVariant from "./Content/PNG/FillPatchesW.R..png";
import NourishVariant from "./Content/PNG/ActivateW.R..png";
import Footer from "./Components/Footer"
function Shop() {
  const [activate, setActivate] = useState(false);
  const [fillpatches, setFillPatches] = useState(false);
  const [nourish, setNourish] = useState(false);
  return (
    <div>
      <Container>
        <div className="dvshop1">Beard Oil Variants</div>
        <hr />
      </Container>
      <Container fluid>
        <Row>
          <div className="col-lg-12 col-sm-12 col-md-12">
            <div className="IngredientTitle">Products</div>
<hr/>
          </div>
        </Row>
      </Container>
   
     
          
      <Container>
        <Row className="justify-content-center">
        <Col lg={4} xl={4} md={6} sm={8} xs={8} className="dvshoping1">
            <div className="dvshopfont1">Activate - Arvore Aquilaria </div>
            <img className="dv9shopingimg1" src={ActivateVariant} />
            
            <div className="Ingredientimgoverlay Ingredientimgoverlay--blur">
              <div className="dv9imgshopdescription">
                <button className="btnshop1" onClick={() => setActivate(true)}>
                  Quick View <br />
                  <i className="fa fa-eye"></i>
                </button>
              </div>
              
            </div>
            
            <button className="btnshop2" onClick={() => setActivate(true)}>
                  Quick View  
                  
                </button>
            
            <Modal
              size="lg"
              show={activate}
              onHide={() => setActivate(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                Activate - Beard Oil
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div className="row">
                      <div className="col-lg-6 col-sm-12 col-md-6">
                        <img className="dv9shopingimg1" src={ActivateVariant} />
                      </div>
                      <div className="col-lg-6 col-sm-12 col-md-6">
                        <div className="fontproduct">Activate - Beard Oil</div>
                        <hr />
                        <div className="fontprice">Rs 799.00</div>
                        <hr />
                        <div>
                        Those who lack beard hair follicles, need a product that can stimulate growth of hair
                                            follicles and get absorbed in the skin to facilitate beard growth.
                                       <br/>     Our Arvore aquilaria Activating Oil contains Eucalyptus oil which is one of the best
                                            oils to accelerate beard growth and
                        </div>
                        <hr />
                        <div>
                          <a href="#">View Full Details</a>
                        </div>
                      </div>
                    </div>
              </Modal.Body>
            </Modal>
            
          </Col>
           <Col lg={4} xl={4} md={6} sm={8} xs={8} className="dvshoping2">
            <div className="dvshopfont1">Fill Patches - Grama Fresca</div>
            <img className="dv9shopingimg1" src={FillPatchesVariant} />
            <div className="Ingredientimgoverlay Ingredientimgoverlay--blur">
              <div className="dv9imgshopdescription">
                <button
                  className="btnshop1"
                  data-toggle="modal"
                  data-target="#fillpatches"
                  onClick={() => setFillPatches(true)} 
                >
                  Quick View <br /> <i className="fa fa-eye"></i>
                </button>
              </div>
            </div>
            <button className="btnshop2" onClick={() => setFillPatches(true)}>
                  Quick View  
                  
                </button>
          <Modal
              size="lg"
              show={fillpatches}
              onHide={() => setFillPatches(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                Fill Patches - Grama Fresca
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div className="row">
                      <div className="col-lg-6 col-sm-12 col-md-6">
                        <img className="dv9shopingimg1" src={FillPatchesVariant} />
                      </div>
                      <div className="col-lg-6 col-sm-12 col-md-6">
                        <div className="fontproduct">Fill Patches - Grama Fresca</div>
                        <hr />
                        <div className="fontprice">Rs 799.00</div>
                        <hr />
                        <div>
                        Grama Fresca Oil for filling patches of beard, helps to make your beard complete by
                                            removing patches off your beard.
                                            <br/>Having Tea tree Oil, Fill patches Oil helps to unclog pores, protect facial hair, and
                                            stimulate facial hair growth by absorbing in skin fastly.
                        </div>
                        <hr />
                        <div>
                          <a href="#">View Full Details</a>
                        </div>
                      </div>
                    </div>
              </Modal.Body>
            </Modal>
          </Col>
         

          <Col lg={4} xl={4} md={6} sm={8} xs={8} className="dvshoping3">
            <div className="dvshopfont1">Nourish -  Serien Epice</div>
            <img className="dv9shopingimg1" src={NourishVariant} />
            <div className="Ingredientimgoverlay Ingredientimgoverlay--blur">
              <div className="dv9imgshopdescription">
                <button
                  className="btnshop1"
                  data-toggle="modal"
                  data-target="#nourish"
                  onClick={() => setNourish(true)}
                >
                  {" "}
                  Quick View <br /> <i className="fa fa-eye"></i>
                </button>
              </div>
            </div>
            <button className="btnshop2" onClick={() => setNourish(true)}>
                  Quick View  
                  
                </button>
          <Modal
              size="lg"
              show={nourish}
              onHide={() => setNourish(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                Nourish - Serien Epice
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Row>
                    <div className="col-lg-6 col-sm-12 col-md-6">
                      <img className="dv9shopingimg1" src={NourishVariant} />
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6">
                      <div className="fontproduct">Nourish - Beard Oil</div>
                      <hr />
                      <div className="fontprice">Rs 799.00</div>
                      <hr />
                      <div>
                      To tame the mane you proudly own, you need some whip in the form of Our Serein
                                            epic Nourishing Oil.
                                            Our Nourish Oil is a blend of Premium quality organic carrier oils, 
                                            essential oils and with an aroma of organic musk to make the beard soft, shiny and flaky.
                                            
                      </div>
                      <hr />
                      <div>
                        <a href="#">View Full Details</a>
                      </div>
                    </div>
                  </Row>
              </Modal.Body>
            </Modal>
          </Col>
          <div className="modal fade dvmodal" id="nourish">
            <div className="modal-dialog  modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-body">
                 
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>

<Footer/>


      
    </div>
  );
}

export default Shop;
