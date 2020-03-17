import React, {useContext} from "react"
import {Context} from "../Context"
import Image from "../components/Image"
import {getClass} from "../utils"

function Photos() {
    const {pics} = useContext(Context);
    const images = pics.map(pic => <Image className={getClass(pic.id)} key={pic.id} pic={pic} />)
    return (
        <main className="photos">
            {images}
        </main>
    )
}

export default Photos
