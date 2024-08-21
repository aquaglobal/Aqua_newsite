import WhatsAppButton from "./UI/WhatsAppButton"
import ChatBot from "./chatBot/ChatBot"
const FixedButtons=() => {
    return (
        <div className="flex gap-x-8 fixed bottom-0 right-0 ml-5 mr-5 mb-5 z-50">
            <ChatBot />
            <WhatsAppButton />
        </div>
    )
}

export default FixedButtons