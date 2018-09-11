import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Formik, Form, Field } from 'formik'

const TextInput = styled(Field)`
  background: ${props => props.theme.milkyWhite};
  border: 0;
  border-bottom: 1px solid ${props => props.theme.secondaryGreyLight};
  display: block;
  font-size: 16px;
  font-weight: 100;
  min-width: 370px;
  padding: 0.5rem 0.5rem;

  &::placeholder {
    color: ${props => props.theme.secondaryGreyLighter};
  }
`

const RadioContainer = styled.div`
  margin-top: 0.5rem;
`

const InputLabel = styled.span`
  display: block;
  margin-bottom: 0.2rem;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.85rem;
`

const RadioInput = styled(Field)`
  margin-right: 1.6rem;
  margin-left: 0.25rem;
`

const errorAnimation = keyframes`
  0% {
    transform: translateX(0.75rem);
  }

  25% {
    transform: translateX(0rem);
  }

  40% {
    transform: translateX(0.5rem);
  }

  60% {
    transform: translateX(0);
  }

  80% {
    transform: translateX(0.3rem);
  }

  100% {
    transform: translateX(0);
  }
`

const ErrorBox = styled.div`
  color: ${props => props.theme.error};
  height: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  text-transform: uppercase;

  &:not(:empty) {
    animation: ${errorAnimation} 300ms;
  }
`

const SubmitButton = styled.button`
  padding: 2rem;
  text-transform: uppercase;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.secondaryGreyLight};
  font-size: 1.2rem;
`;

const SignupForm = () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      phone: '',
      organization: '',
      cocktail: undefined,
      greeting: undefined,
      drink: 0,
      specialDiet: '',
      sillis: undefined,
      avec: '',
      other: '',
    }}
    validate={values => {
      const errors = {}

      if (!values.name) {
        errors.name = 'Nimi puuttuu'
      }

      if (!values.email) {
        errors.email = 'Email puuttuu'
      }

      if (!values.drink) {
        errors.drink = 'Juomatoive puuttuu'
      }

      return errors
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log(values)
        setSubmitting(false)
      }, 500)
    }}
  >
    {({ touched, errors, isSubmitting }) => (
      <Form>
        <InputLabel>Nimi</InputLabel>
        <TextInput type="text" name="name" />
        <ErrorBox>{touched.name && errors.name}</ErrorBox>

        <InputLabel>Sähköposti</InputLabel>
        <TextInput type="email" name="email" />
        <ErrorBox>{touched.email && errors.email}</ErrorBox>

        <InputLabel>Puhelinnumero</InputLabel>
        <TextInput type="text" name="phone" />
        <ErrorBox />

        <InputLabel>Edustamani taho</InputLabel>
        <TextInput type="text" name="organization" />
        <ErrorBox />

        <InputLabel>Osallistun coctail-tilaisuuteen</InputLabel>
        <RadioContainer>
          Kyllä <RadioInput type="radio" name="cocktail" value />
          Ei <RadioInput type="radio" name="cocktail" value={false} />
        </RadioContainer>
        <ErrorBox />

        <InputLabel>
          Esitän edustamani tahon tervehdyksen cocktail-tilaisuudessa
        </InputLabel>
        <RadioContainer>
          Kyllä <RadioInput type="radio" name="greeting" value />
          Ei <RadioInput type="radio" name="greeting" value={false} />
        </RadioContainer>
        <ErrorBox />

        <InputLabel>Juomavaihtoehto</InputLabel>
        <RadioContainer>
          Punaviini <RadioInput type="radio" name="drink" value="redwine" />
          Valkoviini <RadioInput type="radio" name="drink" value="whitewine" />
          Alkoholiton
          <RadioInput type="radio" name="drink" value="nonalcoholic" />
        </RadioContainer>
        <ErrorBox>{touched.drink && errors.drink}</ErrorBox>

        <InputLabel>Erityisruokavaliot</InputLabel>
        <TextInput type="text" name="specialDiet" />
        <ErrorBox />

        <InputLabel>Osallistun seuraavan päivän sillikselle</InputLabel>
        <RadioContainer>
          Kyllä <RadioInput type="radio" name="sillis" value />
          Ei <RadioInput type="radio" name="sillis" value={false} />
        </RadioContainer>
        <ErrorBox />

        <InputLabel>Avec / pöytäseuratoive</InputLabel>
        <TextInput type="text" name="avec" />
        <ErrorBox />

        <InputLabel>Muuta huomioitavaa / terveisiä</InputLabel>
        <TextInput type="text" name="other" />
        <ErrorBox />

        <SubmitButton type="submit" disabled={isSubmitting}>
          Ilmottaudu
        </SubmitButton>
      </Form>
    )}
  </Formik>
)

export default SignupForm
