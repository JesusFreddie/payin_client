import { Either, left } from "fp-ts/lib/Either";
import { Error } from "../error";
import { GetListData } from "./data";
import { invoke } from "@tauri-apps/api/core";
import { GetListQuery } from "./query";

export async function getList(data: GetListQuery): Promise<Either<Error, GetListData>> {
  return await invoke<Either<Error, GetListData>>("get_list", data)
}