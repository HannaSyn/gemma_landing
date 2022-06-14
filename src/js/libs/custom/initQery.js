import { usePost } from "../composobles/usePost";
import { serialize } from "../jsonapi";

export async function initQuery() {
  if (window.location.search) {
    const params = new URLSearchParams(window.location.search);
    const response = await usePost(
      "/identities",
      serialize({ code: params.get("code") }, "code")
    );
    console.log(response.data.data.attributes.telegram_link);
    window.location.href = response.data.data.attributes.telegram_link;
  }
}
