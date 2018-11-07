import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Content from '../components/Content'

const Menus = styled.div`
  text-align: center;
`

const MenuHeader = styled.h5`
  font-size: 16px;
`

const MenuItemHeader = styled.h6`
  font-size: 13px;
  margin: 0rem 0;
`

const MenuItemText = styled.p`
  margin-top: 0rem;
`

const MainCeremonyPage = () => (
  <Content>
    <Helmet>
      <title>Pääjuhla ja sillis</title>
    </Helmet>

    <h3>Pääjuhla</h3>

    <p>
      Vuosijuhlaviikon kohokohta on 23.2. järjestettävä iltajuhla. Tyyliltään
      arvokas iltajuhla järjestetään Torni hotellin juurella sijaitsevassa Paja
      Kongressissa kello 18:00 alkaen, olethan ehdottomasti ajoissa. Pääjuhlassa
      on luvassa puheita, lauluja, kolmen ruokalajin illallinen, esiintymisiä
      sekä tietenkin maljojen kilistelyä. Tutustu pääjuhlan etikettiin{' '}
      <a href="/etiketti">täällä</a>.
    </p>

    <h4>Aikataulu</h4>
    <p>
      17:00 Paja Kongressi aukeaa <br />
      18:00 Vuosijuhlat alkavat <br />
      23:00 Varsinainen osuus päättyy, kuljetukset jatkoille <br />
      3:00 Kuljetukset jatkojen jatkoille
    </p>

    <h4>Menu</h4>
    <p>
      Juhlaan sisältyy kolmen ruokalajin illallinen, johon on valittavissa liha,
      kala tai vegaaninen menu. Illalliseen sisältyy alkumalja, viini ja
      snapsit.
    </p>

    <Menus>
      <MenuHeader>Liha</MenuHeader>
      <MenuItemHeader>Alkuruoka</MenuItemHeader>
      <MenuItemText>Sokerisuolattua siikaa, ruista ja kananmunaa</MenuItemText>
      <MenuItemHeader>Pääruoka</MenuItemHeader>
      <MenuItemText>
        Kotimaista naudan entrecotea, grillattua maa-artisokkaa ja
        karamellisoitua porkkanaa
      </MenuItemText>
      <MenuItemHeader>Jälkiruoka</MenuItemHeader>
      <MenuItemText>Mustikkaleivos, kauracrumblea ja marenkia</MenuItemText>
      <MenuHeader>Kala</MenuHeader>
      <MenuItemHeader>Alkuruoka</MenuItemHeader>
      <MenuItemText>Sokerisuolattua siikaa, ruista ja kananmunaa</MenuItemText>
      <MenuItemHeader>Pääruoka</MenuItemHeader>
      <MenuItemText>
        Paistettua nieriää, kukkakaalia ja savustettua fenkolivoikastiketta
      </MenuItemText>
      <MenuItemHeader>Jälkiruoka</MenuItemHeader>
      <MenuItemText>Mustikkaleivos, kauracrumblea ja marenkia</MenuItemText>
      <MenuHeader>Vegaani</MenuHeader>
      <MenuItemHeader>Alkuruoka</MenuItemHeader>
      <MenuItemText>
        Paahdettua maa-artisokkaa, osterivinokkaita ja marinoitua papusalaattia
      </MenuItemText>
      <MenuItemHeader>Pääruoka</MenuItemHeader>
      <MenuItemText>
        Kurpitsarisottoa, kylmäsavustettua tofua ja salviaöljyä
      </MenuItemText>
      <MenuItemHeader>Jälkiruoka</MenuItemHeader>
      <MenuItemText>
        Manteli-suklaamoussea, vaniljacrumblea ja vadelmaa
      </MenuItemText>
    </Menus>

    <br />
    <br />

    <h3>Sillis</h3>

    <p>
      Vuosijuhlaviikon päättää tyyliltään rennompi silliaamiainen, eli
      tuttavallisemmin sillis, jota monet kutsuvat pääpäiväksi. Sunnuntaina
      24.2. vedetään haalarit jalkaan ja astutaan bussiin, joka vie juhlaväen
      paikkaan x 20-50 kilometrin päähän Tampereen keskustasta jatkamaan
      viisikymppisten juhlistamista.
    </p>

    <p>
      Silliksellä ei ruoka, juoma taikka hupi lopu kesken. Silliksen
      juomatarjoilu on open bar, joskin pieniä seteleitä kannattaa varata
      kuohuvaa varten. Sillisruokana tarjotaan perinteisen aamiaisruuan lisäksi
      pizzaa, siipiä, lettuja ynnä muuta pääjuhlan jälkeistä oloa parantavaa
      mättöä! Silliksen ohjelmaan kuuluu ruokailun ja juomisen lisäksi
      leikkimielisiä kisoja, DJ, useampi bändi, pihapelejä kuten kyykkää,
      viinavartti™ sekä tietenkin ajanviettoa muiden luuppilaisten kanssa!
      Juhlapaikalta löytyy myös sauna ja paljuja joten pyyhe ja uimapuku
      kannattaa ottaa mukaan.
    </p>

    <h4>Aikataulu</h4>

    <p>
      12:00 Bussit lähtevät Tampere-talolta <br />
      19:00 Bussit lähtevät jatkoille <br />
      19:30 Silliksen jatkot <br />
    </p>
  </Content>
)

export default MainCeremonyPage
