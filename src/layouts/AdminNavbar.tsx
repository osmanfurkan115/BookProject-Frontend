import { ReactElement, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import '../pages/Admin.css'

export default function AdminNavbar(): ReactElement {

    const [activeItem, setActiveItem] = useState('home')

    function handleActiveItem(activeItem: string) {
        setActiveItem(activeItem);
    }
    
    return (
        <div className="background">
            <Menu fluid pointing secondary vertical>
                    <Menu.Item
                        name='home'
                        as={NavLink}
                        exact={true}
                        to="/admin"
                        active={activeItem === 'home'}
                        onClick={() => handleActiveItem('home')}
                    />
                    <Menu.Item
                        name='Add Book'
                        as={NavLink}
                        exact={true}
                        to="/admin/addBook"
                        active={activeItem === 'addBook'}
                        onClick={() => handleActiveItem('addBook')}
                    />
                    <Menu.Item
                        name='Exit'
                        exact={true}
                        as={NavLink}
                        to="/"
                        active={activeItem === 'exit'}
                        onClick={() => handleActiveItem('exit')}
                    />

                </Menu>
        </div>
    )
}
