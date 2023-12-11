// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';
// const ChatsPage = (props) => {
//     const chatProps = useMultiChatLogic(
//         '554304e9-6017-4afa-b5ae-abf083a1de5c',
//          props.user.username,
//          props.user.secret
//          );
//     return <div style={{ height: '100vh'}}>
//             <MultiChatSocket {...chatProps} />
//             <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
//         </div>;
//   };
//   export default ChatsPage

import { PrettyChatWindow } from 'react-chat-engine-pretty';
const ChatsPage = (props) => {
    return (
    <div style={{ height: '100vh'}}>
            {/* <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%'}} /> */}
            <PrettyChatWindow
                projectId='554304e9-6017-4afa-b5ae-abf083a1de5c'
                username={props.user.username}
                secret={props.user.secret}
                style={{height: '100%'}}
                />
        </div>
    )
  };
  export default ChatsPage;