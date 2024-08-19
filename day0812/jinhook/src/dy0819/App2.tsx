function Contacts() {
    return <div className="Contacts" />;
  }
  function Chat() {
    return <div className="Chat" />;
  }
  function SplitPane(props:any) {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
        </div>
      </div>
    );
  }
  function App2(props:any) {
    return (
      <SplitPane
        left={
          <Contacts />
        }
        right={
          <Chat />
        } />
    );
  }
 export default App2; 