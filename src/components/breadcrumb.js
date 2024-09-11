import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
function Breadcrumb() {
  const {pathname} = useLocation();
  const breadcrumb = pathname;
  const breadcrumbList = breadcrumb.split("/").filter((item) => item !== "");
  if (breadcrumbList.length > 0) {
    breadcrumbList.unshift("Home");
  }
  console.log(breadcrumbList);
  return (
    <div className="mainbreadcrumnlist">
      {breadcrumbList.map((link, i) => {
        return (
          <div key={i}>
            {breadcrumbList.length === i + 1 ? (
              <span>{link}</span>
            ) : (
              <Link to={link === "Home" ? "/" : `/${link}`} className="link">
                {`${link} /`}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Breadcrumb;
