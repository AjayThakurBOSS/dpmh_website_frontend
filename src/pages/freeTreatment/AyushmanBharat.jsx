import React from 'react'
import DepartmentHero from '../../components/breadcrumbs/CenterOfExcellanceBC'
import FreeTreatment from '../../components/FreeTreatment'
import AyushCom from '../../components/freeTreatmentComponent/AyushCom'

const AyushmanBharat = () => {
  return (
    <div>
         <DepartmentHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Ayushman Bharat", href: null }
          ]}
          title="Your health, our responsibility — free treatment under Ayushman Bharat."
          subText="Heal yourself and your loved ones — because health shouldn’t wait for money."
        />
        <AyushCom/>
        <FreeTreatment/>
    </div>
  )
}

export default AyushmanBharat