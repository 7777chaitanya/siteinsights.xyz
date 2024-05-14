import supabase from "@/utils/supabase/supabase";

const Reader = require("@maxmind/geoip2-node").Reader;

export async function POST(request: Request) {
  const { searchParams, host, pathname } = new URL(request.url);
  const id = searchParams.get("id");
  const requestBody = await request.json();
  const domainid = requestBody.domainId
  
  // compose the stats for the domain id here
  
  

  return Response.json({});
}
