import React from 'react'
import { IoSchool   } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import '../../Animation/AnimatedLetter.scss'
import { useTranslation } from 'react-i18next';
import { VerticalTimeline , VerticalTimelineElement } from 'react-vertical-timeline-component' 
import 'react-vertical-timeline-component/style.min.css'
function Timeline() {
  const {t} = useTranslation()
  return (
    <>
    
<div className='timeline-div'>

    <VerticalTimeline lineColor='#ffd700'>
  <VerticalTimelineElement
   className="custom-timeline-element"
    dateClassName="custom-date" 
    date='2022'
    iconStyle={{background:'#022c43', color:'#fff' }}
    icon={<IoSchool />}
    contentArrowStyle={{ borderRight: "17px solid  #ffd700" }}
    contentStyle={{
      backgroundColor: "#fff", 
      color: "#022c43", 
      border: '4px solid #ffd700',
      boxShadow: '-10px 15px 20px 5px rgba(255,255,255,0.4)' 
    }}
    >
    <h1 className='vertical-timeline-element--title'>
     {t('about.formation1')}

    </h1>
    <h3 className='vertical-timeline-element--subtitle' >
      {t('about.subformation1')}
    </h3>
  </VerticalTimelineElement>
  <VerticalTimelineElement
     className="custom-timeline-element"

    dateClassName="custom-date" 
    date='2022 - 2024'
    iconStyle={{background:'#022c43', color:'#fff' }}
    icon={<IoSchool />}
    contentArrowStyle={{ borderRight: "17px solid  #ffd700" }}
   

    >
    <h1 className='vertical-timeline-element--title'>
    
    {t('about.formation2')}

    </h1>
    <h3 className='vertical-timeline-element--subtitle' >
    {t('about.subformation1')}
    </h3>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   className="custom-timeline-element"
    dateClassName="custom-date" 
    date='1 Mai 2024 - 31 - Mai -2024'
    iconStyle={{background:'#022c43', color:'#fff' }}
    icon={<MdOutlineWorkOutline />}
    contentArrowStyle={{ borderRight: "17px solid  #ffd700" }}
    contentStyle={{
      backgroundColor: "#fff", 
      color: "#022c43", 
      border: '4px solid #ffd700',
      boxShadow: '-10px 15px 20px 5px rgba(255,255,255,0.4)' 
    }}
    >
    <h1 className='vertical-timeline-element--title'>
    
    {t('about.formation3')}

    </h1>
    <h3 className='vertical-timeline-element--subtitle' >
    {t('about.subformation1')}
    </h3>
  </VerticalTimelineElement>
</VerticalTimeline>
</div>
</>
  )
}

export default Timeline
