import React from 'react'
import DepartmentHero from '../../components/breadcrumbs/CenterOfExcellanceBC'
import FreeTreatment from '../../components/FreeTreatment'
import CMRFCom from '../../components/freeTreatmentComponent/CMRFCom'

const CMRF = () => {
  return (
    <div> 
        <DepartmentHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "CMRF", href: null }
          ]}
          title="Big surgeries, big treatments, zero payment — CMRF."
          subText="Heal yourself and your loved ones — because health shouldn’t wait for money."
        />
        <CMRFCom/>
        <FreeTreatment/>
        </div>
  )
}

export default CMRF