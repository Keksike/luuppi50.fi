import React from 'react';

import Layout from '../components/Layout';
import SignupForm from '../components/SignupForm';

const SignupPage = () => (
  <Layout title="Ilmottautuminen">
    <h3>Luuppi ry:n jäsenet</h3>

    <p>
      <b>Luupin jäsenet</b> voivat ilmottautua vuosijuhlaan <a target="_blank" rel="noopener noreferrer" href="https://www.luuppi.fi/tapahtumat">Luupin tapahtumakalenterista</a>.
    </p>

    <h3>Kutsuvierasilmoittautuminen</h3>
    
    <SignupForm />
  </Layout>
);

export default SignupPage;
