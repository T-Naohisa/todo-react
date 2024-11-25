import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Home from '../../src/app/page';

describe('app page display', () => {
  it('ページ画面がレンダリングされていることをテストする', () => {
    render(<Home />);
    // screen.debug();
  });

  it('testボタンを押下してモーダルが表示されることをテストする', () => {
    render(<Home />);
    const button = screen.getByRole('button', { name: 'test' });
    expect(screen.queryByText('イベントの追加')).toBeNull();
    fireEvent.click(button);

    const modal = screen.getByText('イベントの追加');
    expect(modal).toBeVisible();
  });

  it('モーダルの登録処理をテストする', async () => {
    render(<Home />);
    const button = screen.getByRole('button', { name: 'test' });
    fireEvent.click(button);

    const modal = screen.getByText('イベントの追加');
    expect(modal).toBeVisible();

    const title = screen.getByRole('textbox', { name: /title/i });
    fireEvent.change(title, { value: 'testTitle' });
    screen.debug(title);

    const describe = screen.getByRole('textbox', { name: /describe/i });
    fireEvent.change(describe, { value: 'testDescribe' });
    screen.debug(describe);

    const closeBtn = screen.getByRole('button', { name: '登録' });
    expect(closeBtn).toBeVisible();
    fireEvent.click(closeBtn);

    await waitFor(() => {
      expect(screen.queryByText('イベントの追加')).toBeNull();
    });
  });

  it('モーダルが閉じられたことをテストする', async () => {
    render(<Home />);
    const button = screen.getByRole('button', { name: 'test' });
    fireEvent.click(button);

    const modal = screen.getByText('イベントの追加');
    expect(modal).toBeVisible();

    const closeBtn = screen.getByRole('button', { name: '閉じる' });
    expect(closeBtn).toBeVisible();
    fireEvent.click(closeBtn);

    await waitFor(() => {
      expect(screen.queryByText('イベントの追加')).toBeNull();
    });
  });
});
