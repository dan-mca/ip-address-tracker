import React from 'react';
import InfoItem from '../InfoItem';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

describe('InfoItem tests', () => {

  it('should render InfoItem', () => {
    expect(render(<InfoItem title={'ip address'} value={'13.210.74.109'}/>)).toBeTruthy();
  })

  it('should render the correct title and value based on props passed', () => {
    render(<InfoItem title={'ip address'} value={'13.210.74.109'}/>)

    const titleText = screen.getByRole('heading', {name: /ip address/i});
    const valueOutput = screen.getByRole('heading', {name: '13.210.74.109'})

    expect(titleText).toBeInTheDocument();
    expect(valueOutput).toBeInTheDocument();
  })

  it('should render "-" when no value is available', () => {
    render(<InfoItem title={'ip address'} value={''}/>)

    const nullValue = screen.getByRole('heading', {name: '-'})

    expect(nullValue).toBeInTheDocument();
  })
})