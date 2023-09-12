import React from 'react'
import TitleSection from '../../components/TitleSection'
import Card from './components/Card'
import icon from "../../assets/icon/arrow-down.svg"


function WhyUs() {
  let TitleObject = {
    titleSection: "Why Us",
    titleMain: "The Most important",
    titleGradient: "services we provide",
    description: "With our integrated CRM, project management, collaborationand invoicing capabilities,  you can manageyour business in one secure platform.",
  }
  let objectSection = [
    {
      id: "1",
      icon: icon,
      title: "Comprehensive coverage",
      description: "Our monitoring engine keeps a closer eye on wide range of markets, such as those hosted on Surface, Deep, and Dark Web, Hacking Forums, Code Sharing Sites, Paste Sites, Private Clouds, Telegram, Discord and what not. We collect as much data as possible to provide you with comprehensive protection."
    }, {
      id: "2",
      icon: icon,
      title: "Comprehensive coverage",
      description: "Our monitoring engine keeps a closer eye on wide range of markets, such as those hosted on Surface, Deep, and Dark Web, Hacking Forums, Code Sharing Sites, Paste Sites, Private Clouds, Telegram, Discord and what not. We collect as much data as possible to provide you with comprehensive protection."

    }, {
      id: "3",
      icon: icon,
      title: "Comprehensive coverage",
      description: "Our monitoring engine keeps a closer eye on wide range of markets, such as those hosted on Surface, Deep, and Dark Web, Hacking Forums, Code Sharing Sites, Paste Sites, Private Clouds, Telegram, Discord and what not. We collect as much data as possible to provide you with comprehensive protection."
    }, {
      id: "4",
      icon: icon,
      title: "Comprehensive coverage",
      description: "Our monitoring engine keeps a closer eye on wide range of markets, such as those hosted on Surface, Deep, and Dark Web, Hacking Forums, Code Sharing Sites, Paste Sites, Private Clouds, Telegram, Discord and what not. We collect as much data as possible to provide you with comprehensive protection."
    }, {
      id: "5",
      icon: icon,
      title: "Comprehensive coverage",
      description: "Our monitoring engine keeps a closer eye on wide range of markets, such as those hosted on Surface, Deep, and Dark Web, Hacking Forums, Code Sharing Sites, Paste Sites, Private Clouds, Telegram, Discord and what not. We collect as much data as possible to provide you with comprehensive protection."

    }, {
      id: "6",
      icon: icon,
      title: "Comprehensive coverage",
      description: "Our monitoring engine keeps a closer eye on wide range of markets, such as those hosted on Surface, Deep, and Dark Web, Hacking Forums, Code Sharing Sites, Paste Sites, Private Clouds, Telegram, Discord and what not. We collect as much data as possible to provide you with comprehensive protection."
    },
  ]

  return (
    <div>
      <div className="container container-scroll" id='why-us'>
        <TitleSection TitleObject={TitleObject} />
        <div className="grid-why-us">
          {objectSection.map((item) => {
            return (<Card key={item.id} data={item} />)
          })}
        </div>
      </div>
    </div>
  )
}

export default WhyUs