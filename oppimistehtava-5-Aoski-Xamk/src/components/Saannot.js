import {Container, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    otsikko : {fontSize: 22, textAlign: "center", marginTop: 10, marginBottom:20},

    kappale : {fontSize: 14, marginBottom: 10}

});

function Saannot(){

    const tyylit = useStyles();

    return(
        <Container>
        <Typography className={tyylit.otsikko}>Säännöt</Typography>

        <Typography className={tyylit.kappale}><b>1 §</b> Suomen pilkkimestaruuskilpailut ovat avoimet kaikille pilkinnän harrastajille.</Typography>

        <Typography className={tyylit.kappale}><b>2 §</b> Henkilökohtaisista mestaruuksista kilpailevat kaikki kilpailuun ilmoittautuneet kilpailijat, mutta Suomenmestaruus voidaan myöntää vain Suomen kansalaiselle, Suomessa vakituisesti asuvalle tai sellaiselle ulkomaalaiselle, joka on SVK:n tai sen jäsenseuran jäsen.</Typography>

        <Typography className={tyylit.kappale}><b>3 §</b> Kilpailujoukkueet ja pelkästään henkilökohtaiseen kilpailuun osallistuvat on ilmoittautumisen yhteydessä nimettävä erikseen. Mahdolliset muutokset ennakolta ilmoitettuihin joukkueisiin on tehtävä kirjallisesti kilpailukansliaan ennen kilpailun alkua järjestäjän ilmoittamaan määräaikaan mennessä. Alle 12-vuotiaiden sarjassa pilkkivällä nuorella voi olla tukihenkilö. Tukihenkilö saa antaa kairausapua ja avustaa kalan irrottamisessa koukusta, mutta ei muuten fyysisesti osallistua pilkkimiseen. Tukihenkilö voi osallistua oman sarjansa kilpailuun. Saaliskaloja ei saa antaa tai vaihtaa nuoren ja tukihenkilön – tai kenenkään muunkaan henkilön – välillä.</Typography>

        <Typography className={tyylit.kappale}><b>4 §</b> Suomen Vapaa-ajankalastajien Keskusjärjestön hallitus vahvistaa vuosittain kilpailun osanottomaksut.</Typography>

        <Typography className={tyylit.kappale}><b>5 §</b> Pilkkiminen on jokamiehenoikeus. Pilkkijöiden ei tarvitse maksaa kalastonhoitomaksua. Kilpailujen järjestäjällä on aina oltava kalavedenomistajan lupa.
        <b>Kisa-alueeksi ja sallituiksi kulkureiteiksi (ellei järjestäjä toisin ohjeista) lasketaan aina virallisissa maanmittauslaitoksen kartoissa näkyvät sinisellä vesialueiksi merkityt kohdat, vaikka vedenpinta sattuisikin olemaan hetkellisesti niin matalalla, että kohta on kuivilla tai vaikka kohdan päällä olisi kelluva suolautta.</b></Typography>

        <Typography className={tyylit.kappale}><b>6 §</b> Kilpailuaika on neljä (4) tuntia. Kilpailijat saavat siirtyä kilpailualueelle noin tuntia ennen kilpailun alkua suoritetun selostus- ja avajaistilaisuuden jälkeen lähtöluvan saatuaan. Varsinaisen kilpailun alkamis- ja päättymishetki osoitetaan selvällä merkillä. Kilpailijoiden on lopetettava kalastaminen päättymismerkkiin, jonka jälkeen heillä on tunti aikaa siirtyä merkitylle maalialueelle.<b> Hyväksyttävän saaliskalan on oltava kokonaan ilmassa aina kun erän loppumisen ilmoittava äänimerkki päättyy. Yliajalla saatu kala (joka on siis äänimerkin jälkeen vielä vedessä) vapautetaan välittömästi takaisin veteen, eikä sitä saa laittaa saalispussiin.</b>
        Myöhästyneiden kilpailijoiden saalista ei punnita. Siirtymisvaiheiden sekä kilpailun aikana merkityltä kilpailualueelta poistuminen on sallittu vain punnituspisteen kautta. Kilpailun järjestäjä on velvollinen järjestämään punnitusmahdollisuuden ennen kilpailun virallista päättymistä.</Typography>

        <Typography className={tyylit.kappale}><b>7 §</b> Kilpailualue on selvästi merkittävä ja pilkkiminen tämän alueen ulkopuolella on kielletty. Varusteiden vieminen kilpailualueelle ennen kilpailua ja varusteiden jättäminen kilpailualueelle kilpailun jälkeen on kielletty. Toisen kilpailijan avustaminen kilpailutilanteessa kilpailun aikana on kielletty, paitsi hätätilanteissa (esim. avantoon putoaminen tai koukun tarttuminen ihoon, tai äkillisissä sairaustapauksissa) tai jos kilpailija on sairautensa tai vammansa vuoksi tuomarineuvoston päätöksellä oikeutettu avustajan käyttöön. Avustetun kilpailijan suoritus hylätään, jos kilpailija avustuksen jälkeen ei pääse itse omin avuin maaliin siirtymäajan puitteissa. Tällöin kilpailijan tulosta ei huomioida joukkuetulosta laskiessa, mutta joukkuetta ei hylätä. Jokainen kantaa/kuljettaa kaikki omat tavaransa itse. Repun nostaminen toisen selkään on kuitenkin sallittu.</Typography>

        <Typography className={tyylit.kappale}><b>8 §</b> Kaikuluotaimen, vedenalaisen kameran ja muiden vastaavien sähköelektronisten tai moottorikäyttöisten apuvälineiden käyttö on kielletty kilpailun aikana sekä kilpailua edeltävän harjoittelukiellon aikana, pois lukien GPS-paikantimet (kaikki sarjat) ja akkukairat (veteraanisarjat). Puhelimen tekstiviesti- ja puheominaisuutta saa käyttää vain hätätilanteessa yleiseen tai järjestäjien hätänumeroon. Tuomarineuvosto voi kuitenkin vamman tai sairauden vuoksi antaa luvan akkuporakonekäyttöisen kairan käyttöön myös muissa sarjoissa. Lääkärintodistusta ei tarvitse enää esittää. Akkukäyttöisellä kairalla saa kairata vain yhden avannon kerrallaan, eli uutta avantoa akkukairalla ei saa tehdä ennen kuin kilpailija on itse pilkkinyt kairaamastaan avannosta.  Akkukairassa ei saa turvallisuussyistä olla akku kiinnitettynä siirtymävaiheissa eikä ennen tai jälkeen kisan; akun saa kytkeä kairaan vasta ensimmäiselle pilkkipaikalle saapuessa. Akku täytyy irrottaa kairasta heti kisan päätyttyä, ennen siirtymävaiheen aloittamista.</Typography>

        <Typography className={tyylit.kappale}><b>9 §</b> Kilpailussa on jokaisella kilpailijalla oltava mukanaan jäänaskalit. Jokaisella kilpailuun osallistuvalla on oltava henkilökohtainen jääkaira. Alle 12 -vuotiailla jääkaira ei ole pakollinen. Lähtö- ja maalialueella liikuttaessa ja kilpailualueella siirtymäaikana kairan terän on oltava suojattuna. Kairan terän suojuksen voi kuitenkin siirtymisen jälkeen poistaa jo ennen aloitusmerkkiä, kilpailijan valittua aloituspaikkansa. Lopetusmerkin jälkeen kairan terä on välittömästi suojattava uudelleen. Suojaamaton kaira on turvallisuussyistä kairattava pystyyn. Jäätä ei saa kuitenkaan lävistää ennen aloitusmerkkiä.</Typography>

        <Typography className={tyylit.kappale}><b>10 §</b> Kilpailija saa käyttää vain yhtä (1) pilkkiä kerrallaan vedessä. Kiellettyjä ovat pilkit, joihin on kiinnitetty useampi kuin yksi (1) yksi- tai useampihaarainen koukku, poisluettuna tasapainopilkit, joissa sallitaan enintään kaksi (2) yksihaaraista kiintokoukkua ja rungon alapuolella oleva yksi- tai useampihaarainen irtokoukku, joka saa olla kiinnitettynä tasapainon vatsalenkkiin korkeintaan yhdellä renkaalla tai hakasella. Koukku ei saa olla kiinnitettynä pilkin ja vavan väliseen siimaan Lisäpainojen käyttö on sallittu, mutta painojen tulee sijaita koukun yläpuolella. Mormuska rinnastetaan koukkuun.<b> Kaikki syötit ovat sallittuja, pois lukien kaikenlaisten taikina- sekä kalasyöttien käyttö, sekä liukenevalla liimalla tai muulla vastaavalla aineella toisiinsa kiinnitettyjen erillisten luonnonsyöttien tai muiden em. tavalla toisiinsa liitettyjen syöttien käyttö. Liimalla rakennettu värikoukku ja eri materiaaleista valmistettu jigi ja keinotoukka ovat sallittuja syöttejä. Kuolleelta kalalta poistettu silmä on myös sallittu syötti. Erillisen syötin on oltava pilkin koukkuun pujotettuna.</b> Syöttien niputtaminen koukun varteen tai pilkkiin kuminauhan tms. avulla on kielletty. Syöttejä saa hajustaa. Houkuttimien ja hajusteiden kuten mäskin, ryynien, matojen, toukkien tms. pudottaminen avantoon on kielletty kilpailun aikana sekä kilpailua edeltävän harjoittelukiellon aikana. Kilpailualueella on liikuttava jalan, kilpailuvälineiden kuljettamiseen voi käyttää pulkkaa/ahkiota. Tuomarineuvosto voi myöntää liikuntarajoitteisille poikkeusluvan myös muunlaiseen liikkumiseen, esim. potkurilla tai vastaavalla.</Typography>

        {/*en jaksanut listata kaikkia saantoja */}



        </Container>
    );
}

export default Saannot;