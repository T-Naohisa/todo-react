import { render } from '@testing-library/react';
import React from 'react';
import Home from '../../src/app/page';

describe('app page display', () => {
  it('ページ画面がレンダリングされていることをテストする', () => {
    // jest.mock('@fullcalendar/react', () => <div />);
    // jest.mock('@fullcalendar/daygrid', () => jest.fn());
    // jest.mock('@fullcalendar/list', () => jest.fn());
    // jest.mock('@fullcalendar/interaction', () => jest.fn());
    render(<Home />);
    //screen.debug();
  });
});
