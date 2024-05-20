import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNotificationStore } from '../../stores/Notification.store';

const Notification = () => {

    const { isOpen, text, severity, setCloseNotification } = useNotificationStore();

    const handleClose = () => {
        setCloseNotification();
    }

    return (
        <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
            <Alert
                onClose={handleClose}
                severity={severity}
                sx={{ width: '100%' }}
            >
                {text}
            </Alert>
        </Snackbar>
    )
}

export default Notification;