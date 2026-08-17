import { Option } from "fp-ts/lib/Option";
import { Payin } from "../../entities/payin";

export type GetListData = Option<Payin[]>