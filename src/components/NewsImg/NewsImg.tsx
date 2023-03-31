import { CiImageOff } from "react-icons/ci";
import "./newsImg.scss";

interface IProps {
    urlToImage: string;
}

export const NewsImg = (props: IProps) => {
    const { urlToImage} = props;

    return(
        <div className="news-square__img">
        { urlToImage ?
            <img src={urlToImage} alt="picture" />
        :
            <div className="img--not-found">
                <CiImageOff size="90"/>
                <span>Image not found</span>
            </div>
        }
        </div>
    )
}