import { useState } from "react";

const SendMsg = ()=>{
    const [value , setValue] = useState('')
    return(<>

    <div className="fixed bottom-0 w-full py-10 bg-red-900 shadow-lg">
        <form className="containerWrap flex">
        <input value={value} onChange={e=> setValue(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <button className="btn glass">send</button>
        </form>
    </div>
    </>)
}

export default SendMsg;