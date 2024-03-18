const Message = (props) => {
    return (<>
        {/* <h1>{props.message.text}</h1> */}
        <div className="px-20">
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="chat-header">
                    Obi-Wan Kenobi
                    {/* <time className="text-xs opacity-50">12:45</time> */}
                </div>
                <div className="chat-bubble">{props.message.text}</div>
            </div>

        </div>
    </>)
}

export default Message;