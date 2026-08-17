import { none } from "fp-ts/lib/Option"
import { createListResource } from "./model/list-resource"
import List from "./ui/list"

export default () => {
  const { list, loading } = createListResource(none)
  return <List list={list} loading={loading} />
}