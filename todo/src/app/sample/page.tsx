'use client';
import React, { useEffect, useState } from 'react';

export default function Page() {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  useEffect(() => {
    setButtonDisabled(true);
  }, []);

  const onchangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
    const checkstatuslist: boolean[] = [];

    document.querySelectorAll('.checkitems').forEach((item) => {
      if (item instanceof HTMLInputElement) {
        console.log('チェックボックスの状態:', item.checked);
        checkstatuslist.push(item.checked);
      }
    });
    setButtonDisabled(
      !checkstatuslist.every((item) => {
        return item === true;
      }),
    );
  };
  const onClickButton = () => {
    console.log('ボタンがクリックされました');
    console.log('disable' + buttonDisabled);
  };

  return (
    <div>
      <h1>Home</h1>
      <p>お試し確認ページ</p>
      <div>
        <p>チェックボックスの確認</p>
        <input
          className="checkitems"
          type="checkbox"
          onChange={(e) => {
            onchangeCheckbox(e);
          }}
        />
        <span>チェックボックス</span>
        <br />
        <input
          className="checkitems"
          type="checkbox"
          onChange={(e) => {
            onchangeCheckbox(e);
          }}
        />
        <span>チェックボックス</span>
        <br />
        <input
          className="checkitems"
          type="checkbox"
          onChange={(e) => {
            onchangeCheckbox(e);
          }}
        />
        <span>チェックボックス</span>
      </div>
      <button
        disabled={buttonDisabled}
        onClick={() => {
          onClickButton();
        }}
      >
        ボタン
      </button>
    </div>
  );
}
