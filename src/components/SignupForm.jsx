import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { Formik, Form, Field } from 'formik'
import { media } from '../theme'

const Separator = styled.div`
  height: 2px;
  background: ${props => props.theme.textBlack};
  transform: scaleX(0) translateY(-2px);
  transform-origin: 0;
  opacity: 0;
  transition: all 0.15s linear;
`

const InputWrapper = styled.div`
  width: 50%;

  ${media.mobile`
    width: 100%;
  `};
`

const Checkboxes = styled.div`
  margin-bottom: 1.2rem;

  label {
    display: block;
    padding: 0.2rem 0;

    input {
      margin-right: 0.8rem;
    }
  }
`

const TextInput = styled(Field)`
  background: transparent;
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

const RadioWrapper = styled.div`
  margin-top: 0.5rem;

  label {
    display: block;
    padding: 0.2rem 0;
  }

  input {
    margin-right: 0.8rem;
  }
`

const InputLabel = styled.span`
  display: block;
  margin-bottom: 0.2rem;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.85rem;
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
  background: ${props => props.theme.contrastBackground}
    radial-gradient(
      circle,
      transparent 1%,
      ${props => props.theme.contrastBackground} 1%
    )
    center/15000%;
  color: ${props => props.theme.contrastText};
  font-size: 1rem;
  border: 0;
  transition: background 0.6s;

  &:active:not(:disabled) {
    background-color: #bbb;
    background-size: 100%;
    transition: background 0s;
  }

  &:disabled {
    cursor: not-allowed;
  }
`

const FormWrapper = ({ submitCallback }) => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      phone: '',
      organization: '',
      cocktail: false,
      greeting: false,
      drink: undefined,
      food: undefined,
      specialDiet: '',
      sillis: false,
      avec: '',
      other: '',
    }}
    validate={values => {
      const errors = {}

      if (!values.name) {
        errors.name = 'Syötä etu- ja sukunimesi'
      }

      if (!values.email) {
        errors.email = 'Syötä toimiva sähköpostiosoite'
      }

      if (!values.drink) {
        errors.drink = 'Kerro juomatoiveesi'
      }

      if (!values.food) {
        errors.food = 'Kerro ruokatoiveesi'
      }

      return errors
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log(values)
        setSubmitting(false)
        submitCallback()
      }, 500)
    }}
  >
    {({ touched, errors, isSubmitting }) => (
      <Form netlify>
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

        <Checkboxes>
          <label htmlFor="cocktail">
            <Field type="checkbox" id="cocktail" name="cocktail" />
            Osallistun cocktail-tilaisuuteen
          </label>
          <label htmlFor="greeting">
            <Field type="checkbox" id="greeting" name="greeting" />
            Esitän edustamani tahon tervehdyksen cocktail-tilaisuudessa
          </label>
          <label htmlFor="sillis">
            <Field type="checkbox" id="sillis" name="sillis" />
            Osallistun seuraavan päivän sillikselle
          </label>
        </Checkboxes>

        <>
          <InputLabel>Juomavaihtoehto</InputLabel>
          <RadioWrapper>
            <label htmlFor="redwine">
              <Field type="radio" name="drink" id="redwine" value="redwine" />
              Punaviini
            </label>
            <label htmlFor="whitewine">
              <Field
                type="radio"
                name="drink"
                id="whitewine"
                value="whitewine"
              />
              Valkoviini
            </label>
            <label htmlFor="nonalcoholic">
              <Field
                type="radio"
                name="drink"
                id="nonalcoholic"
                value="nonalcoholic"
              />
              Alkoholiton
            </label>
          </RadioWrapper>
          <ErrorBox>{touched.drink && errors.drink}</ErrorBox>
        </>

        <>
          <InputLabel>Ruokavaihtoehto</InputLabel>
          <RadioWrapper>
            <label htmlFor="meat">
              <Field type="radio" name="food" id="meat" value="meat" />
              Liha
            </label>
            <label htmlFor="fish">
              <Field type="radio" name="food" id="fish" value="fish" />
              Kala
            </label>
            <label htmlFor="vegan">
              <Field type="radio" name="food" id="vegan" value="vegan" />
              Vegaani
            </label>
          </RadioWrapper>
          <ErrorBox>{touched.food && errors.food}</ErrorBox>
        </>

        <InputWrapper>
          <InputLabel>Erityisruokavaliot</InputLabel>
          <TextInput type="text" name="specialDiet" />
          <Separator />
          <ErrorBox />
        </InputWrapper>

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

FormWrapper.propTypes = {
  submitCallback: PropTypes.func.isRequired,
}

class SignupForm extends React.Component {
  state = {
    submitted: false,
  }

  submit() {
    this.setState({
      submitted: true,
    })
  }

  render() {
    const { submitted } = this.state

    if (submitted) {
      return (
        <>
          <p>
            <b>Kiitos osallistumisestasi!</b>
          </p>
          <p>Saat sähköpostiisi vahvistuksen osallistumisestasi.</p>
        </>
      )
    }

    return <FormWrapper submitCallback={() => this.submit()} />
  }
}

export default SignupForm
