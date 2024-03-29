import { toastConfig } from "@/utils/toastConfig";
import { toast } from "react-toastify";

export const ErrorToast = (message: string): void => {
  toast.error(message, toastConfig);
};
