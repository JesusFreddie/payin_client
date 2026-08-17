import { GetListData } from "./data";
import { invoke } from "@tauri-apps/api/core";
import { GetListQuery } from "./query";

export async function getListCommand(data: GetListQuery): Promise<GetListData> {
  return await invoke<GetListData>("get_list", data)
}