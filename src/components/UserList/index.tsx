import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps{
    nickName: string;
    isBot ?: boolean;
}


const UserRow: React.FC <UserProps>= ({nickName, isBot}) => {
    return(
        <User>
            <Avatar className={isBot ? 'bot' : ''} />

            <strong>{nickName}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}


const UserList: React.FC = () =>{
    return (
        <Container>
            <Role> Disponível - 1  </Role>
            <UserRow nickName="Felipe Godoy" />

            <Role> Offline - 15  </Role>
            <UserRow nickName="Sabrina Santos" />

            <Role> Disponível - 8  </Role>
            <UserRow nickName="Guilherme Teixeira"  isBot/>

            <Role> Disponível - 9  </Role>
            <UserRow nickName="Alex Freitas" />

            <Role> Disponível - 51  </Role>
            <UserRow nickName="Luana Félix" />

            <Role> Disponível - 81  </Role>
            <UserRow nickName="Alberto Franco" />

            <Role> Disponível - 81  </Role>
            <UserRow nickName="Ana França" />

            <Role> Disponível - 81  </Role>
            <UserRow nickName="Maria Teixeira" />

            <Role> Disponível - 81  </Role>
            <UserRow nickName="Igor Moura" />

            <Role> Disponível - 81  </Role>
            <UserRow nickName="Cristiano Ronaldo" isBot />

            <Role> Disponível - 81  </Role>
            <UserRow nickName="Felipe Texas" />

            <Role> Disponível - 81  </Role>
            <UserRow nickName="Regina Godoy" />

            <Role> Disponível - 81  </Role>
            <UserRow nickName="Gabriel Santos" />

            <Role> Disponível - 81  </Role>
            <UserRow nickName="William Figueiredo" />

            <Role> Disponível - 81  </Role>
            <UserRow nickName="Fernado Morais" />

            <Role> Disponível - 81  </Role>
            <UserRow nickName="Pedro Alex" />
        </Container>
    )
}
export default UserList;