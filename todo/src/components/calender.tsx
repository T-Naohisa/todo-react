'use client';
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { EventSourceInput, DateSelectArg } from '@fullcalendar/core/index.js';

type Props = {
  event: Events[];
  url: string;
};
type Events = {
  id: number;
  title: string;
  description: string;
  start: string;
  end: string;
  backgroundColor: string;
  editable: boolean;
};

export const CalendaerPage = (props: Props) => {
  console.log('eventupdate render:' + props.event);
  const dateClick = (arg: DateClickArg) => {
    console.log('date click');
    console.log(arg);
    const date = arg.dateStr;
    const month = date.slice(5, 7);
    const days = date.slice(8, 10);
    console.log(month, days);
    console.log(props.event[0]?.id);
    console.log(props.event[1]?.id);
  };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    //テキスト入力が可能なダイアログを表示する
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: '2',
        title: 'test3',
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={dateClick} // 日付をクリックしたときに発火する
        initialView="dayGridMonth"
        events={props.event as EventSourceInput}
        selectable={true} //クリックしてドラックができるようにする
        editable={true} //カレンダー上のイベントを変更できるようにする
        select={handleDateSelect} //日付や時刻が選択されたときに発火する
      />
    </>
  );
};
