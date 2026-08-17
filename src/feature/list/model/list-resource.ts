import { createResource } from "solid-js"
import { getListCommand } from "../../../shared/invokes/getList/command";
import { GetListQuery } from "../../../shared/invokes/getList/query";
import { GetListData } from "../../../shared/invokes/getList/data";

type Result = {
  list: GetListData
  loading: boolean
}

export const createListResource = (query: GetListQuery): Result => {
  const [ resource ] = createResource(
    () => ({ query: query }),
    async ({ query }) => {
      const result = await getListCommand(query);
      console.log(result)
      return result;
    }
  )

  return {
    list: resource.latest!,
    loading: resource.loading
  }
}