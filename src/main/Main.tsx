import { ReactElement } from 'react'
import { Grid, Header, Icon, Search } from 'semantic-ui-react';
import BookImage from '../assets/undraw_book_lover_mkck.svg'
import Navi from '../layouts/Navi';
import "./Main.css";

export default function Main(): ReactElement {
    return (
        <div className="background">
            <Navi/>
            <div>
                <img alt="" src={BookImage} className="image" />
            </div>

            <div className="text">
                <h1 className="header">Lorem Ipsum</h1>
                <p>
                    Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className="box">
                    <Grid padded textAlign='center'>

                            <Grid.Column>
                                <Header icon>
                                    <Icon name='search' />
                                    Find Book
                                </Header>

                                <Search input={{ icon: 'search', iconPosition: 'right' }}
                                 placeholder='Search book...'
                                  />
                            </Grid.Column>
                    </Grid>
            </div>






        </div>
    )
}