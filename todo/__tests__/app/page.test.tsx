import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '../../src/app/page';

describe('app page display', () => {
  it('ページ画面がレンダリングされていることをテストする', () => {
    render(<Home />);
    screen.debug();
  });
});
