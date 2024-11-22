'use client';
import { Button, Dialog, DialogPanel, DialogTitle, DialogBackdrop, Input } from '@headlessui/react';
import clsx from 'clsx';
import React, { useState } from 'react';

type Props = {
  isOpen: boolean;
  submit: (title: string, discribe: string) => void;
  close: () => void;
};

export const Modal = (props: Props) => {
  const [title, setTitle] = useState<string>('');
  const [discribe, setDiscribe] = useState<string>('');

  const inputChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const inputChangeDiscribe = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiscribe(event.target.value);
  };
  return (
    <>
      <Dialog
        open={props.isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => {
          props.close();
        }}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-black">
                イベントの追加
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-black">タイトル</p>
              <Input
                type="text"
                name="title"
                value={title}
                onChange={(e) => {
                  inputChangeTitle(e);
                }}
                className={clsx(
                  'mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black',
                  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                )}
              />
              <p className="mt-2 text-sm/6 text-black">詳細内容</p>
              <Input
                type="text"
                name="discribe"
                value={discribe}
                onChange={(e) => {
                  inputChangeDiscribe(e);
                }}
                className={clsx(
                  'mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black',
                  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                )}
              />
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={() => {
                    props.submit(title, discribe);
                  }}
                >
                  登録
                </Button>
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={() => {
                    props.close();
                  }}
                >
                  閉じる
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
