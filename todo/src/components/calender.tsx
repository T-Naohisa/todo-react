'use client';
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
export const CalendaerPage = () => {
  /**
   * 今日の日付を取得
   * 今月の1日目
   * 今月の最終日を取得
   *
   *
   *
   */
  return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />;
};
