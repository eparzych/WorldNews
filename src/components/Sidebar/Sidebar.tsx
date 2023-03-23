import React from "react";
import Flag from "react-world-flags";
import { countryList } from "../../app/countries";
import "./sidebar.scss";

export const Sidebar = () => {
    return(
        <div className="sidebar">
            <h3 className="country__title">INFORMACJE Z KRAJU</h3>
            <ul className="country__list">
                { countryList.map(country =>
                    <li key={country.code} className="country__item">
                        <a href="" target="_blank"><Flag code={country.code} height="18" /> {country.name}</a>
                    </li>
                )}
            </ul>
        </div>
    )
}