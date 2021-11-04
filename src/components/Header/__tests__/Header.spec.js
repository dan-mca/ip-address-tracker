import React from 'react';
import Header from '../Header';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import data from '../../../data/testData.json';

describe('Header tests', () => {

  it('should render the Header', () => {
    expect(render(<Header data={data}/>)).toBeTruthy();
  })

  it('should render the header "IP Address Tracker"', () => {
    render(<Header data={data} />);
    const header = screen.getByRole('heading', { name: /IP Address Tracker/i});
    expect(header).toBeInTheDocument();
  })
})

