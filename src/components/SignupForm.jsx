import React from 'react'
import styled from 'styled-components'

const TextInput = styled.input`
  background: ${props => props.theme.milkyWhite};
  border: 0;
  border-bottom: 1px solid ${props => props.theme.secondaryGreyLight};
  display: block;
  font-size: 16px;
  font-weight: 100;
  margin-bottom: 1rem;
  min-width: 370px;
  padding: 0.5rem 0.5rem;

  &::placeholder {
    color: ${props => props.theme.secondaryGreyLighter}
  }
`

// const Select = styled.select`
//   border: none;
//   color: ${props => props.theme.secondaryGreyDark};
//   cursor: pointer;
//   font-size: 16px;
//   margin-bottom: 2rem;
//   padding: 0.8rem 0.5rem;
// `

const RadioContainer = styled.div`
  margin-bottom: 1.3rem;
  margin-top: 0.5rem;
`;

const InputLabel = styled.span`
  display: block;
  margin-bottom: 0.2rem;
`;

const RadioInput = styled.input`
  margin-right: 1.6rem;
  margin-left: 0.25rem;
`;

const onSubmit = (event) => {
  console.log('submit');
  console.log(event);
}

const SignupForm = () => (
  <form>
    <InputLabel>Nimi:</InputLabel>
    <TextInput type="text" name="name"/>
    <InputLabel>Sähköposti:</InputLabel>
    <TextInput type="email" name="email"/>
    {/* <Select>
      <option selected disabled>Valitse organisaatio</option>
      {organizations.map(((org) => <option key={org.value} value={org.value}>{org.name}</option>))}
    </Select> */}
    <InputLabel>Puhelinnumero:</InputLabel>
    <TextInput type="text" name="phone"/>
    <InputLabel>Edustamani taho:</InputLabel>
    <TextInput type="text" name="organization"/>
    <InputLabel>Osallistun coctail-tilaisuuteen:</InputLabel>
    <RadioContainer>
      Kyllä <RadioInput type="radio" name="coctail" value="true"/>
      Ei <RadioInput type="radio" name="coctail" value="false"/>
    </RadioContainer>
    <InputLabel>Esitän edustamani tahon tervehdyksen coctail-tilaisuudessa:</InputLabel>
    <RadioContainer>
      Kyllä <RadioInput type="radio" name="greeting" value="true"/>
      Ei <RadioInput type="radio" name="greeting" value="false"/>
    </RadioContainer>
    <InputLabel>Juomavaihtoehto:</InputLabel>
    <RadioContainer>
      Punaviini <RadioInput type="radio" name="drink" value="redwine"/>
      Valkoviini <RadioInput type="radio" name="drink" value="whitewine"/>
      Alkoholiton <RadioInput type="radio" name="drink" value="nonalcoholic"/>
    </RadioContainer>
    <InputLabel>Erityisruokavaliot:</InputLabel>
    <TextInput type="text" name="allergies"/>
    <InputLabel>Osallistun seuraavan päivän sillikselle:</InputLabel>
    <RadioContainer>
      Kyllä <RadioInput type="radio" name="sillis" value="true"/>
      Ei <RadioInput type="radio" name="sillis" value="false"/>
    </RadioContainer>
    <InputLabel>Avec / pöytäseuratoive:</InputLabel>
    <TextInput type="text" name="avec"/>
    <InputLabel>Muuta huomioitavaa / terveisiä:</InputLabel>
    <TextInput type="text" name="other"/>
    <input onClick={onSubmit} type="button" value="Lähetä"/>
  </form>
)

export default SignupForm
