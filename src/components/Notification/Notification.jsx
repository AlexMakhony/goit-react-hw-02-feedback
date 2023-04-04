import {NotificMessage} from "./Notification.styled";
import PropTypes from "prop-types";


export const Notification = ({ message }) => {
    return (<>
        <NotificMessage>{message}</NotificMessage>
    </> )
}

NotificMessage.propTypes = {
    message: PropTypes.string,
}