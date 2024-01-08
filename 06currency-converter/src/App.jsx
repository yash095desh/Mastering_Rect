import { useState } from 'react';
import Inputbox from './components/Inputbox';
import useCurrencyInfo from './hooks/currencydata';


function App() {
  const[amount,setAmount]=useState()
  const [from,setfrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [convertedAmount,setConvertedAmount]=useState(0)

  let CurrencyInfo = useCurrencyInfo(from)
   console.log(Object.keys(CurrencyInfo))
   const Options = Object.keys(CurrencyInfo)

 function convert(){
    setConvertedAmount((amount*CurrencyInfo[to]).toFixed(2))
 }
 function swap (){
  setfrom(to)
  setTo(from)
 }


  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    }}
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                   
                }}
            >
                <div className="w-full mb-1">
                    <Inputbox
                        label="From"
                        currencyOpt={Options}
                        Amount={amount}
                        updateAmount={(value)=>setAmount(value)}
                        updateCurrency={(value)=>setfrom(value)}
                        currency={from}
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                    <Inputbox
                        label="To"
                        updateCurrency={(value)=>{setTo(value)}}
                        currencyOpt={Options}
                        Amount={convertedAmount}
                        currency={to}
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}>
                    Convert 
                </button>
            </form>
        </div>
    </div>
</div>
);
}

export default App
