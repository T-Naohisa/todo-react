'use client';
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
export const CalendaerPage = () => {
  const dateClick = (arg: DateClickArg) => {
    console.log('date click');
    console.log(arg);
    const date = arg.dateStr;
    const month = date.slice(5, 7);
    const days = date.slice(8, 10);
    console.log(month, days);
  };
  /**
   * 今日の日付を取得
   * 今月の1日目
   * 今月の最終日を取得
   *
   *
   *
   */
  return <FullCalendar plugins={[dayGridPlugin, interactionPlugin]} dateClick={dateClick} initialView="dayGridMonth" />;
};
