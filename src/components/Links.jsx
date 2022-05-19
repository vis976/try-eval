import React from "react";
// import './LinksStyle.css';

const Links = ({links}) => {
    const list = links.map((ele) => {
        console.log(ele);
        return(
            <>
                <li>{ele}</li>
            </>
        )
    })
    return(
        <ul className="x">
            {list}
        </ul>
    )
}

export default Links;