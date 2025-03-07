import React from 'react'

export const Dashboard = () => {
  return (
    <div style = {{width:"100%"}}>
        <h2>Dashboard</h2>
        <h3>Top 3 personajes en Dragon Ball Z Dokkan Battle</h3>

        <ul>
          <li>LR Incomparable Radiance Super Vegito</li>
          <li>LR Unprecedented Miracle Super Gogeta</li>
          <li>LR Saiyan Warriors with Ultimate Power Super Saiyan 4 Gogeta</li>
        </ul>
        <img src="/images/VegitoLR.jpeg" alt="LR Incomparable Radiance Super Vegito" width="200" height="250"/>
        <img src="/images/GogetaLR.jpeg" alt="LR Unprecedented Miracle Super Gogeta" width="200" height="250"/>
        <img src="/images/LR gogeta SSJ4.jpg" alt="LR Saiyan Warriors with Ultimate Power Super Saiyan 4 Gogeta" width="200" height="250"/>
    </div>
  )
}