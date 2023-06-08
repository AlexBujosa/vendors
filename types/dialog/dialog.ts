export type DialogHeaderProps = {
  children: React.ReactNode;
  onCloseDialog: () => void;
};

export type DialogFooterProps = {
  children: React.ReactNode;
};

export type DialogPortalProps = {
  children: React.ReactNode;
};

export interface DialogContentRef {
  onOpenDialog: () => void;
}
