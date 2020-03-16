import React, {Fragment} from 'react'
import styles from './Layout.module.scss'

const layout = props => (
    <Fragment>
        <div>Navbar</div>
        <main className = {styles.content}>
            {props.children}
        </main>
        <div>Footer</div>
    </Fragment>
)

export default layout