import React from "react";
import { Link } from "react-router-dom";
import Flag from "react-world-flags";
import countryList from "../../app/countries.json";
import "./sidebar.scss";
import type { RootState } from '../../app/store'
import { useSelector } from 'react-redux'

export const Sidebar = () => {
    const sidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen)

    return(
        <div className={`sidebar ${sidebarOpen ? "sidebar--open" : ""}`}>
            <h3 className="country__title">INFORMACJE Z KRAJU</h3>
            <ul className="country__list">
                { countryList.map(country =>
                    <li key={country.code} >
                        <Link to={`/country/${country.code}`} className="country__item">
                            <Flag code={country.code} height="18" className="country__flag"/>
                            <span>{country.name}</span>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}