import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import RootLayout from '../../src/app/layout';
describe('app layout display', () => {
  it('子要素がレンダリングされていることをテストする', () => {
    const textMock = () => {
      return (
        <div>
          <h5>testMock</h5>
        </div>
      );
    };
    render(<RootLayout>{textMock()}</RootLayout>);
    const display = screen.getByText('testMock');
    screen.debug(display);
    expect(display).toBeVisible();
  });
});
