'use client';

import Footer from '@components/Footer';
import Header from '@components/Header';
import Main from '@components/Main';
import { Fragment } from 'react';

export default function View() {
  return (
    <Fragment>
      {/* Header */}
      <Header />

      {/* Main */}
      <Main />

      <Footer />
    </Fragment>
  );
}
