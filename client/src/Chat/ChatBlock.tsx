import './ChatBlock.css'

function ChatBlock() {
  return (
    <>
      <div className="card-cc">
        <div className="chats-header">Chats</div>
          {/*<div className="chats-body">*/}
            <div className="chats-window">
                <ul className="chats-list" />
            </div>
          {/*</div>*/}
      </div>
    </>
  )
}

export default ChatBlock
