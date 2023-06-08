import * as DialogProps from "@types/dialog/dialog";

const DialogPortal = ({ children }: DialogProps.DialogPortalProps) => (
  <div className="rounded-lg border-black border-2  min-[468px]:w-[430px] bg-white w-[96%] h-[250px] mx-auto my-auto p-4">
    {children}
  </div>
);

const DialogHeader = ({ children }: DialogProps.DialogHeaderProps) => (
  <div className="flex flex-row">{children}</div>
);

export function Dialog() {
  return (
    <div className="backdrop-blur-sm absolute bottom-0 left-0 w-[100%] h-[100%] flex z-10">
      <DialogPortal>
        <DialogHeader>
          <h1 className="text-xl">Add New Vendors</h1>
          <p className="text-lg my-auto ml-auto mr-0">x</p>
        </DialogHeader>
      </DialogPortal>
    </div>
  );
}
