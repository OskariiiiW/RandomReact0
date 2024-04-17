import Ilmottaudu from "./Ilmottaudu";
import React from 'react';
import {useState} from 'react';


function Kiitos(){
    
    const [nimiT, setNimiT] = useState();
    const [SnimiT, setSnimiT] = useState();
    const [kuntaT, setKuntaT] = useState();
    const [numeroT, setNumeroT] = useState();
    const [postiT, setPostiT] = useState();
    const [ikaT, setIkaT] = useState();

    const lisaaNimiT = (e) => {
        setNimiT(e);
    }
    const lisaaSnimiT = (e) => {
        setSnimiT(e);
    }
    const lisaaKuntaT = (e) => {
        setKuntaT(e);
    }
    const lisaaNumeroT = (e) => {
        setNumeroT(e);
    }
    const lisaaPostiT = (e) => {
        setPostiT(e);
    }
    const lisaaIkaT = (e) => {
        setIkaT(e);
    } 

    return (
        <Ilmottaudu tyyli="kiitos" lisaaNimiT={lisaaNimiT}></Ilmottaudu>
    );
}

export default Kiitos;