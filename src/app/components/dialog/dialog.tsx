"use client";
import * as DialogProps from "@types/dialog/dialog";
import React, { useRef } from "react";
import { useState } from "react";

export const Dialog = () => {
  const childRef = useRef<DialogProps.DialogContentRef | null>(null);

  const triggerChildMethod = () => {
    if (childRef.current) {
      childRef.current.onOpenDialog();
    }
  };
  return (
    <div>
      <button
        className="rounded-md border bg-cyan-500 px-4 h-8"
        onClick={triggerChildMethod}
      >
        New Vendors
      </button>
      <DialogContent ref={childRef} />
    </div>
  );
};
const DialogPortal = ({ children }: DialogProps.DialogPortalProps) => (
  <div className="rounded-lg border-black border-2  min-[468px]:w-[430px] bg-white w-[96%] h-[250px] mx-auto my-auto p-4">
    {children}
  </div>
);

const DialogHeader = ({
  children,
  onCloseDialog,
}: DialogProps.DialogHeaderProps) => (
  <div className="flex flex-row">
    {children}
    <p
      className="text-xl my-auto ml-auto mr-0 cursor-pointer"
      onClick={onCloseDialog}
    >
      x
    </p>
  </div>
);

export const DialogContent = React.forwardRef<DialogProps.DialogContentRef, {}>(
  (_props, ref) => {
    const [visible, setVisible] = useState<boolean>(false);

    const onCloseDialog = () => {
      setVisible(false);
    };

    const onOpenDialog = () => {
      setVisible(true);
    };

    React.useImperativeHandle(ref, () => ({ onOpenDialog }));

    return (
      <>
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity ${
            visible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="backdrop-blur-sm absolute bottom-0 left-0 w-[100%] h-[100%] flex z-10">
            <DialogPortal>
              <DialogHeader onCloseDialog={onCloseDialog}>
                <h1 className="text-xl">Add New Vendors</h1>
              </DialogHeader>
            </DialogPortal>
          </div>
        </div>
      </>
    );
  }
);

DialogContent.displayName = "DialogContent";
