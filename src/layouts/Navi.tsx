import { ReactElement, useState } from 'react'
import { Button, Menu } from 'semantic-ui-react'
import './Navi.css'
import BookImage from '../assets/undraw_book_lover_mkck.svg'
import { NavLink } from 'react-router-dom'

export default function Navi(): ReactElement {

    const [activeItem, setActiveItem] = useState<string>('home')

    function handleClick(name: string) {
        setActiveItem(name);
    }

    return (
        <div>

            <Menu secondary text fixed="top">
               <img alt="" src={BookImage} width="80px" style={{marginLeft: 30, marginTop: 10}} />
                <Menu.Menu position="left">
                    <Menu.Item
                        as={NavLink}
                        to = "/"
                        exact={true}
                        name='home'
                        active={activeItem === 'home'}
                        onClick={() => handleClick('home')}
                    />
                    <Menu.Item
                        as={NavLink}
                        to = "/books"
                        name='books'
                        exact={true}
                        active={activeItem === 'books'}
                        onClick={() => handleClick('books')}
                    />
                </Menu.Menu>

                <Menu.Menu position="right">
                  <Button
                       positive
                       as={NavLink} 
                       to = "/admin" 
                       active={activeItem === 'admin'} 
                       onClick={() => handleClick('admin')} 
                       content="Admin Panel"
                   />
                </Menu.Menu>

            </Menu>
        </div>
    )
}