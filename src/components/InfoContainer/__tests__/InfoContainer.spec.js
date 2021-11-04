import React from 'react';
import InfoContainer from '../InfoContainer';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import data from '../../../data/testData.json';

describe('InfoContainer tests', () => {

  it('should render the InfoContainer', () => {
    expect(render(<InfoContainer data={data} />)).toBeTruthy();
  })

  it('should render the 4 correct info items', () => {
    render(<InfoContainer data={data} />)

    const ipAddressText = screen.getByRole('heading', {name: /ip address/i});
    const locationText = screen.getByRole('heading', {name: /location/i});
    const timezoneText = screen.getByRole('heading', {name: /timezone/i});
    const ispText = screen.getByRole('heading', {name: /isp/i});

    expect(ipAddressText).toBeInTheDocument();
    expect(locationText).toBeInTheDocument();
    expect(timezoneText).toBeInTheDocument();
    expect(ispText).toBeInTheDocument();
  })

  it('should render the correct data based on the props data passed', () => {
    render(<InfoContainer data={data} />)

    const ipAddress = screen.getByText(data.ip);
    const location = screen.getByText(data.ip);
    const timezone = screen.getByText(data.ip);
    const isp = screen.getByText(data.ip);

    expect(ipAddress).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(timezone).toBeInTheDocument();
    expect(isp).toBeInTheDocument();
  })
})