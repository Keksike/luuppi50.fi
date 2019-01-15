import React from 'react'
import Helmet from 'react-helmet'

import Content from '../components/Content'
import SignupForm from '../components/SignupForm'

const SignupPage = () => (
  <Content>
    <Helmet>
      <title>Ilmoittautuminen</title>
    </Helmet>

    <h3>Luuppi ry:n jäsenet</h3>

    <p>
      <b>Luupin jäsenet</b>, jotka eivät ole kutsuvieraita, voivat ilmoittautua
      vuosijuhlaan{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luuppi.fi/tapahtumat/tapahtuma?id=1526"
      >
        Luupin tapahtumakalenterista
      </a>.
    </p>

    <h3>Kutsuvieras&shy;ilmoittautuminen</h3>

    <p>
      Osallistuminen vuosijuhlaan maksaa yhdistyksen jäsenille <b>100€</b> ja
      muille <b>120€</b>. Osallistumismaksu sisältää pääjuhlan, pääjuhlan
      jatkot, pääjuhlan jatkojen jatkot, seuraavan päivän silliksen sekä
      silliksen jatkot.
    </p>

    <p>
      Voit maksaa Luuppi ry:n tilille <b>FI68 8216 9710 0006 17</b> ja
      laittamalla kommenttikenttään viestin muotoa <b>”oma nimi/Luuppi50”</b>.
      Mikäli maksat myös avecin samalla maksulla, ilmoitathan myös tästä
      kommenttikentässä. Maksu tulee suorittaa ilmoittautumisen jälkeen,
      viimeistään <b>12.12.</b>
    </p>

    <SignupForm />
  </Content>
)

export default SignupPage
