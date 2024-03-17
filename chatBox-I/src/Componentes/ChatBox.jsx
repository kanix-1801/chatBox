const ChatBox =()=>{
    const message =[
        {
            id:1,
            message :"hello"
        },
        {
            id:2,
            message :"how are you"
        }
    ] 
    return(<>
    <div className="pb-44 pt-20 containerWrap">
        {message.map(message => (
            // <div>{`${message.id} : ${message}`}</div>
            console.log(message)
        ))}
    </div>
    </>)
}

export default ChatBox;
