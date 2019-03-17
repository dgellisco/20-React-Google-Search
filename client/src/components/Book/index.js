import React from "react";
import "./style.css";
import { ListItem } from "../List";

const Book = ({
  title,
  subtitle,
  authors,
  link,
  description,
  image,
  Button
}) => {
  

  return (
    <ListItem>
      <div className="media-snippet">
        <article className="media">
          <figure className="media-left">
            <p>
              <img className="image is-128xauto" src={image} alt={title} />
            </p>
          </figure>
          <div className="media-content">
            <h3 className="heading-title">{title}</h3>
            {subtitle && <h5 className="heading-subtitle">{subtitle}</h5>}
            <p className="heading-subtitle">by {authors}</p>
            <p className="p-article">{description}</p>
            <div className="d-flex flex-row bd-highlight mb-3">
              <div>
                <a
                  href={link}
                  className="btn"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <div>
                <Button />
              </div>
            </div>
          </div>
        </article>
      </div>
    </ListItem>
  );
};

export default Book;
