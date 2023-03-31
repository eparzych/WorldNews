import { useTranslation } from "react-i18next";
import { CustomModal } from "../Modal/Modal";
import hedgehog from "../../assets/hedgehog.jpg";
import "./modalTask.scss";

interface IProps {
    isOpen: boolean;
    onClose: Function;
}

export const ModalTask = (props: IProps) => {
    const { isOpen, onClose } = props;
    const { t } = useTranslation();

    return (
        <CustomModal
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="aboutMe">
                <div className="aboutMe__text">
                    <h2>{t("aboutMe.title")}</h2> 
                    <p>{t("aboutMe.p1")}</p>
                    <p>{t("aboutMe.p2")}</p>
                    <p>{t("aboutMe.p3")}</p>
                    <p>{t("aboutMe.p4")}</p>
                </div>
                <div className="aboutMe__img">
                    <img src={hedgehog} alt="Przyjazny jeż" className="hedgehog"/>
                </div>
                
            </div>
        </CustomModal>
    );
}
