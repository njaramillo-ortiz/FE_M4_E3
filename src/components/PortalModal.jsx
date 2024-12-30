import { createPortal } from "react-dom";
import { Modal, ModalActions, ModalContent, ModalDescription, ModalHeader, Button } from "semantic-ui-react";

export default function PortalModal({open, firstName, lastName, doctor, onConfirm}){

    return(
        <>
            {open && createPortal(
                <Modal open={open}>
                    <ModalHeader>Reserva Realizada</ModalHeader>
                    <ModalContent>
                        <ModalDescription>
                            <p>Su nombre: {firstName+" "+lastName}</p>
                            <p>Su doctor: {doctor}</p>
                        </ModalDescription>
                    </ModalContent>
                    <ModalActions>
                        <Button
                            positive
                            onClick={() => onConfirm()}
                        >
                            Confirmar
                        </Button>
                    </ModalActions>
                </Modal>
                ,document.body
            )}
        </>
    )
}