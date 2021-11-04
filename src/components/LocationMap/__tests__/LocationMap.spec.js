import React from 'react';
import LocationMap from '../LocationMap';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';


describe('LocationMap tests', () => {
  const mapCenter = [51.507359, -0.136439];

  it('should render LocationMap', () => {
    expect(render(<LocationMap center={mapCenter} />)).toBeTruthy();
  })

})