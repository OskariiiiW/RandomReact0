import tpaita from './paita.png';
import tpaita2 from './paita2.png';
import tpaita3 from './paita3.png';
import tpaita4 from './paita4.png';
import tpaita5 from './paita5.png';
import tpaita6 from './paita6.png';

function Content(props){

    return(
        (props.tyyli === "keltainen")

        ?<div className="paita-div">
        <img className="paidat"
            alt = "paita"
            src={tpaita}>
        </img>

        <p className="esityHinta">12 e</p>

        <button
      onClick={() => {
        props.lisaaHinta(12);
        props.lisaaYhteissummaan();
      }}
      >{props.children}
        </button>
        </div>

        : (props.tyyli === "vihrea")


        ?<div className="paita-div">
        <img className="paidat"
            alt = "paita"
            src={tpaita2}>
        </img>

        <p className="esityHinta">15 e</p>

        <button
      onClick={() => {
        props.lisaaHinta(15);
        props.lisaaYhteissummaan();
      }}
      >{props.children}
        </button>
        </div>

        : (props.tyyli === "punainen")

        ?<div className="paita-div">
        <img className="paidat"
            alt = "paita"
            src={tpaita3}>
        </img>

        <p className="esityHinta">9 e</p>

        <button
      onClick={() => {
        props.lisaaHinta(9);
        props.lisaaYhteissummaan();
      }}
      >{props.children} 
        </button>
        </div>

        : (props.tyyli === "cyan")

        ?<div className="paita-div">
        <img className="paidat"
            alt = "paita"
            src={tpaita4}>
        </img>

        <p className="esityHinta">24 e</p>

        <button
      onClick={() => {
        props.lisaaHinta(24);
        props.lisaaYhteissummaan();
      }}
      >{props.children}
        </button>
        </div>

        : (props.tyyli === "harmaa")

        ?<div className="paita-div">
        <img className="paidat"
            alt = "paita"
            src={tpaita5}>
        </img>

        <p className="esityHinta">18 e</p>

        <button
      onClick={() => {
        props.lisaaHinta(18);
        props.lisaaYhteissummaan();
      }}
      >{props.children}
        </button>
        </div>

        : (props.tyyli === "musta")

        ?<div className="paita-div">
        <img className="paidat"
            alt = "paita"
            src={tpaita6}>
        </img>

        <p className="esityHinta">30 e</p>

        <button
      onClick={() => {
        props.lisaaHinta(30);
        props.lisaaYhteissummaan();
      }}
      >{props.children}
        </button>
        </div>

        : (props.tyyli === "kokoHinta")

        ?<p>loppusumma {props.children} e</p>

        : null

        
    );
}

export default Content;