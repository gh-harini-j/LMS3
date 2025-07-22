import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastNotification = {
  success: (msg) => toast.success(msg),
  error: (msg) => toast.error(msg),
  info: (msg) => toast.info(msg),
};

export default ToastNotification;