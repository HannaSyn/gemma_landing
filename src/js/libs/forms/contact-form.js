import Inputmask from "inputmask";
import { usePost } from "../composobles/usePost";
export function initContactForm() {
  return {
    phone: "",
    submitFormContact() {
      const result = usePost("", this.phone);
    },
  };
}
