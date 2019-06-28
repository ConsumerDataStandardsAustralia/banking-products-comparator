import React from 'react'

const DiscountEligibility = (props) => {
  const {eligibility} = props
  return (
    <div>
      <div>{eligibility.discountEligibilityType}: {eligibility.additionalValue}</div>
      <div>{eligibility.additionalInfo}</div>
      <div>For more info, click <a href={eligibility.additionalInfoUri} target='_blank'>{eligibility.additionalInfoUri}</a></div>
    </div>
  )
}

export default DiscountEligibility