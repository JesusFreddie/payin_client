import { invoke } from "@tauri-apps/api/core"
import { Item } from "./item"
import { none, Option, some } from "fp-ts/lib/Option"

type Filter = {}

export default () => {  
  async function fetch(filter: Filter): Promise<Option<Item[]>> {
    const result = await invoke<Item[]>("get_list", filter)
    if (!result) {
      return none
    }
    return some(result)
  }

  return {
    fetch
  }
}