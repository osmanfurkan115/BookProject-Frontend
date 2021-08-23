import { ReactElement, useState } from 'react'
import { Menu } from 'semantic-ui-react'
import './Navi.css'

export default function Navi(): ReactElement {

    const [activeItem, setActiveItem] = useState<string>('home')

    function handleClick(name: string) {
        setActiveItem(name);
    }

    return (
        <div>

            <Menu pointing text fixed="top">
                <Menu.Menu position="left">
                    <Menu.Item
                        name='home'
                        // as={NavLink}
                        // to = "/"
                        active={activeItem === 'home'}
                        onClick={() => handleClick('home')}
                    />
                    <Menu.Item
                        name='test'
                        active={activeItem === 'test'}
                        onClick={() => handleClick('test')}
                    />
                </Menu.Menu>

            </Menu>
        </div>
    )
}