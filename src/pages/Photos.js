import React, {useContext} from "react"
import {Context} from "../Context"
import Image from "../components/Image"
import {getClass} from "../utils"

function Photos() {
    const {pics} = useContext(Context);
    console.log({pics});
    return (
        <main className="photos">
            <h1>Images go here</h1>
        </main>
    )
}

export default Photos
