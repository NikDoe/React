import {Fragment} from "react";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
import {createPortal} from "react-dom";

const ErrorModal = props => {
    const backdropRoot = document.getElementById('backdrop-root');
    const overlayRoot = document.getElementById('overlay-root');
    return (
        <Fragment>
            {createPortal(
                <Backdrop onConfirm={props.onConfirm}/>,
                backdropRoot
            )}
            {createPortal(
                <ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,
                overlayRoot
            )}
        </Fragment>
    );
}

export default ErrorModal;