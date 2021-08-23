import { ReactElement } from 'react'
import BookImage from '../assets/undraw_book_lover_mkck.svg'
import "./Main.css";


export default function Main(): ReactElement {
    return (
        <div>
            <img alt="" src={BookImage} className="image" />
        </div>
    )
}