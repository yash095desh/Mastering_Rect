import React, { useId } from "react"

function Inputbox ({   label ,
    Amount ,
   currency ="usd",
   currencyOpt = [],
   amountDisable = false,
   updateAmount,
   updateCurrency,}
   ){
    const amountInputId = useId()
    return(
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
        <div className="w-1/2">
            <label  className="text-black/40 mb-2 inline-block" htmlFor={amountInputId}>
                {label}
            </label>
            <input
                id={amountInputId}
                className="outline-none w-full bg-transparent py-1.5"
                type="number"
                value={Amount}
                onChange={(e)=>updateAmount && updateAmount(Number(e.target.value))}
                disabled={amountDisable}
                placeholder="0"
            />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
            <select
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                value= {currency}
                onChange={(e)=> updateCurrency && updateCurrency(e.target.value)}
                disabled={amountDisable}
            >
                {currencyOpt.map((currency)=>(
                     <option key={currency} value={currency}>
                     {currency}
                 </option>
                ))}
            
            </select>
        </div>
    </div>

    )
}
export default Inputbox