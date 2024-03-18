import Message from "./Message";

const ChatBox = () => {
    const message = [
        {
            id: 1,
            text: "hello"
        },
        {
            id: 2,
            text: "how are you"
        },
        {
            id: 3,
            text: "are you there"
        }
    ]
    return (<>
        <div className="pb-44 pt-20 containerWrap">
            {message.map(message => (
                <Message key={message.id} message={message} />

            ))}
        </div>
    </>)
}

export default ChatBox;
