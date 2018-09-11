import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Formik, Form, Field } from 'formik'
import { media } from '../theme'

const Separator = styled.div`
  height: 3px;
  background: ${props => props.theme.textBlack};
  transform: scaleX(0) translateY(-2px);
  transform-origin: 50%;
  opacity: 0;
  transition: all 0.15s linear;
`

const InputWrapper = styled.div`
  width: 50%;

  ${media.desktop`
    width: 100%;
  `};
`

const TextInput = styled(Field)`
  background: ${props => props.theme.milkyWhite};
  border: 0;
  border-bottom: 1px solid ${props => props.theme.secondaryGreyLight};
  display: block;
  font-size: 16px;
  font-weight: 100;
  padding: 0.5rem 0.8rem;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &:focus + ${Separator} {
    transform: scaleX(1) translateY(-2px);
    opacity: 1;
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
  margin-left: 0.8rem;
  margin-right: 0.4rem;
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
  padding: 1.5rem;
  text-transform: uppercase;
  background: ${props => props.theme.textBlack};
  color: ${props => props.theme.milkyWhite};
  font-size: 1rem;
`

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
        <InputWrapper>
          <InputLabel>Nimi</InputLabel>
          <TextInput type="text" name="name" />
          <Separator />
          <ErrorBox>{touched.name && errors.name}</ErrorBox>
        </InputWrapper>

        <InputWrapper>
          <InputLabel>Sähköposti</InputLabel>
          <TextInput type="email" name="email" />
          <Separator />
          <ErrorBox>{touched.email && errors.email}</ErrorBox>
        </InputWrapper>

        <InputWrapper>
          <InputLabel>Puhelinnumero</InputLabel>
          <TextInput type="text" name="phone" />
          <Separator />
          <ErrorBox />
        </InputWrapper>

        <InputWrapper>
          <InputLabel>Edustamani taho</InputLabel>
          <TextInput type="text" name="organization" />
          <Separator />
          <ErrorBox />
        </InputWrapper>

        <>
          <InputLabel>Osallistun cocktail-tilaisuuteen</InputLabel>
          <RadioContainer>
            <label htmlFor="cocktail_yes">
              <RadioInput
                type="radio"
                id="cocktail_yes"
                name="cocktail"
                value
              />
              Kyllä
            </label>
            <label htmlFor="cocktail_no">
              <RadioInput
                type="radio"
                id="cocktail_no"
                name="cocktail"
                value={false}
              />
              Ei
            </label>
          </RadioContainer>
          <ErrorBox />
        </>
        
        <>
          <InputLabel>
            Esitän edustamani tahon tervehdyksen cocktail-tilaisuudessa
          </InputLabel>
          <RadioContainer>
            <label htmlFor="greeting_yes">
              <RadioInput
                type="radio"
                id="greeting_yes"
                name="greeting"
                value
              />
              Kyllä
            </label>
            <label htmlFor="greeting_no">
              <RadioInput
                type="radio"
                id="greeting_no"
                name="greeting"
                value={false}
              />
              Ei
            </label>
          </RadioContainer>
          <ErrorBox />
        </>

        <>
          <InputLabel>Juomavaihtoehto</InputLabel>
          <RadioContainer>
            <label htmlFor="redwine">
              <RadioInput
                type="radio"
                name="drink"
                id="redwine"
                value="redwine"
              />
              Punaviini
            </label>
            <label htmlFor="whitewine">
              <RadioInput
                type="radio"
                name="drink"
                id="whitewine"
                value="whitewine"
              />
              Valkoviini
            </label>
            <label htmlFor="nonalcoholic">
              <RadioInput
                type="radio"
                name="drink"
                id="nonalcoholic"
                value="nonalcoholic"
              />
              Alkoholiton
            </label>
          </RadioContainer>
          <ErrorBox>{touched.drink && errors.drink}</ErrorBox>
        </>

        <InputWrapper>
          <InputLabel>Erityisruokavaliot</InputLabel>
          <TextInput type="text" name="specialDiet" />
          <Separator />
          <ErrorBox />
        </InputWrapper>

        <>
          <InputLabel>Osallistun seuraavan päivän sillikselle</InputLabel>
          <RadioContainer>
            <label htmlFor="sillis_yes">
              <RadioInput type="radio" name="sillis" value /> Kyllä
            </label>
            <label htmlFor="sillis_no">
              <RadioInput type="radio" name="sillis" value={false} /> Ei
            </label>
          </RadioContainer>
          <ErrorBox />
        </>

        <InputWrapper>
          <InputLabel>Avec / pöytäseuratoive</InputLabel>
          <TextInput type="text" name="avec" />
          <Separator />
          <ErrorBox />
        </InputWrapper>

        <InputWrapper>
          <InputLabel>Muuta huomioitavaa / terveisiä</InputLabel>
          <TextInput type="text" name="other" />
          <Separator />
          <ErrorBox />
        </InputWrapper>

        <SubmitButton type="submit" disabled={isSubmitting}>
          Ilmottaudu
        </SubmitButton>
      </Form>
    )}
  </Formik>
)

export default SignupForm
