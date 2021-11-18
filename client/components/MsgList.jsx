import MsgItem from "./MsgItem"

const msgs = [
  {
    id: 1,
    
  }
]

const MsgList = () => (
  <ul className="messages">{
    [].map(x => <MsgList {...x}/>)
  }</ul>
)

export default MsgList