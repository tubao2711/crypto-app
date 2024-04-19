import React from 'react'
import { Layout, Typography, Space } from 'antd'
import { Link, Routes, Route } from 'react-router-dom'

import { Navbar, Homepage, Exchanges, CryptoDetails, Cryptocurrencies, News } from './components'
import './App.css'


const App = () => {
    return (
        <div className='app'>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route exact path='/' element={<Homepage />}>
                            </Route>
                            <Route exact path='/exchanges' element={<Exchanges />}>
                            </Route>
                            <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />}>
                            </Route>
                            <Route exact path='/crypto/:coinId' element={<CryptoDetails />}>
                            </Route>
                            <Route exact path='/news' element={<News />}>
                            </Route>
                        </Routes>
                    </div>
                </Layout>
            <div className="footer">
                <div className="footer">
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021 {" "}
                        <Link to="/">
                            Cryptoverse Inc.
                        </Link> <br />
                        All Rights Reserved.
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
            </div>
        </div>
    )
}

export default App
