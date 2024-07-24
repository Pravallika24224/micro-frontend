import React from 'react'

const SurveyHeader = ({handleFormData}: any) => {

  return (
    <div className="flex items-left mb-4 w-full">
  <label className=" font-sans font-semibold text-lg text-gray-800 text-right pr-4">Name of the Survey:</label>
  <input placeholder='please enter survey name...' onChange={(e:any) => handleFormData({surveyName: e.target.value})} type="text" className="grow italic text-lg border-b border-gray-400 focus:outline-none focus:border-gray-900"/>
</div>
  )
}

export default SurveyHeader
