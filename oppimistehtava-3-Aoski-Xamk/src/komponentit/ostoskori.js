import Content from "./content";

function Ostoskori(props) {
    return(
        (props.tyyli === "eiTuotteita")   //if 1--------------------------------------

        ?<p>Ostoskorissa ei ole tuotteita</p>

        : (props.tyyli === "tuoteMaara")  //if 2--------------------------------------

        ?<p>Ostoskorissa on {props.children} tuotetta,</p>

        : (props.tyyli === "tuoteHinta")  //if 3--------------------------------------

        ? <Content tyyli="kokoHinta">{props.children}</Content>

        : (props.tyyli === "tuoteNappi")  //if 4--------------------------------------

        ? <button
        onClick={ () => {
            alert("Jatketaan tilaukseen...")
        }}
        >Tilaa tuotteet</button>

        : null
    );
}

export default Ostoskori;