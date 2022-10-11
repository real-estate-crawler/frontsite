import { Article } from "~/types";

export const unfavoriteArticle =
  (token: string) =>
  async (slug: Article["slug"]): Promise<Article> => {
    const authHeader = !!token && { authorization: `Token ${token}` };

    const head = await fetch(
      `https://api.realworld.io/api/articles/${slug}/favorite`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          ...authHeader,
        },
      }
    );

    const json = await head.json();

    return json;
  };
