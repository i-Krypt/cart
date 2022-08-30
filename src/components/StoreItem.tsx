import { formatCurrency } from "../utilities/formatCurrency";
 
type StoreItemProps = {
    id: number;
    name: string;
    price: number;
    imgUrl: string
}

export const StoreItem = ({id, name, price, imgUrl} : StoreItemProps) => {
    const quantity = 0
    return <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full h-52 object-cover" src={imgUrl} alt="" />
        <div className="py-4 px-6">
            <div className="flex justify-between mb-4 align-baseline">
                <span className="font-semibold">{name}</span>
                <span className="text-gray-600 ml-1">{formatCurrency(price)}</span>
            </div>
            <div className="mt-auto"> 
                {quantity === 0 ? (
                    <button className="bg-blue-400 rounded py-2 px-4 w-full">Add to cart</button>
                ) : <div className="flex items-center flex-col gap-2">
                    <div className="flex items-center gap-2 justify-center mb-2">
                        <button className="rounded bg-sky-500 py-2 px-3">-</button>
                        <div>
                        <span className="font-semibold">{quantity}</span> in Cart
                        </div>
                        <button className="rounded bg-sky-500 py-2 px-3">+</button>
                    </div>
                    <button className="rounded bg-red-700 py-2 px-3">Remove</button>
                </div> }

            </div> 
        </div>

    </div>
} 