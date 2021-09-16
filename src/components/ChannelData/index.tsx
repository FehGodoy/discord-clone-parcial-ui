import React, {useRef, useEffect} from 'react';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage,{Mention} from '../ChannelMessage';


const ChannelData: React.FC = () =>{
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;
        if (div){
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);
    
    return (
        <Container>
            <Messages>
                {Array.from(Array(15).keys()).map((n) =>(
                    <ChannelMessage 
                    author="Felipe Godoy"
                    date="15/09/2021"
                    content="Hoje é dia de Champions League"                
                />
                ))}

                <ChannelMessage 
                    author="Gabriel Marques"
                    date="15/09/2021"
                    content={
                        <>
                            <Mention>
                                @Felipe Godoy
                             </Mention>, bora assistir PSG ou Manchester United ?
                        </>
                    }  
                    hasMention
                    isBot             
                />
            </Messages>

            <InputWrapper>                
                <Input type="text" placeholder="Conversar em #chat-livre" />                
                <InputIcon />
            </InputWrapper>
        </Container>
    )
}
export default ChannelData;