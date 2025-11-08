import React from 'react'
import DepartmentHero from '../../components/breadcrumbs/CenterOfExcellanceBC'
import FreeTreatment from '../../components/FreeTreatment'
import CGHSCom from '../../components/freeTreatmentComponent/CGHSCom'

const CGHS = () => {
  return (
    <div>
         <DepartmentHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "CGHS", href: null }
          ]}
          title="Your health card is your safety shield — avail free treatment today."
          subText="Heal yourself and your loved ones — because health shouldn’t wait for money."
        />
        <CGHSCom/>
        <FreeTreatment/>
    </div>
  )
}

export default CGHS