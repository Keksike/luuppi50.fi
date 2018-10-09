import React from 'react'
import Helmet from 'react-helmet'
import { Pair, Text, Image } from '../components/Pair'
import styled from 'styled-components'

import Content from '../components/Content'
import Gofore from '../static/images/gofore.png'
import Futurice from '../static/images/futurice.png'
import Eatech from '../static/images/eatech.png'
import Reaktor from '../static/images/reaktor.png'


const MainSponsor = styled.div`
background-image: url(${props => props.src});
background-size: contain;
background-repeat: no-repeat;
height: 5rem;
width: 30rem;
margin: auto;
padding: 1rem;
`

const MultipleSponsors = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`

const Sponsor = styled.div`
background-image: url(${props => props.src});
background-size: contain;
background-repeat: no-repeat;
height: 3rem;
width: 15rem;
padding: 1rem;
`


const partnersPage = () => (
  <Content>
    <Helmet>
      <title>Kumppanit ja edut</title>
    </Helmet>

    <h3>Kumppanit ja edut</h3>

    <p>Luupin 50-vuotis vuosijuhlia sponsoroivat:</p>
    <MainSponsor src={Gofore}/>
    <MultipleSponsors>
    	<Sponsor src={Futurice}/>
    	<Sponsor src={Eatech}/>
    </MultipleSponsors>
    <MultipleSponsors>
    	<Sponsor src={Reaktor}/>
    </MultipleSponsors>



    <h4>Edut</h4>
    <p>Tietoa eduista tulossa myöhemmin.</p>
  </Content>
)

export default partnersPage
