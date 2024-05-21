import React from 'react'
import './SiteVisitorStats.css'

type Props = {}


const fields : any = {
    totalVisitors: 'Total Visitors',
    uniqueVisitors: 'UniqueVisitors'
}

const SiteVisitorStats = (props: any) => {
  return (
    <div className='allStatsContainer'>{
        Object.keys(fields).map(eachField => {
            return (
                <div className='eachStat'>
                    <div className='eachStatName'>{fields[eachField]}    </div>
                    <div className='eachStatValue'>{props[eachField]}</div>
                    
                    </div>
            )
        })
        }</div>
  )
}

export default SiteVisitorStats