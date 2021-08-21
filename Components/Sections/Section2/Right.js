import styles from '../../../styles/Home.module.css'
import DWChart from 'react-datawrapper-chart'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import React, { useState } from 'react';

export default function Right() {

    const [key, setKey] = useState('home');

    return (


        <div className={styles.TabData}>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="home" title="1. Talent">
                    <div className={styles.DataWrapper}><DWChart title="Composition of PLP by Occupation" src="https://datawrapper.dwcdn.net/3Q1zc/1/" /></div>
                </Tab>
                <Tab eventKey="profile" title="2. New Perspectives">
                    <div className={styles.DataWrapper}><DWChart title="PLP by Higher Education" src="https://datawrapper.dwcdn.net/TrvlG/1/" /></div>
                </Tab>

            </Tabs>
        </div>

    )
}