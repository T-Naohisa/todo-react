'use client';
import React, { use, useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { EventSourceInput } from '@fullcalendar/core/index.js';
import { Modal } from 'components/modal';

export type Events = {
  id?: number;
  title: string;
  description: string;
  start: string;
  end: string;
  backgroundColor: string;
  editable: boolean;
};

export const CalendaerPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [eventList, setEventsList] = useState<Events[]>([]);
  const [newEvent, setNewEvent] = useState<Events>({
    title: 'a',
    description: 'a',
    start: '',
    end: '',
    backgroundColor: 'red',
    editable: true,
  });
  useEffect(() => {
    setEventsList([
      {
        title: 'test',
        description: 'test',
        start: '2025-05-23',
        end: '2025-05-23',
        backgroundColor: 'green',
        editable: true,
      },
      {
        title: 'sample2',
        description: 'sample2',
        start: '2025-05-24',
        end: '2025-05-26',
        backgroundColor: 'green',
        editable: true,
      },
    ]);
  }, []);

  /**
   * 日付をクリックしたときに発火する
   * @param arg
   */
  const dateClick = (arg: DateClickArg) => {
    openModal();
    const date = arg.dateStr;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      start: date,
      end: date,
    }));
  };

  /**
   * モーダルを開く
   */
  const openModal = () => {
    setIsOpen(true);
  };

  /**
   * モーダルを閉じる
   */
  const close = () => {
    setIsOpen(false);
  };

  /**
   * モーダルのsubmitボタンが押されたときに発火する
   * @param titles
   * @param disribes
   */
  const submit = (titles: string, disribes: string) => {
    // イベント情報を更新する
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      title: titles,
      description: disribes,
    }));
    // イベントリストに追加するオブジェクトを作成する
    const newEvents = {
      title: titles,
      description: disribes,
      start: newEvent.start,
      end: newEvent.end,
      backgroundColor: 'red',
      editable: true,
    };
    // イベントリストに追加する
    setEventsList([...eventList, newEvents]);
    setIsOpen(false);
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={dateClick} // 日付をクリックしたときに発火する
        initialView="dayGridMonth"
        events={eventList as EventSourceInput}
        selectable={true} //クリックしてドラックができるようにする
        editable={true} //カレンダー上のイベントを変更できるようにする
        locale={'ja'} //日本語化
      />
      <button
        onClick={() => {
          openModal();
        }}
      >
        test
      </button>
      <Modal isOpen={isOpen} close={close} submit={submit} />
    </>
  );
};
