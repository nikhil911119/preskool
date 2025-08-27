import React from "react";
import { Link } from "react-router-dom";
import "../adminDashboard.css";

type Props = {
  icon: React.ReactElement;
  title: string;
  link: string;
  iconcolor?: string;
  iconbg?: string;
};

const EachLink = (props: Props) => {
  return (
    <Link
      className={`each-link flex flex-col items-center justify-center p-[10px] ${props.iconbg} rounded-[5px]`}
      to={props.link}
    >
      <div className={`link-icon  p-[8px] rounded-full ${props.iconcolor} mb-2`}>
        {props.icon}
      </div>
      <div className="link-title">
        <h3>
          <pre>{props.title}</pre>
        </h3>
      </div>
    </Link>
  );
};

export default EachLink;
