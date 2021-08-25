import React, { ReactElement, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import './Admin.css'

export default function Admin(): ReactElement {
    const [activeItem, setActiveItem] = useState('home')

    function handleActiveItem(activeItem: string) {
        setActiveItem(activeItem);
    }

    return (
        <div className="background">
            <div>
                <Menu fluid pointing secondary vertical>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={() => handleActiveItem('home')}
                    />
                    <Menu.Item
                        name='Add Book'
                        active={activeItem === 'addBook'}
                        onClick={() => handleActiveItem('addBook')}
                    />
                    <Menu.Item
                        name='exit'
                        as={NavLink}
                        to="/"
                        active={activeItem === 'exit'}
                        onClick={() => handleActiveItem('exit')}
                    />

                </Menu>
            </div>


        </div>
    )
}
