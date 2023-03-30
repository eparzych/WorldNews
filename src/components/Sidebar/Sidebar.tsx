import { Link, useParams } from "react-router-dom";
import Flag from "react-world-flags";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import type { RootState } from "../../app/store";
import { closeSidebar } from "../../features/sidebar/sidebarSlice";
import countryList from "../../app/countries.json";
import "./sidebar.scss";

export const Sidebar = () => {
    const sidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);
    const dispatch = useDispatch();
    const {countryCode} = useParams();
    const { t } = useTranslation();

    return(
        <div className={`sidebar ${sidebarOpen ? "sidebar--open" : ""}`}>
            <h3 data-testid="sidebar-title" className="country__title">{t("title")}</h3>
                <ul className="country__list">
                    { countryList.map((country) =>
                        <li key={country}>
                            <Link to={`/country/${country}`}
                                onClick={() => dispatch(closeSidebar())} 
                                className={`country__item ${countryCode === country ? 'country--active' : ''}`}
                            >
                                <Flag code={country} 
                                    height="18" 
                                    className="country__flag"
                                />
                                <span data-testid={`sidebar-country-name-${country}`}>
                                    { t(`country.${country}`) }
                                </span>
                            </Link>
                        </li>
                    )}
                </ul>
        </div>
    )
}
