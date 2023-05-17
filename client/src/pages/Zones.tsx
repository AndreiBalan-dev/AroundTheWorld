import "bootstrap/dist/css/bootstrap.css";
import { SetStateAction, useEffect, useState } from "react";
import "animate.css/animate.min.css";
import { Helmet } from "react-helmet";

function Zones() {
  var aryIannaTimeZones = [
    "Europe/Andorra",
    "Asia/Dubai",
    "Asia/Kabul",
    "Europe/Tirane",
    "Asia/Yerevan",
    "Antarctica/Casey",
    "Antarctica/Davis",
    "Antarctica/DumontDUrville", // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
    "Antarctica/Mawson",
    "Antarctica/Palmer",
    "Antarctica/Rothera",
    "Antarctica/Syowa",
    "Antarctica/Troll",
    "Antarctica/Vostok",
    "America/Argentina/Buenos_Aires",
    "America/Argentina/Cordoba",
    "America/Argentina/Salta",
    "America/Argentina/Jujuy",
    "America/Argentina/Tucuman",
    "America/Argentina/Catamarca",
    "America/Argentina/La_Rioja",
    "America/Argentina/San_Juan",
    "America/Argentina/Mendoza",
    "America/Argentina/San_Luis",
    "America/Argentina/Rio_Gallegos",
    "America/Argentina/Ushuaia",
    "Pacific/Pago_Pago",
    "Europe/Vienna",
    "Australia/Lord_Howe",
    "Antarctica/Macquarie",
    "Australia/Hobart",
    "Australia/Currie",
    "Australia/Melbourne",
    "Australia/Sydney",
    "Australia/Broken_Hill",
    "Australia/Brisbane",
    "Australia/Lindeman",
    "Australia/Adelaide",
    "Australia/Darwin",
    "Australia/Perth",
    "Australia/Eucla",
    "Asia/Baku",
    "America/Barbados",
    "Asia/Dhaka",
    "Europe/Brussels",
    "Europe/Sofia",
    "Atlantic/Bermuda",
    "Asia/Brunei",
    "America/La_Paz",
    "America/Noronha",
    "America/Belem",
    "America/Fortaleza",
    "America/Recife",
    "America/Araguaina",
    "America/Maceio",
    "America/Bahia",
    "America/Sao_Paulo",
    "America/Campo_Grande",
    "America/Cuiaba",
    "America/Santarem",
    "America/Porto_Velho",
    "America/Boa_Vista",
    "America/Manaus",
    "America/Eirunepe",
    "America/Rio_Branco",
    "America/Nassau",
    "Asia/Thimphu",
    "Europe/Minsk",
    "America/Belize",
    "America/St_Johns",
    "America/Halifax",
    "America/Glace_Bay",
    "America/Moncton",
    "America/Goose_Bay",
    //"America/Blanc-Sablon",
    "America/Toronto",
    "America/Nipigon",
    "America/Thunder_Bay",
    "America/Iqaluit",
    "America/Pangnirtung",
    "America/Atikokan",
    "America/Winnipeg",
    "America/Rainy_River",
    "America/Resolute",
    "America/Rankin_Inlet",
    "America/Regina",
    "America/Swift_Current",
    "America/Edmonton",
    "America/Cambridge_Bay",
    "America/Yellowknife",
    "America/Inuvik",
    "America/Creston",
    "America/Dawson_Creek",
    "America/Fort_Nelson",
    "America/Vancouver",
    "America/Whitehorse",
    "America/Dawson",
    "Indian/Cocos",
    "Europe/Zurich",
    "Africa/Abidjan",
    "Pacific/Rarotonga",
    "America/Santiago",
    "America/Punta_Arenas",
    "Pacific/Easter",
    "Asia/Shanghai",
    "Asia/Urumqi",
    "America/Bogota",
    "America/Costa_Rica",
    "America/Havana",
    "Atlantic/Cape_Verde",
    "America/Curacao",
    "Indian/Christmas",
    "Asia/Nicosia",
    "Asia/Famagusta",
    "Europe/Prague",
    "Europe/Berlin",
    "Europe/Copenhagen",
    "America/Santo_Domingo",
    "Africa/Algiers",
    "America/Guayaquil",
    "Pacific/Galapagos",
    "Europe/Tallinn",
    "Africa/Cairo",
    "Africa/El_Aaiun",
    "Europe/Madrid",
    "Africa/Ceuta",
    "Atlantic/Canary",
    "Europe/Helsinki",
    "Pacific/Fiji",
    "Atlantic/Stanley",
    "Pacific/Chuuk",
    "Pacific/Pohnpei",
    "Pacific/Kosrae",
    "Atlantic/Faroe",
    "Europe/Paris",
    "Europe/London",
    "Asia/Tbilisi",
    "America/Cayenne",
    "Africa/Accra",
    "Europe/Gibraltar",
    "America/Godthab",
    "America/Danmarkshavn",
    "America/Scoresbysund",
    "America/Thule",
    "Europe/Athens",
    "Atlantic/South_Georgia",
    "America/Guatemala",
    "Pacific/Guam",
    "Africa/Bissau",
    "America/Guyana",
    "Asia/Hong_Kong",
    "America/Tegucigalpa",
    //"America/Port-au-Prince",
    "Europe/Budapest",
    "Asia/Jakarta",
    "Asia/Pontianak",
    "Asia/Makassar",
    "Asia/Jayapura",
    "Europe/Dublin",
    "Asia/Jerusalem",
    "Asia/Kolkata",
    "Indian/Chagos",
    "Asia/Baghdad",
    "Asia/Tehran",
    "Atlantic/Reykjavik",
    "Europe/Rome",
    "America/Jamaica",
    "Asia/Amman",
    "Asia/Tokyo",
    "Africa/Nairobi",
    "Asia/Bishkek",
    "Pacific/Tarawa",
    "Pacific/Enderbury",
    "Pacific/Kiritimati",
    "Asia/Pyongyang",
    "Asia/Seoul",
    "Asia/Almaty",
    "Asia/Qyzylorda",
    "Asia/Qostanay", // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
    "Asia/Aqtobe",
    "Asia/Aqtau",
    "Asia/Atyrau",
    "Asia/Oral",
    "Asia/Beirut",
    "Asia/Colombo",
    "Africa/Monrovia",
    "Europe/Vilnius",
    "Europe/Luxembourg",
    "Europe/Riga",
    "Africa/Tripoli",
    "Africa/Casablanca",
    "Europe/Monaco",
    "Europe/Chisinau",
    "Pacific/Majuro",
    "Pacific/Kwajalein",
    "Asia/Yangon",
    "Asia/Ulaanbaatar",
    "Asia/Hovd",
    "Asia/Choibalsan",
    "Asia/Macau",
    "America/Martinique",
    "Europe/Malta",
    "Indian/Mauritius",
    "Indian/Maldives",
    "America/Mexico_City",
    "America/Cancun",
    "America/Merida",
    "America/Monterrey",
    "America/Matamoros",
    "America/Mazatlan",
    "America/Chihuahua",
    "America/Ojinaga",
    "America/Hermosillo",
    "America/Tijuana",
    "America/Bahia_Banderas",
    "Asia/Kuala_Lumpur",
    "Asia/Kuching",
    "Africa/Maputo",
    "Africa/Windhoek",
    "Pacific/Noumea",
    "Pacific/Norfolk",
    "Africa/Lagos",
    "America/Managua",
    "Europe/Amsterdam",
    "Europe/Oslo",
    "Asia/Kathmandu",
    "Pacific/Nauru",
    "Pacific/Niue",
    "Pacific/Auckland",
    "Pacific/Chatham",
    "America/Panama",
    "America/Lima",
    "Pacific/Tahiti",
    "Pacific/Marquesas",
    "Pacific/Gambier",
    "Pacific/Port_Moresby",
    "Pacific/Bougainville",
    "Asia/Manila",
    "Asia/Karachi",
    "Europe/Warsaw",
    "America/Miquelon",
    "Pacific/Pitcairn",
    "America/Puerto_Rico",
    "Asia/Gaza",
    "Asia/Hebron",
    "Europe/Lisbon",
    "Atlantic/Madeira",
    "Atlantic/Azores",
    "Pacific/Palau",
    "America/Asuncion",
    "Asia/Qatar",
    "Indian/Reunion",
    "Europe/Bucharest",
    "Europe/Belgrade",
    "Europe/Kaliningrad",
    "Europe/Moscow",
    "Europe/Simferopol",
    "Europe/Kirov",
    "Europe/Astrakhan",
    "Europe/Volgograd",
    "Europe/Saratov",
    "Europe/Ulyanovsk",
    "Europe/Samara",
    "Asia/Yekaterinburg",
    "Asia/Omsk",
    "Asia/Novosibirsk",
    "Asia/Barnaul",
    "Asia/Tomsk",
    "Asia/Novokuznetsk",
    "Asia/Krasnoyarsk",
    "Asia/Irkutsk",
    "Asia/Chita",
    "Asia/Yakutsk",
    "Asia/Khandyga",
    "Asia/Vladivostok",
    //"Asia/Ust-Nera",
    "Asia/Magadan",
    "Asia/Sakhalin",
    "Asia/Srednekolymsk",
    "Asia/Kamchatka",
    "Asia/Anadyr",
    "Asia/Riyadh",
    "Pacific/Guadalcanal",
    "Indian/Mahe",
    "Africa/Khartoum",
    "Europe/Stockholm",
    "Asia/Singapore",
    "America/Paramaribo",
    "Africa/Juba",
    "Africa/Sao_Tome",
    "America/El_Salvador",
    "Asia/Damascus",
    "America/Grand_Turk",
    "Africa/Ndjamena",
    "Indian/Kerguelen",
    "Asia/Bangkok",
    "Asia/Dushanbe",
    "Pacific/Fakaofo",
    "Asia/Dili",
    "Asia/Ashgabat",
    "Africa/Tunis",
    "Pacific/Tongatapu",
    "Europe/Istanbul",
    "America/Port_of_Spain",
    "Pacific/Funafuti",
    "Asia/Taipei",
    "Europe/Kiev",
    "Europe/Uzhgorod",
    "Europe/Zaporozhye",
    "Pacific/Wake",
    "America/New_York",
    "America/Detroit",
    "America/Kentucky/Louisville",
    "America/Kentucky/Monticello",
    "America/Indiana/Indianapolis",
    "America/Indiana/Vincennes",
    "America/Indiana/Winamac",
    "America/Indiana/Marengo",
    "America/Indiana/Petersburg",
    "America/Indiana/Vevay",
    "America/Chicago",
    "America/Indiana/Tell_City",
    "America/Indiana/Knox",
    "America/Menominee",
    "America/North_Dakota/Center",
    "America/North_Dakota/New_Salem",
    "America/North_Dakota/Beulah",
    "America/Denver",
    "America/Boise",
    "America/Phoenix",
    "America/Los_Angeles",
    "America/Anchorage",
    "America/Juneau",
    "America/Sitka",
    "America/Metlakatla",
    "America/Yakutat",
    "America/Nome",
    "America/Adak",
    "Pacific/Honolulu",
    "America/Montevideo",
    "Asia/Samarkand",
    "Asia/Tashkent",
    "America/Caracas",
    "Asia/Ho_Chi_Minh",
    "Pacific/Efate",
    "Pacific/Wallis",
    "Pacific/Apia",
    "Africa/Johannesburg",
  ];
  let timeZonesLabelEurope: any[] = [];
  let timeZonesLabelPacific: any[] = [];
  let timeZonesLabelAsia: any[] = [];
  let timeZonesLabelAfrica: any[] = [];
  let timeZonesLabelAmerica: any[] = [];
  let timeZonesLabelIndian: any[] = [];
  let timeZonesLabelAtlantic: any[] = [];
  let timeZonesLabelAustralia: any[] = [];
  let timeZonesLabel: any[] = [];

  let date = new Date();

  function pushToArray(timeZone: string, value: string, zone: string) {
    switch (zone) {
      case "europe":
        timeZonesLabelEurope.push({
          label: timeZone,
          value: value,
        });
        break;
      case "pacific":
        timeZonesLabelPacific.push({
          label: timeZone,
          value: value,
        });
        break;
      case "asia":
        if (
          timeZone.includes("Port-au-Prince") ||
          timeZone.includes("Ust-Nera") ||
          timeZone.includes("Blanc-Sablon")
        ) {
          timeZone = timeZone.replaceAll("-", "_");
          console.log(timeZone);
        }
        timeZonesLabelAsia.push({
          label: timeZone,
          value: value,
        });
        break;
      case "africa":
        timeZonesLabelAfrica.push({
          label: timeZone,
          value: value,
        });
        break;
      case "america":
        if (
          timeZone.includes("Argentina/") ||
          timeZone.includes("Kentucky/") ||
          timeZone.includes("North_Dakota/") ||
          timeZone.includes("Indiana/")
        ) {
          timeZone = timeZone.replace("Argentina/", "");
          timeZone = timeZone.replace("Kentucky/", "");
          timeZone = timeZone.replace("North_Dakota/", "");
          timeZone = timeZone.replace("Indiana/", "");
        }
        if (
          timeZone.includes("Port-au-Prince") ||
          timeZone.includes("Ust-Nera") ||
          timeZone.includes("Blanc-Sablon")
        ) {
          timeZone = timeZone.replaceAll("-", "_");
        }
        timeZonesLabelAmerica.push({
          label: timeZone,
          value: value,
        });
        break;
      case "indian":
        timeZonesLabelIndian.push({
          label: timeZone,
          value: value,
        });
        break;
      case "atlantic":
        timeZonesLabelAtlantic.push({
          label: timeZone,
          value: value,
        });
        break;
      case "australia":
        timeZonesLabelAustralia.push({
          label: timeZone,
          value: value,
        });
        break;
      case "all":
        timeZonesLabel.push({
          label: timeZone,
          value: value,
        });
        break;
    }
  }

  function pushSort(timeZone: string, strTime: string) {
    pushToArray(
      timeZone,
      `${timeZone} - Data de: ${strTime.split(",")[0]}\nOra: ${
        strTime.split(",")[1]
      }`,
      "all"
    );
    if (timeZone.includes("Europe")) {
      pushToArray(
        timeZone,
        `${timeZone} - Data de: ${strTime.split(",")[0]}\nOra: ${
          strTime.split(",")[1]
        }`,
        "europe"
      );
    } else if (timeZone.includes("Pacific")) {
      pushToArray(
        timeZone,
        `${timeZone} - Data de: ${strTime.split(",")[0]}\nOra: ${
          strTime.split(",")[1]
        }`,
        "pacific"
      );
    } else if (timeZone.includes("Asia")) {
      pushToArray(
        timeZone,
        `${timeZone} - Data de: ${strTime.split(",")[0]}\nOra: ${
          strTime.split(",")[1]
        }`,
        "asia"
      );
    } else if (timeZone.includes("Africa")) {
      pushToArray(
        timeZone,
        `${timeZone} - Data de: ${strTime.split(",")[0]}\nOra: ${
          strTime.split(",")[1]
        }`,
        "africa"
      );
    } else if (timeZone.includes("America")) {
      pushToArray(
        timeZone,
        `${timeZone} - Data de: ${strTime.split(",")[0]}\nOra: ${
          strTime.split(",")[1]
        }`,
        "america"
      );
    } else if (timeZone.includes("Indian")) {
      pushToArray(
        timeZone,
        `${timeZone} - Data de: ${strTime.split(",")[0]}\nOra: ${
          strTime.split(",")[1]
        }`,
        "indian"
      );
    } else if (timeZone.includes("Atlantic")) {
      pushToArray(
        timeZone,
        `${timeZone} - Data de: ${strTime.split(",")[0]}\nOra: ${
          strTime.split(",")[1]
        }`,
        "atlantic"
      );
    } else if (timeZone.includes("Australia")) {
      pushToArray(
        timeZone,
        `${timeZone} - Data de: ${strTime.split(",")[0]}\nOra: ${
          strTime.split(",")[1]
        }`,
        "australia"
      );
    }
  }

  let compareTimezones = (
    timeZoneA: { label: string },
    timeZoneB: { label: string }
  ) => {
    if (timeZoneA.label < timeZoneB.label) {
      return -1;
    } else if (timeZoneA.label > timeZoneB.label) {
      return 1;
    } else {
      return 0;
    }
  };

  var pushTimezones = () => {
    aryIannaTimeZones.forEach((timeZone) => {
      let strTime = date.toLocaleString("en-US", { timeZone: `${timeZone}` });
      pushSort(timeZone, strTime);
    });
    timeZonesLabelEurope.sort(compareTimezones);
    timeZonesLabelPacific.sort(compareTimezones);
    timeZonesLabelAsia.sort(compareTimezones);
    timeZonesLabelAfrica.sort(compareTimezones);
    timeZonesLabelAmerica.sort(compareTimezones);
    timeZonesLabelIndian.sort(compareTimezones);
    timeZonesLabelAtlantic.sort(compareTimezones);
    timeZonesLabelAustralia.sort(compareTimezones);
    timeZonesLabel.sort(compareTimezones);
  };
  pushTimezones();
  let [timezone, setTimezone] = useState("Selecteaza o zona");
  let [dummy, setDummy] = useState(0);
  let [europeHidden, setEuropeHidden] = useState<boolean | undefined>(true);
  let [pacificHidden, setPacificHidden] = useState<boolean | undefined>(true);
  let [asiaHidden, setAsiaHidden] = useState<boolean | undefined>(true);
  let [africaHidden, setAfricaHidden] = useState<boolean | undefined>(true);
  let [americaHidden, setAmericaHidden] = useState<boolean | undefined>(true);
  let [indianHidden, setIndianHidden] = useState<boolean | undefined>(true);
  let [atlanticHidden, setAtlanticHidden] = useState<boolean | undefined>(true);
  let [australiaHidden, setAustraliaHidden] = useState<boolean | undefined>(
    true
  );
  let [europeHiddenText, setEuropeHiddenText] = useState("Arata Europa");
  let [pacificHiddenText, setPacificHiddenText] = useState("Arata Pacific");
  let [asiaHiddenText, setAsiaHiddenText] = useState("Arata Asia");
  let [africaHiddenText, setAfricaHiddenText] = useState("Arata Africa");
  let [americaHiddenText, setAmericaHiddenText] = useState("Arata America");
  let [indianHiddenText, setIndianHiddenText] = useState("Arata Indian");
  let [atlanticHiddenText, setAtlanticHiddenText] = useState("Arata Atlantic");
  let [australiaHiddenText, setAustraliaHiddenText] =
    useState("Arata Australia");
  let [europeHiddenTextCSS, setEuropeHiddenTextCSS] = useState(
    "btn btn-secondary px-2 me-3 my-3 animate__animated animate__fadeInUp animate__fast"
  );
  let [pacificHiddenTextCSS, setPacificHiddenTextCSS] = useState(
    "btn btn-secondary px-2 me-3 my-3 animate__animated animate__fadeInUp animate__fast delay-1"
  );
  let [asiaHiddenTextCSS, setAsiaHiddenTextCSS] = useState(
    "btn btn-secondary px-2 me-3 my-3 animate__animated animate__fadeInUp animate__fast delay-2"
  );
  let [africaHiddenTextCSS, setAfricaHiddenTextCSS] = useState(
    "btn btn-secondary px-2 me-3 my-3 animate__animated animate__fadeInUp animate__fast delay-3"
  );
  let [americaHiddenTextCSS, setAmericaHiddenTextCSS] = useState(
    "btn btn-secondary px-2 me-3 my-3 animate__animated animate__fadeInUp animate__fast delay-4"
  );
  let [indianHiddenTextCSS, setIndianHiddenTextCSS] = useState(
    "btn btn-secondary px-2 me-3 my-3 animate__animated animate__fadeInUp animate__fast delay-5"
  );
  let [atlanticHiddenTextCSS, setAtlanticHiddenTextCSS] = useState(
    "btn btn-secondary px-2 me-3 my-3 animate__animated animate__fadeInUp animate__fast delay-6"
  );
  let [australiaHiddenTextCSS, setAustraliaHiddenTextCSS] = useState(
    "btn btn-secondary px-2 me-3 my-3 animate__animated animate__fadeInUp animate__fast delay-7"
  );
  let handleTimeChange = (e: { target: { value: SetStateAction<string> } }) => {
    setTimezone(e.target.value);
  };
  function refresh() {
    setDummy(dummy + 1);
  }

  function checkTime(timeLabel: any) {
    return timeLabel;
  }

  function hideButton(zone: string) {
    if (zone == "europe") {
      let text = europeHidden ? "Ascunde Europa" : "Arata Europa";
      let css = europeHidden
        ? "btn btn-warning px-2 me-3 my-3"
        : "btn btn-secondary px-2 me-3 my-3";
      setEuropeHiddenText(text);
      setEuropeHiddenTextCSS(css);
      return setEuropeHidden(!europeHidden);
    } else if (zone == "pacific") {
      let text = pacificHidden ? "Ascunde Pacific" : "Arata Pacific";
      let css = pacificHidden
        ? "btn btn-warning px-2 me-3 my-3"
        : "btn btn-secondary px-2 me-3 my-3";
      setPacificHiddenText(text);
      setPacificHiddenTextCSS(css);
      return setPacificHidden(!pacificHidden);
    } else if (zone == "asia") {
      let text = asiaHidden ? "Ascunde Asia" : "Arata Asia";
      let css = asiaHidden
        ? "btn btn-warning px-2 me-3 my-3"
        : "btn btn-secondary px-2 me-3 my-3";
      setAsiaHiddenText(text);
      setAsiaHiddenTextCSS(css);
      return setAsiaHidden(!asiaHidden);
    } else if (zone == "africa") {
      let text = africaHidden ? "Ascunde Africa" : "Arata Africa";
      let css = africaHidden
        ? "btn btn-warning px-2 me-3 my-3"
        : "btn btn-secondary px-2 me-3 my-3";
      setAfricaHiddenText(text);
      setAfricaHiddenTextCSS(css);
      return setAfricaHidden(!africaHidden);
    } else if (zone == "america") {
      let text = americaHidden ? "Ascunde America" : "Arata America";
      let css = americaHidden
        ? "btn btn-warning px-2 me-3 my-3"
        : "btn btn-secondary px-2 me-3 my-3";
      setAmericaHiddenText(text);
      setAmericaHiddenTextCSS(css);
      return setAmericaHidden(!americaHidden);
    } else if (zone == "indian") {
      let text = indianHidden ? "Ascunde Indian" : "Arata Indian";
      let css = indianHidden
        ? "btn btn-warning px-2 me-3 my-3"
        : "btn btn-secondary px-2 me-3 my-3";
      setIndianHiddenText(text);
      setIndianHiddenTextCSS(css);
      return setIndianHidden(!indianHidden);
    } else if (zone == "atlantic") {
      let text = atlanticHidden ? "Ascunde Atlantic" : "Arata Atlantic";
      let css = atlanticHidden
        ? "btn btn-warning px-2 me-3 my-3"
        : "btn btn-secondary px-2 me-3 my-3";
      setAtlanticHiddenText(text);
      setAtlanticHiddenTextCSS(css);
      return setAtlanticHidden(!atlanticHidden);
    } else if (zone == "australia") {
      let text = australiaHidden ? "Ascunde Australia" : "Arata Australia";
      let css = australiaHidden
        ? "btn btn-warning px-2 me-3 my-3"
        : "btn btn-secondary px-2 me-3 my-3";
      setAustraliaHiddenText(text);
      setAustraliaHiddenTextCSS(css);
      return setAustraliaHidden(!australiaHidden);
    }

    return 0;
  }

  return (
    <>
      <div className="spBody">
        <Helmet>
          <title>Zone</title>
        </Helmet>
        <center>
          <div className="text-white px-2 animate__animated animate__fadeInLeft">
            {timezone}
            <br />
            <div className="d-flex justify-content-center">
              <select onChange={handleTimeChange}>
                <option value="Selecteaza o zona">
                  -- Selecteaza o zona --
                </option>
                {timeZonesLabel.map((time) => (
                  <option value={time.value}>{checkTime(time.label)}</option>
                ))}
              </select>
            </div>
          </div>
        </center>
        <div className="text-white px-1">
          <center>
            <br></br>
            <h2 className="animate__animated animate__fadeInDown">
              Lista cu fusurile orare din jurul globului:
            </h2>
            <span className="animate__animated animate__fadeIn">
              Pentru a cauta o zona din lista de mai jos, apasa pe unul dintre
              cele 8 butoane si foloseste combinatia de taste CTRL+F, sau
              foloseste meniul de selectare de mai sus.
            </span>
            <br></br>
            <br></br>
            <button
              onClick={() => hideButton("europe")}
              className={europeHiddenTextCSS}
            >
              {europeHiddenText}
            </button>
            <button
              onClick={() => hideButton("pacific")}
              className={pacificHiddenTextCSS}
            >
              {pacificHiddenText}
            </button>
            <button
              onClick={() => hideButton("asia")}
              className={asiaHiddenTextCSS}
            >
              {asiaHiddenText}
            </button>
            <button
              onClick={() => hideButton("africa")}
              className={africaHiddenTextCSS}
            >
              {africaHiddenText}
            </button>
            <button
              onClick={() => hideButton("america")}
              className={americaHiddenTextCSS}
            >
              {americaHiddenText}
            </button>
            <button
              onClick={() => hideButton("indian")}
              className={indianHiddenTextCSS}
            >
              {indianHiddenText}
            </button>
            <button
              onClick={() => hideButton("atlantic")}
              className={atlanticHiddenTextCSS}
            >
              {atlanticHiddenText}
            </button>
            <button
              onClick={() => hideButton("australia")}
              className={australiaHiddenTextCSS}
            >
              {australiaHiddenText}
            </button>
            <button
              onClick={refresh}
              className="btn btn-success px-2 ml-5 fixed-top buttonZones animate__animated animate__fadeIn"
            >
              Reinprospatare Timpuri
            </button>
          </center>
          <center>
            <div className="d-inline-flex p-2 flexBasis flex-lg-nowrap text-center">
              <div className="d-flex flex-column flex-sm-fill p-2 flexBasis">
                <h1 hidden={europeHidden} className="text-info">
                  Europa
                </h1>
                {timeZonesLabelEurope.map((time) => (
                  <span
                    className="p-2 flex-sm-row-reverse px-2 ml-5"
                    hidden={europeHidden}
                  >
                    <h3 className="text-information text-center">
                      {time.label.split("Europe")[1].slice(1)}
                    </h3>
                    <h5 className="text-secondary">
                      {
                        time.value
                          .split("-")[1]
                          .slice(1)
                          .slice(0, 19)
                          .split("O")[0]
                      }
                      <br></br>
                      {time.value.split("-")[1].slice(1).slice(-17)}
                    </h5>
                  </span>
                ))}
              </div>
              <div className="d-inline-flex flex-column flex-sm-fill p-2 flexBasis text-center">
                <h1 hidden={pacificHidden} className="text-info">
                  Pacific
                </h1>
                {timeZonesLabelPacific.map((time) => (
                  <span
                    className="p-2 flex-sm-row-reverse px-2 ml-5"
                    hidden={pacificHidden}
                  >
                    <h3 className="text-information text-center">
                      {time.label.split("Pacific")[1].slice(1)}
                    </h3>
                    <h5 className="text-secondary">
                      {
                        time.value
                          .split("-")[1]
                          .slice(1)
                          .slice(0, 19)
                          .split("O")[0]
                      }
                      <br></br>
                      {time.value.split("-")[1].slice(1).slice(-17)}
                    </h5>
                  </span>
                ))}
              </div>
              <div className="d-inline-flex flex-column flex-sm-fill p-2 flexBasis text-center">
                <h1 hidden={asiaHidden} className="text-info">
                  Asia
                </h1>
                {timeZonesLabelAsia.map((time) => (
                  <span
                    className="p-2 flex-sm-row-reverse px-2 ml-5"
                    hidden={asiaHidden}
                  >
                    <h3 className="text-information text-center">
                      {time.label.split("Asia")[1].slice(1)}
                    </h3>
                    <h5 className="text-secondary">
                      {
                        time.value
                          .split("-")[1]
                          .slice(1)
                          .slice(0, 19)
                          .split("O")[0]
                      }
                      <br></br>
                      {time.value.split("-")[1].slice(1).slice(-17)}
                    </h5>
                  </span>
                ))}
              </div>
              <div className="d-inline-flex flex-column flex-sm-fill p-2 flexBasis text-center">
                <h1 hidden={africaHidden} className="text-info">
                  Africa
                </h1>
                {timeZonesLabelAfrica.map((time) => (
                  <span
                    className="p-2 flex-sm-row-reverse px-2 ml-5"
                    hidden={africaHidden}
                  >
                    <h3 className="text-information text-center">
                      {time.label.split("Africa")[1].slice(1)}
                    </h3>
                    <h5 className="text-secondary">
                      {
                        time.value
                          .split("-")[1]
                          .slice(1)
                          .slice(0, 19)
                          .split("O")[0]
                      }
                      <br></br>
                      {time.value.split("-")[1].slice(1).slice(-17)}
                    </h5>
                  </span>
                ))}
              </div>
              <div className="d-inline-flex flex-column flex-sm-fill p-2 flexBasis text-center">
                <h1 hidden={americaHidden} className="text-info">
                  America
                </h1>
                {timeZonesLabelAmerica.map((time) => (
                  <span
                    className="p-2 flex-sm-row-reverse px-2 ml-5"
                    hidden={americaHidden}
                  >
                    <h3 className="text-information text-center">
                      {time.label.split("America")[1].slice(1)}
                    </h3>
                    <h5 className="text-secondary text-center">
                      {
                        time.value
                          .split("-")[1]
                          .slice(1)
                          .slice(0, 19)
                          .split("O")[0]
                      }
                      <br></br>
                      {time.value.split("-")[1].slice(1).slice(-17)}
                    </h5>
                  </span>
                ))}
              </div>
              <div className="d-inline-flex flex-column flex-sm-fill p-2 flexBasis text-center">
                <h1 hidden={indianHidden} className="text-info">
                  Indian
                </h1>
                {timeZonesLabelIndian.map((time) => (
                  <span
                    className="p-2 flex-sm-row-reverse px-2 ml-5"
                    hidden={indianHidden}
                  >
                    <h3 className="text-information text-center">
                      {time.label.split("Indian")[1].slice(1)}
                    </h3>
                    <h5 className="text-secondary">
                      {
                        time.value
                          .split("-")[1]
                          .slice(1)
                          .slice(0, 19)
                          .split("O")[0]
                      }
                      <br></br>
                      {time.value.split("-")[1].slice(1).slice(-17)}
                    </h5>
                  </span>
                ))}
              </div>
              <div className="d-inline-flex flex-column flex-sm-fill p-2 flexBasis text-center">
                <h1 hidden={atlanticHidden} className="text-info">
                  Atlantic
                </h1>
                {timeZonesLabelAtlantic.map((time) => (
                  <span
                    className="p-2 flex-sm-row-reverse px-2 ml-5"
                    hidden={atlanticHidden}
                  >
                    <h3 className="text-information text-center">
                      {time.label.split("Atlantic")[1].slice(1)}
                    </h3>
                    <h5 className="text-secondary">
                      {
                        time.value
                          .split("-")[1]
                          .slice(1)
                          .slice(0, 19)
                          .split("O")[0]
                      }
                      <br></br>
                      {time.value.split("-")[1].slice(1).slice(-17)}
                    </h5>
                  </span>
                ))}
              </div>
              <div className="d-inline-flex flex-column flex-sm-fill p-2 flexBasis text-center">
                <h1 hidden={australiaHidden} className="text-info">
                  Australia
                </h1>
                {timeZonesLabelAustralia.map((time) => (
                  <span
                    className="p-2 flex-sm-row-reverse px-2 ml-5"
                    hidden={australiaHidden}
                  >
                    <h3 className="text-information text-center">
                      {time.label.split("Australia")[1].slice(1)}
                    </h3>
                    <h5 className="text-secondary">
                      {
                        time.value
                          .split("-")[1]
                          .slice(1)
                          .slice(0, 19)
                          .split("O")[0]
                      }
                      <br></br>
                      {time.value.split("-")[1].slice(1).slice(-17)}
                    </h5>
                  </span>
                ))}
              </div>
            </div>
          </center>
        </div>
      </div>
    </>
  );
}

export default Zones;
