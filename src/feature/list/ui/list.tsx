import { match } from "fp-ts/lib/Option";
import { pipe } from "fp-ts/lib/function";
import Load from "../../../shared/ui/load/load";
import { GetListData } from "../../../shared/invokes/getList/data";
import Item from "./item";

type Props = {
  loading: boolean
  list: GetListData
}

export default ({ list, loading }: Props) => {
  return (
    <>
      <h3>Счета: </h3>
      {loading ? <Load/>
        :pipe(
          list,
          match(
            () => <>Payin not fetching</>,
            (items) => items.map((item) => <Item item={item} />),
          ),
        )
      }
    </>
  );
};