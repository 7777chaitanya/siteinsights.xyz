"use client";
import React, { useState, useEffect } from "react";
import DataChart from "@/components/DataChart";
import CodeSnippet from "@/components/CodeSnippet";
import SiteVisitorStats from "@/components/SiteVisitorStats";






const DomainAnalytics = ({ params }) => {
  const [siteAnalyticsData, setSiteAnalyticsData] = useState({})

  const {totalVisitors, uniqueVisitors, visitorsByDay} = siteAnalyticsData
  useEffect(() => {
    fetch("/api/siteStats", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ domainId: params.domainId }),
    }).then(res => res.json()).then(data => setSiteAnalyticsData(data));
  }, []);
  console.log("siteAnalyticsData", siteAnalyticsData)
  return (
    <div>
      {/* // TODO: domain name will be shown in a select field, the user should be able to switch to a different domain stats from this page */}
      <h3>{params.domainId}</h3>
      <CodeSnippet />
      <SiteVisitorStats totalVisitors={totalVisitors} uniqueVisitors={uniqueVisitors}/>
      <DataChart data={visitorsByDay}/>

    </div>
  );
};

export default DomainAnalytics;
