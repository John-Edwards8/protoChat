import React from 'react';
import { Button } from "@material-tailwind/react";

class ChatButton extends React.Component {
    render() {
        return (
            // <button
            //     className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
            //     onClick={() => {}}
            // >
            // </button>
            <Button>Send</Button>
        );
    }
}

export default ChatButton;