import { createSignal, onMount } from "solid-js";
import getList from "../model/get-list";
import { match, none, Option } from "fp-ts/lib/Option";
import { pipe } from "fp-ts/lib/function";
import { Item } from "../model/item";
import ListItem from "./list-item";

export default () => {
  const { fetch } = getList();
  const [list, setList] = createSignal<Option<Item[]>>(none);

  onMount(async () => {
    const result = await fetch({});
    setList(result);
  });

  return (
    <>
      <h3>Счета: </h3>
      {pipe(
        list(),
        match(
          () => <>Payin not fetching</>,
          (items) => items.map((item) => <ListItem item={item} />),
        ),
      )}
    </>
  );
};
