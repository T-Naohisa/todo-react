import { render } from '@testing-library/react';
import React from 'react';
import Todo from '../../../src/app/todo/page';

describe('app page display', () => {
  it('ページ画面がレンダリングされていることをテストする', () => {
    render(<Todo />);
    //screen.debug();
  });
});
