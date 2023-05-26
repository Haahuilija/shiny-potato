import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Bubble from '@/components/Bubble';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import bubbleImage1 from '@/public/bubble_image_1.png';
import bubbleIcon1 from '@/public/bubble_icon_1.png';
import bubbleImage2 from '@/public/bubble_image_2.png';
import bubbleIcon2 from '@/public/bubble_icon_2.png';
import bubbleImage3 from '@/public/bubble_image_3.png';
import bubbleIcon3 from '@/public/bubble_icon_3.png';
import bubbleImage4 from '@/public/bubble_image_4.png';
import bubbleIcon4 from '@/public/bubble_icon_4.png';

export default function Home() {

    return (
        <div>
            <Head>
                <title>Kielenhuolto ja selkeä kieli - Etusivu</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <div className="bubbles-container">
                <div className="bubble-container">
                    <Bubble
                        icon={bubbleIcon1}
                        background={bubbleImage1}
                        title="Mitä?"
                        items={[
                            "Tarjoan osaamistani ja innostustani suomenkielisten tekstien käsittelyä kohtaan myös sinun käyttöösi.",
                            "Tekstisi voi olla esimerkiksi lehtiartikkeli, verkkosivuille tuleva tiedote tai opinnäytetyö.",
                            "Luen tekstisi läpi, korjaan siitä esimerkiksi mahdolliset kirjoitus- ja kielioppivirheet, jäsentelen tekstin rakenteen sujuvaksi ja ehdotan toisenlaisia lauserakenteita."
                        ]}
                    />
                </div>
                <div className="bubble-container">
                    <Bubble
                        icon={bubbleIcon2}
                        background={bubbleImage2}
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
                    <Bubble
                        icon={bubbleIcon3}
                        background={bubbleImage3}
                        title="Hinnasto"
                        items={[
                            "Laskutan tekemästäni työstä 50e/h UKKO.fi-kevytyrittäjänä.",
                            "Minimilaskutus on yksi tunti.",
                            "Pyydä tarjous jos sinulla on pitkä teksti (yli 10 sivua), kuten opinnäytetyö, tarkistusta vailla!"
                        ]}
                    />
                </div>
                <div className="bubble-container">
                    <Bubble
                        icon={bubbleIcon4}
                        background={bubbleImage4}
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
            <h1 className='description_h1'>Ota yhteyttä! (työn alla)</h1>
            <ContactForm />
            <Footer />
        </div>
    );
};