import React from 'react';
import SearchBar from '../SearchBar';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('SearchBar tests', () => {

  it('should render SearchBar', () => {
    expect(render(<SearchBar />)).toBeTruthy();
  })
})