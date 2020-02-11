import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loading from "../Misc/Loading/Loading";
import NotFound from "../Misc/NotFound/NotFound";

export default class Store extends Component {
  renderStores = (stores, radius) =>
    stores === null ? (
      <Loading />
    ) : stores.length < 1 ? (
      <NotFound type="store" />
    ) : (
      <div className="card-columns products my-2">
        {stores.map((store, i) => (
          <div
            className={`card ${
              radius > 0 ? "rounded-circle" : ""
            } mb-4 product rounded shadow-sm border-0`}
            key={i}
          >
            <div className="card-body px-0 py-4">
              {/* <img
            className="card-img rounded-top p-0"
            src={store.src}
            alt="product"
          /> */}
              <div className=" text-center px-3">
                <p className="lead font-weight-bold mb-0 text-truncate text-capitalize flex-grow-1">
                  {store.name}
                </p>
                <Link to={`/stores/?id=${store._id}`}>
                  <button className="btn btn-white text-primary ">Visit</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  render() {
    let { stores, radius, title } = this.props;

    return (
      <div className="container my-3 text-center">
        <h4 className="text-left text-capitalize">{title}</h4>
        {this.renderStores(stores, radius)}
      </div>
    );
  }
}