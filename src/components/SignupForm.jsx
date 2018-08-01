import React from 'react'
import styled from 'styled-components'


const TextInput = styled.input`
  background: ${props => props.theme.milkyWhite};
  border: 0;
  border-bottom: 1px solid ${props => props.theme.secondaryGreyLight};
  display: block;
  font-size: 18px;
  font-weight: 100;
  margin-bottom: 2rem;
  min-width: 370px;
  padding: 0.8rem 0.5rem;

  &::placeholder {
    color: ${props => props.theme.secondaryGreyLighter}
  }
`

const Select = styled.select`
  border: none;
  color: ${props => props.theme.secondaryGreyDark};
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 2rem;
  padding: 0.8rem 0.5rem;
`

const organizations = [
  {
    name: 'Futurice Oy',
    value: 'futurice'
  },
  {
    name: 'Solita Oy',
    value: 'solita'
  },
  {
    name: 'Gofore Oy',
    value: 'gofore'
  },
  {
    name: 'Muu/ei organisaatiota',
    value: 'muu'
  },
]


const SignupForm = () => (
  <div>
    <TextInput type="text" placeholder="Nimi"/>
    <TextInput type="email" placeholder="Sähköposti"/>
    <Select>
      <option selected disabled>Valitse organisaatio</option>
      {organizations.map(((org) => <option key={org.value} value={org.value}>{org.name}</option>))}
    </Select>
  </div>
)

export default SignupForm
