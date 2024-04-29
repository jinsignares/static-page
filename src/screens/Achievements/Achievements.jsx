import React from 'react'
import { BlockOfText } from '../../components/BlockOfText'
import { InternalMenu } from '../../components/InternalMenu'
import TextBlock from '../../components/TextBlock'
import {Typography} from '../../components/Typography'

export const Achievements = () => {
  return (
    <div className="achievements-container">
        <div className="intro-wrapper">
          <div className="image-achievements" />
          <BlockOfText
            className="text-block-achievements"
            subtitle="yes"
            text="ACHIEVEMENTS"
            text1="WHAT ARE SOME NEW STEPS FORWARD IN OUR WORK?"
          />
        </div>

      <TextBlock>
        <div className="flex flex-col w-full justify-start items-start place-self-end max-w-[1200px]">
          <Typography as='h3' className='capitalize text-dark-blue'>Building Appliance Rule Amendments</Typography>
          <Typography as='p' className='text-dark-gray mt-6'>Amendments to Regulation 9, Rules 4 and 6, were adopted to eliminate emissions of nitrogen oxides, or NOx, from <span className='font-bold'>residential and commercial natural gas furnaces and water heaters in the Bay Area by requiring new appliances to be zero-NOx.</span> Collectively, the 1.8 million water heaters and furnaces are one of the largest NOx-emitting stationary sources of air pollution in the region. The rule amendments would apply only to new appliances sold in the Bay Area and will improve overall regional air quality from the outdoor venting of these appliances, lower exposure to particulate matter — particularly in communities of color — and eliminate up to $890 million per year in health impacts due to air pollution exposure.
<br/>
<br/>
We established a multi-stakeholder Implementation Working Group to track and assess market readiness, technology accessibility, and identify barriers and solutions to an equitable transition. The diverse stakeholders include utility and energy service providers, technology manufacturers, environmental justice and community-based organizations, state agencies, local and regional governments, incentive program administrators, labor unions, contractors, and others.</Typography>
        </div>
      </TextBlock>


      <InternalMenu/>
    </div>
  )
}
