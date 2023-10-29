import React, { useEffect } from "react";
import css from "./product.module.css";
import PhotoGallery from "../../components/productDetailsComps/photoGallery";
import ProductReview from "../../components/productDetailsComps/productReview";
import {
    FaFilter,
    FaStar,
    FaMinus,
    FaPlus,
    FaRegHeart,
    FaTruckFast,
    FaRepeat,
} from "react-icons/fa6";

function ProductDetails() {

    useEffect(()=>{
        var toggelButtons = document.getElementsByClassName("toggel");
        var toggelPages = document.querySelectorAll("div[id*='tab-pane-']");
    
        for (var i = 0; i < toggelButtons.length; i++) {
            toggelButtons[i].addEventListener("click", switchPages);
            // Add a custom data attribute to store the index
            toggelButtons[i].setAttribute("button-index", i);
        }
    
        function switchPages(e) {
            var button = e.target;
            // Get the index from the data attribute
            var index = button.getAttribute("button-index");
    
            for (var i = 0; i < toggelButtons.length; i++) {
                toggelButtons[i].classList.remove("border-bottom-0", "border");
                toggelButtons[i].classList.add("border-bottom");
                toggelPages[i].classList.add("d-none");
            }
            button.classList.add("border-bottom-0", "border");
            button.classList.remove("border-bottom");
            toggelPages[index].classList.remove("d-none");
        }
    }, [])

   

    return (
        <>
            <div
                className="d-flex col row justify-content-center col-12"
                style={{ top: "70px", position: "relative" }}
            >
                {/* <!-- PRODUCT PART --> */}
                <div
                    className="product row d-flex col-md-10 justify-content-between m-0 p-0"
                    style={{ top: "100px" }}
                >
                    {/* <!-- IMAGE PART --> */}
                    <PhotoGallery className="col-6 border rounded-4  shadow p-0" />
                    {/* <!-- DETAILS PART --> */}
                    <div className="product_details col-md-5 ps-5 align-content-between">
                        <div className="fw-bold h5">
                            <p>Havic HV G-92 Gamepad</p>
                            <div
                                className="text-secondary h6"
                                style={{ fontSize: "small" }}
                            >
                                <FaStar className="text-warning" />
                                <FaStar className="text-warning" />
                                <FaStar className="text-warning" />
                                <FaStar className="text-warning" />
                                <FaStar />

                                <span className="mx-2">(160 Review)</span>

                                <div className="vr mx-2"></div>

                                <a
                                    href="#"
                                    className="btn text-primary m-0 mx-2 p-0"
                                >
                                    in stock
                                </a>
                            </div>
                            <p className="fw-normal fs-4">$192.00</p>
                            <p className="fw-medium fs-6">
                                PlayStation 5 Controller Skin High quality vinyl
                                with air channel adhesive for easy bubble free
                                install & mess free removal Pressure sensitive.
                            </p>
                        </div>
                        <hr className="w-100" />

                        <div className="">
                            <div className="mb-4">
                                <span className="me-3">Colours: </span>
                                <label htmlFor="color">
                                    <input
                                        className="form-check-input me-2 fs-5"
                                        style={{ backgroundColor: "red" }}
                                        type="radio"
                                        name="color"
                                        id="color1"
                                        value="red"
                                    />
                                </label>
                                <label htmlFor="color" className="me-3">
                                    <input
                                        className="form-check-input me-2 fs-5"
                                        style={{ backgroundColor: "black" }}
                                        type="radio"
                                        name="color"
                                        id="color1"
                                        value="black"
                                    />
                                </label>
                            </div>

                            <div className="mb-4">
                                <span className="me-3">Size: </span>
                                <div
                                    className="btn-group"
                                    role="group"
                                    aria-label="Basic radio toggle button group"
                                >
                                    <div
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                        className={`btn ${css.myBtn} ${css.myBtnDisabled} rounded-1 me-3 fw-semibold fs-6 p-3 shadow-sm text-secondary`}
                                    >
                                        <input
                                            type="radio"
                                            className="btn-check"
                                            name="btnradio"
                                            id="btnradio1"
                                            autoComplete="off"
                                        />
                                        <label
                                            className="m-3"
                                            htmlFor="btnradio1"
                                        >
                                            {" "}
                                            S{" "}
                                        </label>
                                    </div>
                                    <div
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                        className={`btn ${css.myBtn} ${css.myBtnDisabled} rounded-1 me-3 fw-semibold fs-6 p-3 shadow-sm text-secondary`}
                                    >
                                        <input
                                            type="radio"
                                            className="btn-check"
                                            name="btnradio"
                                            id="btnradio1"
                                            autoComplete="off"
                                        />
                                        <label
                                            className="m-3"
                                            htmlFor="btnradio1"
                                        >
                                            {" "}
                                            M{" "}
                                        </label>
                                    </div>
                                    <div
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                        className={`btn ${css.myBtn} ${css.myBtnDisabled} rounded-1 me-3 fw-semibold fs-6 p-3 shadow-sm text-secondary`}
                                    >
                                        <input
                                            type="radio"
                                            className="btn-check"
                                            name="btnradio"
                                            id="btnradio1"
                                            autoComplete="off"
                                        />
                                        <label
                                            className="m-3"
                                            htmlFor="btnradio1"
                                        >
                                            {" "}
                                            L{" "}
                                        </label>
                                    </div>
                                    <div
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                        className={`btn ${css.myBtn} ${css.myBtnDisabled} rounded-1 me-3 fw-semibold fs-6 p-3 shadow-sm text-secondary`}
                                    >
                                        <input
                                            type="radio"
                                            className="btn-check"
                                            name="btnradio"
                                            id="btnradio1"
                                            autoComplete="off"
                                        />
                                        <label
                                            className="m-3"
                                            htmlFor="btnradio1"
                                        >
                                            {" "}
                                            XL{" "}
                                        </label>
                                    </div>
                                    <div
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                        className={`btn ${css.myBtn} ${css.myBtnDisabled} rounded-1 me-3 fw-semibold fs-6 p-3 shadow-sm text-secondary`}
                                    >
                                        <input
                                            type="radio"
                                            className="btn-check"
                                            name="btnradio"
                                            id="btnradio1"
                                            autoComplete="off"
                                        />
                                        <label
                                            className="m-3"
                                            htmlFor="btnradio1"
                                        >
                                            {" "}
                                            XXL{" "}
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="wrapDiv mb-4 d-flex">
                                <div
                                    className="btn-group inc-dec w-50"
                                    role="group"
                                    aria-label="Basic outlined example"
                                >
                                    <button
                                        type="button"
                                        className={`btn ${css.myBtn}`}
                                    >
                                        <FaMinus />
                                    </button>
                                    <button
                                        type="button"
                                        className="btn w-50 border bg-white px-4"
                                    >
                                        1
                                    </button>
                                    <button
                                        type="button"
                                        className={`btn ${css.myBtn}`}
                                    >
                                        <FaPlus />
                                    </button>
                                </div>
                                <div className="nomargin d-flex">
                                    <button
                                        type="button"
                                        className={`${css.myBtn} buynow mx-2`}
                                    >
                                        Buy Now
                                    </button>
                                    {/* <!-- heart button --> */}
                                    <a
                                        type="button"
                                        className={`btn ${css.myBtnDisabled} clo-12`}
                                    >
                                        <FaRegHeart />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- two reqtangulars shipping & return --> */}
                        <div className="d-flex flex-column rec">
                            <div className="row col-12 border ms-1 py-3 px-1 align-items-center">
                                <div className="col-2 fs-4 px-1 mx-1 text-center">
                                    <FaTruckFast />
                                </div>
                                <div className="col p-0">
                                    <h5>Free Delivery</h5>
                                    <a
                                        href="#"
                                        className="text-dark m-0"
                                        style={{ fontSize: "x-small" }}
                                    >
                                        Enter your postal code for Delivery
                                        Availability
                                    </a>
                                </div>
                            </div>
                            <div className="row col-12 border ms-1 py-3 px-1 align-items-center">
                                <div className="col-2 fs-4 px-1 mx-1 text-center">
                                    <FaRepeat />
                                </div>
                                <div className="col p-0">
                                    <h5>Return Delivery</h5>
                                    <p
                                        className="mb-1"
                                        style={{ fontSize: "x-small" }}
                                    >
                                        Enter your postal code for Delivery
                                        Availability
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- DETAILS PART --> */}
                <div
                    className={`${css.details} product row d-flex col-md-10 justify-content-center m-0 p-0`}
                >
                    <div className="row col-10">
                        <button
                            // href="#tab-pane-1"
                            className="toggel btn pb-2 mb-4 text-danger border-bottom rounded-bottom-0 col"
                        >
                            Product Details
                        </button>
                        <button
                            // href="#tab-pane-2"
                            className="toggel btn pb-2 mb-4 text-danger rounded-bottom-0 border-bottom-0 col border"
                        >
                            Ratings & Reviews
                        </button>
                        <button
                            // href="#tab-pane-3"
                            className="toggel btn pb-2 mb-4 text-danger border-bottom rounded-bottom-0 col"
                        >
                            FAQs
                        </button>
                    </div>

                    <div className="container">
                        <div className="container col-12 justify-content-center">
                            <div id="tab-pane-1" className="d-none">
                                <div className="tab-headding pb-4">
                                    <h2 className="d-inline">
                                        Product Description
                                    </h2>
                                </div>
                                <div className="tab-body">
                                    <p>
                                        Eos no lorem eirmod diam diam, eos elitr
                                        et gubergren diam sea. Consetetur vero
                                        aliquyam invidunt duo dolores et duo
                                        sit. Vero diam ea vero et dolore rebum,
                                        dolor rebum eirmod consetetur invidunt
                                        sed sed et, lorem duo et eos elitr,
                                        sadipscing kasd ipsum rebum diam. Dolore
                                        diam stet rebum sed tempor kasd eirmod.
                                        Takimata kasd ipsum accusam sadipscing,
                                        eos dolores sit no ut diam consetetur
                                        duo justo est, sit sanctus diam tempor
                                        aliquyam eirmod nonumy rebum dolor
                                        accusam, ipsum kasd eos consetetur at
                                        sit rebum, diam kasd invidunt tempor
                                        lorem, ipsum lorem elitr sanctus eirmod
                                        takimata dolor ea invidunt.
                                    </p>
                                    <p>
                                        Dolore magna est eirmod sanctus dolor,
                                        amet diam et eirmod et ipsum. Amet
                                        dolore tempor consetetur sed lorem dolor
                                        sit lorem tempor. Gubergren amet amet
                                        labore sadipscing clita clita diam
                                        clita. Sea amet et sed ipsum lorem elitr
                                        et, amet et labore voluptua sit rebum.
                                        Ea erat sed et diam takimata sed justo.
                                        Magna takimata justo et amet magna et.
                                    </p>
                                </div>
                            </div>
                            <div id="tab-pane-2" className="">
                                <div className="tab-headding pb-4 d-flex justify-content-sm-between justify-content-center flex-sm-row flex-column">
                                    <h2 className="d-inline">
                                        Reviews
                                        <span
                                            id="review-count"
                                            className="fs-6 text-secondary"
                                        >
                                            (24)
                                        </span>
                                    </h2>
                                    <div className="d-flex">
                                        <button
                                            className={`btn ${css.myBtnDisabled} rounded-circle`}
                                        >
                                            <FaFilter />
                                        </button>
                                        <select
                                            className={`btn ${css.myBtnDisabled} border-1 rounded-pill mx-3`}
                                            aria-label="Default select example"
                                        >
                                            <option defaultValue>Latest</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <button
                                            className={`btn ${css.myBtn} rounded-pill fs-6 px-3`}
                                        >
                                            Write a Review
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className={`${css["reviews-individuals"]} d-flex flex-md-row flex-column flex-wrap justify-content-center`}
                                >
                                    < ProductReview />
                                    < ProductReview />
                                    < ProductReview />
                                    < ProductReview />
                                    < ProductReview />
                                    < ProductReview />
                                </div>
                            </div>
                            <div id="tab-pane-3" className="d-none">
                                <h2 className="mb-4">FAQs</h2>
                                <div className="qustion">
                                    <p className="qustion fw-bold">
                                        Eos no lorem eirmod diam diam, eos
                                        elitr?
                                    </p>
                                    <p className="answer">
                                        Eos no lorem eirmod diam diam, eos elitr
                                        et gubergren diam sea. Consetetur vero
                                        aliquyam invidunt duo
                                    </p>
                                </div>
                                <div className="qustion">
                                    <p className="qustion fw-bold">
                                        Eos no lorem eirmod diam diam, eos
                                        elitr?
                                    </p>
                                    <p className="answer">
                                        Eos no lorem eirmod diam diam, eos elitr
                                        et gubergren diam sea. Consetetur vero
                                        aliquyam invidunt duo
                                    </p>
                                </div>
                                <div className="qustion">
                                    <p className="qustion fw-bold">
                                        Eos no lorem eirmod diam diam, eos
                                        elitr?
                                    </p>
                                    <p className="answer">
                                        Eos no lorem eirmod diam diam, eos elitr
                                        et gubergren diam sea. Consetetur vero
                                        aliquyam invidunt duo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Related Products PART --> */}

                <div
                    id="carouselMultiItemExample"
                    className="carousel slide carousel-dark text-center mt-4 py-3 border rounded-3 col-10"
                    data-mdb-ride="carousel"
                >
                    {/* <!-- Controls --> */}
                    <div className="d-flex justify-content-center mb-4">
                        <button
                            className="carousel-control-prev position-relative"
                            type="button"
                            data-mdb-target="#carouselMultiItemExample"
                            data-mdb-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next position-relative"
                            type="button"
                            data-mdb-target="#carouselMultiItemExample"
                            data-mdb-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/* <!-- Inner --> */}
                    <div className="carousel-inner py-4">
                        {/* <!-- Single item --> */}
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp"
                                                className="card-img-top"
                                                alt="Waterfall"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Card title
                                                </h5>
                                                <p className="card-text">
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
                                                </p>
                                                <a
                                                    href="#!"
                                                    className="btn btn-primary"
                                                >
                                                    Button
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 d-none d-lg-block">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
                                                className="card-img-top"
                                                alt="Sunset Over the Sea"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Card title
                                                </h5>
                                                <p className="card-text">
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
                                                </p>
                                                <a
                                                    href="#!"
                                                    className="btn btn-primary"
                                                >
                                                    Button
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 d-none d-lg-block">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp"
                                                className="card-img-top"
                                                alt="Sunset over the Sea"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Card title
                                                </h5>
                                                <p className="card-text">
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
                                                </p>
                                                <a
                                                    href="#!"
                                                    className="btn btn-primary"
                                                >
                                                    Button
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single item --> */}
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                                                className="card-img-top"
                                                alt="Fissure in Sandstone"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Card title
                                                </h5>
                                                <p className="card-text">
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
                                                </p>
                                                <a
                                                    href="#!"
                                                    className="btn btn-primary"
                                                >
                                                    Button
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 d-none d-lg-block">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/185.webp"
                                                className="card-img-top"
                                                alt="Storm Clouds"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Card title
                                                </h5>
                                                <p className="card-text">
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
                                                </p>
                                                <a
                                                    href="#!"
                                                    className="btn btn-primary"
                                                >
                                                    Button
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 d-none d-lg-block">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/186.webp"
                                                className="card-img-top"
                                                alt="Hot Air Balloons"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Card title
                                                </h5>
                                                <p className="card-text">
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
                                                </p>
                                                <a
                                                    href="#!"
                                                    className="btn btn-primary"
                                                >
                                                    Button
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single item --> */}
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/187.webp"
                                                className="card-img-top"
                                                alt="Peaks Against the Starry Sky"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Card title
                                                </h5>
                                                <p className="card-text">
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
                                                </p>
                                                <a
                                                    href="#!"
                                                    className="btn btn-primary"
                                                >
                                                    Button
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/188.webp"
                                                className="card-img-top"
                                                alt="Bridge Over Water"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Card title
                                                </h5>
                                                <p className="card-text">
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
                                                </p>
                                                <a
                                                    href="#!"
                                                    className="btn btn-primary"
                                                >
                                                    Button
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                                        <div className="card">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/189.webp"
                                                className="card-img-top"
                                                alt="Purbeck Heritage Coast"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Card title
                                                </h5>
                                                <p className="card-text">
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card&apos;s content.
                                                </p>
                                                <a
                                                    href="#!"
                                                    className="btn btn-primary"
                                                >
                                                    Button
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Inner --> */}
                </div>
                {/* <!-- Carousel wrapper --> */}
            </div>
        </>
    );
}

export default ProductDetails;
