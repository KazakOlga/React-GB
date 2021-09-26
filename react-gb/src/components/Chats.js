import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {addChat, removeChat} from '../state/actions/chats.js';
import Input from './Input'



export default function Chats(){
    const chats = useSelector((state) => state.chats)
    const dispatch = useDispatch()
    const history = useHistory()
    


    const handleChatLinkClick = (chat) => {
        history.push(`/chats/${chat.id}`)
    }
    
    const handleAddChat = (name) => {
        dispatch(addChat(`chat${Date.now()}`, name))
    }

    const handleRemoveChat = (chatId) => {
        dispatch(removeChat(chatId))
    }

    return (
        <div className="chats">
            <List className="chats__sidebar" subheader={<p>Список чатов</p>}>
                {Object.values(chats).map((chat) => (
                    <div className="chats__sidebar__item" key={chat.id}>
                        <ListItem
                            button
                            component="a"
                            onClick={() => handleChatLinkClick(chat)}
                        >
                            {chat.name}
                        </ListItem>
                        <IconButton
                            variant="contained"
                            onClick={() => handleRemoveChat(chat.id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </div>
                ))}
            </List>
            <Input
                label="Имя чата"
                placeholder="Введите имя чата"
                onSubmit={handleAddChat}
            />
        </div>
    )}