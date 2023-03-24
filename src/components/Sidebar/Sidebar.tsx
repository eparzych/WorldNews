import { Link, useParams } from "react-router-dom";
import Flag from "react-world-flags";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import countryList from "../../app/countries.json";
import "./sidebar.scss";

export const Sidebar = () => {
    const sidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);
    const {countryCode} = useParams();

    return(
        <div className={`sidebar ${sidebarOpen ? "sidebar--open" : ""}`}>
            <h3 className="country__title">INFORMACJE Z KRAJU</h3>
            <ul className="country__list">
                { countryList.map(country =>
                    <li key={country.code}>
                        <Link to={`/country/${country.code}`} 
                            className={`country__item ${countryCode === country.code ? 'country--active' : ''}`}>
                            <Flag code={country.code} height="18" className="country__flag"/>
                            <span>{country.name}</span>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}