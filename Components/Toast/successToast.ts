import { toastConfig } from "@/utils/toastConfig";
import { toast } from "react-toastify";

export const SuccessToast = (message: string): void => {
  toast.success(message, toastConfig);
};
