//SDK利用準備
import { createClient, MicroCMSQueries } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.PUBLIC_MICROCMS_API_KEY,
});

//型定義
export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
};

//APIの呼び出し
export const getBlogs = (queries: MicroCMSQueries = {}) => {
  return client.getList<Blog>({ endpoint: "blogs", queries });
};
export const getBlogDetail = (
  contentId: string,
  queries: MicroCMSQueries = {}
) => {
  return client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });
};
