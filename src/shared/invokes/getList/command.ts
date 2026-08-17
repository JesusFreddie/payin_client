import { GetListData } from "./data";
import { invoke } from "@tauri-apps/api/core";
import { GetListQuery } from "./query";
import { Payin } from "../../entities/payin";
import { fromNullable, match } from "fp-ts/lib/Option";
import { pipe } from "fp-ts/lib/function";

type InvokeResurlt = Payin[] | null

export async function getListCommand(data: GetListQuery): Promise<GetListData> {
  let option = await invoke<InvokeResurlt>("get_list", pipe(data, match(
    () => ({}),
    (filter) => filter
  )))
  return fromNullable(option)
}