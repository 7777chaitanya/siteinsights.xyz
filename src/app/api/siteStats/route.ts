import supabase from "@/utils/supabase/supabase";

const Reader = require("@maxmind/geoip2-node").Reader;

export async function POST(request: Request) {
  const { searchParams, host, pathname } = new URL(request.url);
  const id = searchParams.get("id");
  const requestBody = await request.json();
  const domainid = requestBody.domainId;

  let { data: requestLog, error } = await supabase
    .from("requestLog")
    .select("*")

    // Filters
    .eq("domainName", host);

  console.log(requestLog);

  let uniqueVisitors = requestLog?.map((eachLog) => {
    return eachLog.ip;
  }); // show the first visited date of the new visitor
  var uniqueVisitorsSet = new Set(uniqueVisitors);

  const visitorsByDay = requestLog?.reduce((acc, eachLog) => {
    const dateObj = new Date(eachLog.created_at);

    const date = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const key = `${date}/${month}`;

    if (acc[key]) {
      acc[key] += 1;
    } else {
      acc[key] = 1;
    }
    return acc;
  }, {});

  const formattedVistorsByDay = Object.keys(visitorsByDay).map((each) => {
    return {
      name: each,
      Visitors: visitorsByDay[each],
    };
  });

  console.log(visitorsByDay);

  // compose the stats for the domain id here

  return Response.json({
    totalVisitors: requestLog?.length,
    uniqueVisitors: uniqueVisitorsSet.size,
    visitorsByDay: formattedVistorsByDay,
  });
}
