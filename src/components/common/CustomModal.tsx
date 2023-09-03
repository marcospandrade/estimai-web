import { ModalProps } from '@/hooks/useModal'
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from '@/lib/material'

interface SignInModalProps {
  isOpen: boolean
  modalData: ModalProps
  openModal: () => void
}

export function CustomModal({ isOpen, modalData, openModal }: SignInModalProps) {
  return (
    <Dialog open={isOpen} handler={openModal}>
      <DialogHeader>{modalData.title}</DialogHeader>
      <DialogBody divider>{modalData.text}</DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={openModal} className="mr-1">
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={modalData.handleConfirm}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  )
}
