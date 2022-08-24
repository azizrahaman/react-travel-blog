import React from "react";
import { TbWorld } from 'react-icons/tb';


export default function Topbar() {
    return (
        <div className="topbar--wrapper">
            <TbWorld  className="top--icon"/>  
            <span className="top--slogan">&nbsp;my travel journal.</span>
        </div>
    )
}