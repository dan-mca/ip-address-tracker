import React from 'react';
import Footer from '../Footer';
import {render, screen} from '@testing-library/react'

describe('Footer tests', () => {

  it('should render the Footer', () => {
    expect(render(<Footer />)).toBeTruthy();
  })
})

