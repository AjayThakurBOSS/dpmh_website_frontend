import React from 'react'
import DepartmentHero from '../../components/breadcrumbs/CenterOfExcellanceBC'
import FreeTreatment from '../../components/FreeTreatment'
import CAPFCom from '../../components/freeTreatmentComponent/CAPFCom'

function CAPF() {
  return (
    <div>
       <DepartmentHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "CAPF", href: null }
          ]}
          title="Because every life deserves treatment — free under CAPF Scheme."
          subText="Heal yourself and your loved ones — because health shouldn’t wait for money."
        />
        <CAPFCom/>
        <FreeTreatment/>
    </div>
  )
}

export default CAPF
