import React from 'react'
import DepartmentHero from '../../components/breadcrumbs/CenterOfExcellanceBC'
import FreeTreatment from '../../components/FreeTreatment'
import TPACom from '../../components/freeTreatmentComponent/TPACom'

const TPA = () => {
  return (
    <div>
         <DepartmentHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "TPA", href: null }
          ]}
          title="No bills, only care — Free healthcare with TPAs."
          subText="Heal yourself and your loved ones — because health shouldn’t wait for money."
        />
        <TPACom/>
        <FreeTreatment/>
    </div>
  )
}

export default TPA