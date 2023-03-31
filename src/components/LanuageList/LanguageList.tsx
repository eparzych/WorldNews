import {useState} from "react";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import "./languageList.scss";


export const LanguageList = () => {
    const [ isOpen, setOpen ] = useState(false);
    const { i18n } = useTranslation();

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        const languageCode = e.currentTarget.dataset.value;
        i18n.changeLanguage(languageCode);
        setOpen(false);
    }

    return(
    <ul className="langList">
        <li className="language-selected" onClick={() => setOpen(!isOpen)}>
            <span>{ i18n.resolvedLanguage }</span>
        </li>
        <ul className={"drop-menu" + (isOpen ? " list-open" : "")}>
            <li key="pl" data-value="pl" className="drop-item" onClick={handleClick}>
                <p className="item">
                    <Flag code={"pl"} 
                        height="18" 
                        className="country-flag"
                    />
                </p>
            </li>
            <li key="us" data-value="en" className="drop-item" onClick={handleClick}>
                <p className="item last">
                    <Flag code={"us"} 
                        height="18" 
                        className="country-flag"
                    />
                </p>
            </li>

        </ul>
    </ul>
    )
}