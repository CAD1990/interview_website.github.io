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
                <Tab eventKey="home" title="1. Dealignment">
                    <div className={styles.DataWrapper}><DWChart title="Exit Polling (2015 - 2019)" src="https://datawrapper.dwcdn.net/T1d2y/1/" /></div>
                </Tab>
                <Tab eventKey="profile" title="2. Polarisation">
                    <div className={styles.DataWrapper}><DWChart title="Polarisation by Education" src="https://datawrapper.dwcdn.net/Alvqx/1/" /></div>
                </Tab>
                <Tab eventKey="contact" title="3. Age">
                    <div className={styles.DataWrapper}><DWChart title="Constituency by Median Age" src="https://datawrapper.dwcdn.net/xlmDG/1/" /></div>
                </Tab>
                <Tab eventKey="future" title="4. The Future">
                    <div className={styles.DataWrapper}><DWChart title="Linear Model: Age and Education (2025)" src="https://datawrapper.dwcdn.net/QOkv9/1/" /></div>
                </Tab>
            </Tabs>
        </div>



    )
}
