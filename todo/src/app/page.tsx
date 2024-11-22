'use client';
import React, { useEffect, useState } from 'react';
import { CalendaerPage } from 'components/calender';
import { Modal } from 'components/Modal';
export default function Home() {
  const [nowTime, setNowTime] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    getTime();
    setTime();
  }, []);

  /**
   * 1秒間隔で現在の時間を取得しnowTimeを更新する
   */
  const getTime = () => {
    const time = new Date();
    const timeStr = dateFormat(time);
    setNowTime(timeStr);
    console.log(timeStr);
    setTime();
  };

  /**
   * 1秒おきにgetTimeを実行する
   */
  const setTime = () => {
    setTimeout(getTime, 1000);
  };

  /**
   * フォーマットに合わせて日時の文字列を形成する
   * @param date
   * @returns
   */
  const dateFormat = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();

    return `${year}/${month}/${days} ${hour}:${min}`;
  };
  const open = () => {
    setIsOpen(true);
  };
  const submit = (title: string, disribe: string) => {
    setIsOpen(false);
    console.log('登録されたタイトル:' + title);
    console.log('登録された詳細:' + disribe);
  };
  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      <p className="timestamp text-6xl">{nowTime}</p>
      <div className="m-5">
        <CalendaerPage />
        <button
          onClick={() => {
            open();
          }}
        >
          test
        </button>
        <Modal isOpen={isOpen} close={close} submit={submit} />
      </div>
    </>
  );
}
