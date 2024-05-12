import supabase from "@/utils/supabase/supabase";
import fs from "fs";

const Reader = require("@maxmind/geoip2-node").Reader;

export async function POST(request: Request) {
  const { searchParams, host, pathname } = new URL(request.url);
  const id = searchParams.get("id");
  const requestBody = await request.json();

  // TODO : uncomment this before deployment and comment the next line
  //   let ip = request.headers.get("x-forwarded-for");
  let ip = "2406:7400:45:66f:45dd:76c4:9f90:41ab";

  // reading country and city

  const dbBuffer = fs.readFileSync(
    `${process.cwd()}/src/app/api/userLanding/GeoLite2-City.mmdb`
  );
  const reader = Reader.openBuffer(dbBuffer);
  const countryAndCityResponse = reader.city(ip);

  //   console.log("RESPONSE CITY CODE", response, response.country, response.city);

  //   reading asn

  const dbBufferasn = fs.readFileSync(
    `${process.cwd()}/src/app/api/userLanding/GeoLite2-ASN.mmdb`
  );
  const readerasn = Reader.openBuffer(dbBufferasn);
  const asnResponse = readerasn.asn(ip);

  console.log(request, request.headers.get("sec-ch-ua-mobile"));

  const detailsFromRequest = {
    ip: request.headers.get("x-forwarded-for"),
    country: countryAndCityResponse.country.names.en,
    countryIsoCode: countryAndCityResponse.country.isoCode,
    city: countryAndCityResponse.city.names.en,
    continent: countryAndCityResponse.continent.names.en,
    continentCode: countryAndCityResponse.continent.code,
    state: countryAndCityResponse.subdivisions[0].names.en,
    stateCode: countryAndCityResponse.subdivisions[0].isoCode,
    latitude: countryAndCityResponse.location.latitude,
    longitude: countryAndCityResponse.location.longitude,
    timeZone: countryAndCityResponse.location.timeZone,
    postalCode: countryAndCityResponse.postal.code,
    isp: asnResponse.autonomousSystemOrganization,
    domainName: host,
    // path is wrong now, it should be the url path in client. convert this request to POST and get the request info in payload
    urlPath: requestBody.pathname,
    browser: request.headers.get("user-agent"),
    os: request.headers.get("sec-ch-ua-platform"),

    // countryAndCityResponse,
    // asnResponse,
  };

  //   TODO: find out what details are needed from the ip and store them in new table called requests and associate it with domain name id as foreign key

  const { data, error } = await supabase
    .from("requestLog")
    .insert([detailsFromRequest])
    .select();

  return Response.json(detailsFromRequest);
}
