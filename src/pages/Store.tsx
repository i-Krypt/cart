import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export const Store = () => (
  <>
    <h1 className="mb-4">Stores</h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      {storeItems.map((item) => (
        <div className="" key={item.id}>
          <StoreItem {...item} />
        </div>
      ))}
    </div>
  </>
);
