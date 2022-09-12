import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alert = ({
  type = "",
  message = "Demo alert",
  autoClose = 5000,
  position = "top-center",
}) => {
  const options = {
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    autoClose,
    position,
  } as ToastOptions;
  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    case "warning":
      toast.warn(message, options);
      break;
    case "info":
      toast.info(message, options);
      break;
    default:
      toast(message, options);
  }

  return;
};

export default Alert;
