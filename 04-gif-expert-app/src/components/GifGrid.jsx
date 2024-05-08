import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    useEffect( () => {
        getGifs( category );
    }, [ ]);  
    

    return (
        <>
            {/* <div key={ category }> */}
                  <h3>{ category }</h3>
                  {/* {getGifs.map(gif => <p>{ gif }</p>)} */}
            {/* </div>         */}
        </>
    )
}

