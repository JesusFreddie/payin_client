import { Payin } from "../../../shared/entities/payin";

type Props = {
  item: Payin
}

export default ({ item }: Props) => {
  return (
    <div class="payin-item">
      <div class="payin-content">
        <p class="payin-number">Номер счета: {item.num}</p>
        <span class="payin-id">ID: {item.id}</span>
      </div>
      <div class="payin-status status-active">✓ Активен</div>
    </div>
  );
};