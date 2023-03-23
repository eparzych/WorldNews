import React from "react";
import "./newsSquare.scss";

export const NewsSquare = () => {
    return(
        <article className="news-square">
            <div className="news-square__img">miniaturka(jeśli występuje)</div>
            <div className="news-square__content">
                <h2 className="content__title">Tytuł artykułu</h2>
                <p className="content__subtitle">nazwa źródła</p>
                <p className="content__date">data publikacji</p>
                <div className="content__text">zajawka Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, sed? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eligendi rem, debitis, nemo consectetur deleniti aut enim soluta cumque sit esse adipisci sequi natus. Aliquid obcaecati unde, vel animi quae mollitia dignissimos doloremque est repudiandae laudantium quasi optio nam veritatis assumenda. Iste earum temporibus non? Ea neque itaque commodi odit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptate minima quae, sequi labore nesciunt pariatur cupiditate tenetur laborum rerum enim nostrum cum eligendi, quo perspiciatis, mollitia nobis cumque doloribus? Commodi sed, odio unde aspernatur tenetur amet necessitatibus facilis possimus porro consequatur veritatis cupiditate mollitia a molestias voluptatum non voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, harum aut libero tenetur voluptate officiis, quibusdam perferendis maiores nam inventore deserunt. At, minima voluptates sit fugit iure possimus incidunt. Atque minima soluta nobis nihil? Doloremque ipsa harum praesentium adipisci porro? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio quis sint doloribus delectus aliquid, sequi tempora dolore illum excepturi ut accusamus et ea in molestiae obcaecati odio a, numquam recusandae! </div>
            </div>
        </article>
    )
}