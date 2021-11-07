import React from "react";

const Card = (props) => {
  const {
    title,
    price,
    users,
    storage,
    publicProjects,
    communityAccess,
    privateProjects,
    phoneSupport,
    subdomain,
    statusReport,
  } = props.type;

  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {title}
          </h5>
          <h6 className="card-price text-center">
            ${price}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {users.boldFlag ? <b>{users.title}</b> : users.title}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {storage}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {publicProjects}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {communityAccess}
            </li>
            <li className={privateProjects.flag ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={
                    privateProjects.flag ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>
              {privateProjects.title}
            </li>
            <li className={phoneSupport.flag ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={
                    phoneSupport.flag ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>
              {phoneSupport.title}
            </li>
            <li className={subdomain.flag ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={subdomain.flag ? "fas fa-check" : "fas fa-times"}
                ></i>
              </span>
              {subdomain.subTitle ? (
                <span className="bold-title">
                  <b>{subdomain.subTitle} </b>
                  {subdomain.title}
                </span>
              ) : (
                subdomain.title
              )}
            </li>
            <li className={statusReport.flag ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={
                    statusReport.flag ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>
              {statusReport.title}
            </li>
          </ul>
          <div className="d-grid">
            <a href="/" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
