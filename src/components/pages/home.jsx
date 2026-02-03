import React from 'react'
import Hero from '../home/hero'
import '../home/home.css'
import OverviewSection from '../home/overviewSection '

export default function Home() {
    return (
        <div className="home-page">
            <Hero />
            <OverviewSection />
        </div>
    )
}
