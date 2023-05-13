import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Bubble from '../components/Bubble';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import '../public/styles/styles.css';

export default function IndexPage() {

    return (
        <div>
            <Head>
                <title>Kielenhuolto ja selkeä kieli - Etusivu</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <h1 className='description_h1'>Pienimuotoista tekstin selkeyttämistä ja kielenhuoltoa - suurella sydämellä!</h1>
            <div className="bubbles-container">
                <div className="bubble-container">
                    <Bubble img='bubble-icon-1.png'
                        title="Mitä?"
                        items={[
                            "Tarjoan osaamistani ja innostustani suomenkielisten tekstien käsittelyä kohtaan myös sinun käyttöösi.",
                            "Tekstisi voi olla esimerkiksi lehtiartikkeli, verkkosivuille tuleva tiedote tai opinnäytetyö.",
                            "Luen tekstisi läpi, korjaan siitä esimerkiksi mahdolliset kirjoitus- ja kielioppivirheet, jäsentelen tekstin rakenteen sujuvaksi ja ehdotan toisenlaisia lauserakenteita."
                        ]}
                    />
                </div>
                <div className="bubble-container">
                    <Bubble img="bubble-icon-2.png"
                        title="Miksi kirjoitetun tekstin selkeys, virheettömyys ja helppolukuisuus on tärkeää?"
                        items={[
                            "Selkeän kielen periaatteiden mukaisesti kirjoitettu teksti tavoittaa lukijan todennäköisemmin kuin teksti, jossa näitä seikkoja ei ole huomioitu.",
                            "Yhteydenottojen määrä asiakaspalveluun vähenee, kun asiakas ymmärtää, mitä hänen tulee tehdä.",
                            "Jäsennelty ja kielellisesti virheetön teksti on helppoa ja miellyttävää luettavaa.",
                            "Virheetön teksti antaa sinusta ja yrityksestäsi ammattimaisen kuvan.",
                            "Saavutettavuus ei koskea ainoastaan värikontrasteja ja kuvien alt-tekstejä: se kattaa myös ymmärrettävän kielen.",
                            "Saat opinnäytetyöstäsi paremman arvosanan, kun teksti on sujuvaa!"
                        ]}
                    />
                </div>
                <div className="bubble-container">
                    <Bubble img="bubble-icon-3.png"
                        title="Hinnasto"
                        items={[
                            "Laskutan tekemästäni työstä 55e/h UKKO.fi-kevytyrittäjänä.",
                            "Minimilaskutus on yksi tunti.",
                            "Pyydä tarjous jos sinulla on pitkä teksti (yli 10 sivua), kuten opinnäytetyö, tarkistusta vailla!"
                        ]}
                    />
                </div>
                <div className="bubble-container">
                    <Bubble img="bubble-icon-4.png"
                        title="Minä"
                        items={[
                            "Olen koulutukseltani filosofian maisteri (2022).",
                            "Opiskelin pääaineenani pohjoismaisia kieliä ja sivuaineenani viestintää.",
                            "Tällä hetkellä työskentelen päivätyökseni kunnallisen viestinnän parissa.",
                            "Kiinnostukseni kielenhuoltoon ja selkeään kieleen kumpuaa sekä opinnoistani että halustani oikaista byrokratian kiemuroita mahdollisimman asiakaslähtöiseen, ymmärrettävään muotoon."
                        ]}
                    />
                </div>
            </div>
            <h1 className='description_h1'>Ota Yhteyttä! (työn alla)</h1>
            <ContactForm />
            <Footer />
        </div>
    );
};