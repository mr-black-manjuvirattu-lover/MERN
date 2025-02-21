import React from 'react'
import Button from './Button'
import trackingMyButtonComp from './TrackingMyButtonComp'
const HoC = () => {
    const ButtonTrack=trackingMyButtonComp(Button)
  return (

    <div>
        <h1>Welcome to Higher Order Component (HoC)  </h1>
        <Button value={"Login"}/>
        <ButtonTrack value={"Login"} trackingInfo={{"CustID":"Hello","Password":"pass"}} />
    </div>
  )
}

export default HoC