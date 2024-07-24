import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'surveyDashboard/authContext'
import axios from 'axios';

const Table = ({ data }: any) => {
  const [noOfUsers, setNoOfUsers] = useState<number>(0)
  const navigate = useNavigate()
  const {auth} = useAuth()

  const getUsersSurveyList = async () => {
    const res = await axios.get('http://localhost:3030/usersurveys')
    setNoOfUsers(res.data.length)
  }

  useEffect(() => {
    getUsersSurveyList()
  }, [])

  const handlePreview = (e: any, survey: any) => {
    e.preventDefault()
    if (e.stopPropagation) e.stopPropagation();
    navigate(`/surveys/${survey.id}`, {state:{survey: survey, disabled: true }})
  }

  const handleRowClick =  (survey: any) => auth.type === 'admin' ? navigate(`/survey-details/${survey.id}`, {state: survey}):
  auth.type === 'user' ? navigate(`/surveys/${survey.id}`, {state:{survey: survey, disabled: false }}): ''

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table
              className="min-w-full text-sm font-light text-surface">
              <thead
                className="border-b text-center border-neutral-400 font-medium">
                <tr>
                  <th scope="col" className="px-6 py-4">Survey Name</th>
                  <th scope="col" className="px-6 py-4">Type Of Survey</th>
                  <th scope="col" className="px-6 py-4">Start Date</th>
                  <th scope="col" className="px-6 py-4">End Date</th>
                  <th scope="col" className="px-6 py-4">Status</th>
                  {auth.type === 'admin' && <th scope="col" className="px-6 py-4">No Of Users</th>}
                  {auth.type === 'admin' && <th scope="col" className="px-6 py-4">Preview</th>}
                </tr>
              </thead>
              {data.map((survey: any) => (
                <tbody>
                  <tr
                    className="cursor-pointer border-b text-center border-neutral-200"
                    key={survey.id}
                    onClick={(e) => handleRowClick(survey)}
                  >
                    <td className="px-6 py-4 text-md subpixel-antialiased font-semibold text-gray-700">{survey.surveyName}</td>
                    <td className="whitespace-nowrap px-6 py-4 ">-</td>
                    <td className="whitespace-nowrap px-6 py-4">{survey.startDate}</td>
                    <td className="whitespace-nowrap px-6 py-4">{survey.endDate}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span
                        className={`relative inline-block px-3 py-1 font-semibold ${survey.status === 'Active'
                          ? 'text-green-900'
                          : 'text-red-900'
                          } leading-tight`}>
                        <span
                          aria-hidden
                          className={`absolute inset-0 ${survey.status === 'Active'
                            ? 'bg-green-200 '
                            : 'bg-red-200'
                            }  opacity-50 rounded-full`}></span>
                        <span className='relative'>{survey.status}</span>
                      </span>
                    </td>
                    {auth.type === 'admin' && <td className="whitespace-nowrap px-6 py-4">{noOfUsers}</td>}
                    {auth.type === 'admin' && <td className="whitespace-nowrap px-6 py-4 flex justify-center" onClick={(e) => handlePreview(e, survey)}>
                      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7ZM8 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1-5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clip-rule="evenodd" />
                      </svg>
                    </td>}
                  </tr>
                </tbody>))}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
