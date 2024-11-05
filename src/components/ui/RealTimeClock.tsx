'use client'

import { useEffect, useState } from 'react'

export default function RealTimeClock() {
  const [time, setTime] = useState(new Date())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  if (!mounted) {
    return null
  }

  const seconds = time.getSeconds()
  const minutes = time.getMinutes()
  const rawHours = time.getHours()
  const hours = rawHours > 12 ? rawHours - 12 : rawHours === 0 ? 12 : rawHours

  const secondsDegrees = (seconds / 60) * 360
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30

  return (
    <div className="flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="565"
        height="565"
        viewBox="0 0 565 565"
        aria-label="Analog clock"
        role="img"
        className="text-primary w-[100px] h-[100px]"
      >
        <g id="dial" stroke="currentColor" fill="none" strokeMiterlimit="10">
          <line x2="307.60901" y2="520.80103" strokeWidth="1" y1="541.94503" x1="309.83101" />
          <line x1="255.30901" y1="23.2" strokeWidth="1" y2="44.344" x2="257.53101" />
          <line y1="23.2" x2="307.60901" strokeWidth="1" y2="44.344" x1="309.83101" />
          <line x1="255.30901" y2="520.80103" strokeWidth="1" x2="257.53101" y1="541.94503" />
          <line x1="228.342" y1="27.447" strokeWidth="1" y2="48.245" x2="232.763" />
          <line x2="332.37799" y2="516.90002" strokeWidth="1" y1="537.69802" x1="336.79899" />
          <line x1="201.967" y1="34.501" strokeWidth="1" y2="54.724" x2="208.538" />
          <line x2="356.603" y2="510.42099" strokeWidth="1" y1="530.64399" x1="363.174" />
          <line x2="380.01401" y2="501.436" strokeWidth="1" y1="520.862" x1="388.66301" />
          <line x1="176.478" y1="44.284" strokeWidth="1" y2="63.71" x2="185.127" />
          <line x2="423.36099" y2="476.354" strokeWidth="1" y1="493.554" x1="435.85699" />
          <line x1="129.284" y1="71.592" strokeWidth="1" y2="88.792" x2="141.78" />
          <line x1="108.076" y1="88.777" strokeWidth="1" y2="104.576" x2="122.301" />
          <line x2="442.84" y2="460.57001" strokeWidth="1" y1="476.36901" x1="457.065" />
          <line x1="88.774" y1="108.078" strokeWidth="1" y2="122.303" x2="104.573" />
          <line x2="460.56799" y2="442.84299" strokeWidth="1" y1="457.06799" x1="476.36699" />
          <line x1="71.589" y1="129.286" strokeWidth="1" y2="141.782" x2="88.789" />
          <line x2="476.35199" y2="423.36301" strokeWidth="1" y1="435.85901" x1="493.55199" />
          <line x2="501.43301" y2="380.017" strokeWidth="1" y1="388.666" x1="520.85901" />
          <line x1="44.282" y1="176.48" strokeWidth="1" y2="185.129" x2="63.708" />
          <line x1="34.499" y1="201.96899" strokeWidth="1" y2="208.53999" x2="54.722" />
          <line x2="510.41901" y2="356.60501" strokeWidth="1" y1="363.17601" x1="530.64201" />
          <line x2="516.89801" y2="332.38101" strokeWidth="1" y1="336.80201" x1="537.69601" />
          <line x1="27.445" y1="228.34399" strokeWidth="1" y2="232.76499" x2="48.243" />
          <line x2="520.79901" y2="307.612" strokeWidth="1" y1="309.834" x1="541.94401" />
          <line x1="23.198" y1="255.312" strokeWidth="1" y2="257.534" x2="44.342" />
          <line x1="23.198" y2="307.612" strokeWidth="1" x2="44.342" y1="309.834" />
          <line y1="255.312" x2="520.79901" strokeWidth="1" y2="257.534" x1="541.94401" />
          <line x1="27.445" y2="332.38101" strokeWidth="1" x2="48.243" y1="336.80201" />
          <path d="m48.243,332.38101" strokeWidth="1" />
          <line y1="228.34399" x2="516.89697" strokeWidth="1" y2="232.76499" x1="537.69497" />
          <line x1="34.499" y2="356.60501" strokeWidth="1" x2="54.722" y1="363.17601" />
          <line y1="201.96899" x2="510.41901" strokeWidth="1" y2="208.53999" x1="530.64201" />
          <line y1="380.017" x2="44.282" strokeWidth="1" y2="388.666" x1="63.708" />
          <line y1="176.48" x2="501.43301" strokeWidth="1" y2="185.129" x1="520.85901" />
          <line y1="129.286" x2="476.35199" strokeWidth="1" y2="141.782" x1="493.55199" />
          <line x1="71.589" y2="423.36301" strokeWidth="1" x2="88.789" y1="435.85901" />
          <line y1="108.078" x2="460.56799" strokeWidth="1" y2="122.303" x1="476.36699" />
          <line x1="88.774" y2="442.84299" strokeWidth="1" x2="104.573" y1="457.06799" />
          <line y1="88.777" x2="442.84" strokeWidth="1" y2="104.576" x1="457.065" />
          <line x1="108.076" y2="460.57001" strokeWidth="1" x2="122.301" y1="476.36901" />
          <line x1="129.284" y2="476.35501" strokeWidth="1" x2="141.78" y1="493.55401" />
          <line y1="71.592" x2="423.36099" strokeWidth="1" y2="88.792" x1="435.85699" />
          <line x1="176.478" y2="501.436" strokeWidth="1" x2="185.127" y1="520.862" />
          <line y1="44.284" x2="380.01401" strokeWidth="1" y2="63.71" x1="388.66301" />
          <line y1="34.501" x2="356.603" strokeWidth="1" y2="54.724" x1="363.174" />
          <line x1="201.967" y2="510.42099" strokeWidth="1" x2="208.538" y1="530.64399" />
          <line x1="228.342" y2="516.90002" strokeWidth="1" x2="232.763" y1="537.69802" />
          <line y1="27.447" x2="332.37799" strokeWidth="1" y2="48.245" x1="336.79899" />
          <line x1="434.22501" y1="282.573" y2="282.573" strokeWidth="1.7" x2="543.35901" />
          <line x1="21.784" y1="282.573" y2="282.573" strokeWidth="1.7" x2="130.918" />
          <line x1="282.57199" y1="434.22601" x2="282.57199" strokeWidth="1.7" y2="543.36001" />
          <line x1="282.57199" y1="21.785" x2="282.57199" strokeWidth="1.7" y2="130.919" />
          <line x1="152.16" y1="56.693" strokeWidth="1.7" y2="151.219" x2="206.734" />
          <line x1="358.409" y1="413.927" strokeWidth="1.7" y2="508.453" x2="412.983" />
          <line x1="56.692" y1="152.161" strokeWidth="1.7" y2="206.735" x2="151.218" />
          <line x2="413.92599" y2="358.41" strokeWidth="1.7" y1="412.984" x1="508.45199" />
          <line x1="413.92599" y2="152.161" strokeWidth="1.7" x2="508.45199" y1="206.735" />
          <line x1="56.692" y2="358.41" strokeWidth="1.7" x2="151.218" y1="412.984" />
          <line x1="358.409" y2="56.693" strokeWidth="1.7" x2="412.983" y1="151.219" />
          <line y1="413.927" x2="152.16" strokeWidth="1.7" y2="508.453" x1="206.735" />
        </g>
        <g id="clock-hands">
          <g
            id="minute-hand"
            fill="currentColor"
            transform={`rotate(${minutesDegrees}, 282.5, 282.5)`}
          >
            <path d="m287.05899,65.421l-4.5,-10.9l-4.5,10.9l0,217.074l9,0l0,-217.074z" />
          </g>
          <g
            id="hour-hand"
            fill="currentColor"
            transform={`rotate(${hoursDegrees}, 282.5, 282.5)`}
          >
            {/* Changed the hour hand path to point in the opposite direction */}
            <path d="m282.573,139.793l4.5,11.622l0,131.6l-9,0l0,-131.6l4.5,-11.622z" />
          </g>
          <g
            id="second-hand"
            fill="currentColor"
            transform={`rotate(${secondsDegrees}, 282.5, 282.5)`}
          >
            <rect x="53.023" y="281.38599" height="2.373" width="230.442" />
            <path d="m319.51599,280.39401l0,0l-36.94299,0.992l0,2.37299l36.94299,0.992l22.60599,0l0,-4.35699l-22.60599,0z" />
            <circle r="12.756" cy="282.57299" cx="282.57201" />
          </g>
        </g>
      </svg>
    </div>
  )
}