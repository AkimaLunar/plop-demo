import React from 'react'
import './Welcome.styles.css'
import Card from '../../elements/Card'
const Welcome = () => {
    return (
        <main className="welcome">
            <div className="layout__container welcome__container">
                <h1 className="typography__headline welcome__headline">Plop.js</h1>
                <Card className="welcome__card">
                    <p>This is a Plop.js demo.</p>
                </Card>
            </div>
        </main>
    )
}

export default Welcome
