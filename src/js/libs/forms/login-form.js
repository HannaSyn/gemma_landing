import axios from "axios";
import { usePost } from "../composobles/usePost";
import { serialize } from "../jsonapi";
export function initLogin() {
  return {
    isLoading: false,
    login() {
      //this.isLoading = true;
      // setTimeout(() => {
      //   this.$store.app.isLoggedIn = true;
      //   window.location.href = "/";
      // }, 1500);
    },
    async loginGoogle() {
      const response = await usePost(
        "/identities/get_link",
        serialize({}, "token")
      );
      window.location.href = response.data.data.attributes.url;
      console.log(response.data.data.attributes.url, "test phost");
    },
  };
}
