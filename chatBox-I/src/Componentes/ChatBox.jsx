const ChatBox =()=>{
    const message =[
        {
            id:1,
            message :"hello"
        },
        {
            id:2,
            message :"how are you"
        },
        {
            id:3,
            message:"are you there"
        }
    ] 
    return(<>
    <div className="pb-44 pt-20 containerWrap">
        {message.map(message =>(
            // console.log(message)
            <div>{message.message}</div>
            
        ))}
    </div>
    </>)
}

export default ChatBox;
