import React from 'react'

const AlertModal = ({showAlert, setShowAlert}: {showAlert: boolean, setShowAlert: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const handleOnClickAlert = () => {
    setShowAlert(false)
  }

  return (
    <div>
      {showAlert ? (
        <div
          className="transition bg-hacky-green bg-opacity-25 border border-hacky-green text-white px-4 py-3 rounded drop-shadow-2xl mt-0 md:mt-4 mb-0"
          role="alert">
          <div className="flex flex-row justify-end">
            <p className="font-bold">New code generated</p>
            <button
              className="text-hacky-green font-bold pl-8 md:pl-32 pr-4"
              onClick={handleOnClickAlert}
            >
              x
            </button>
          </div>
        </div>
      ) :
        <div
          className="transition bg-transparent border border-transparent text-charcoal px-4 py-3 mt-0 md:mt-4 mb-0"
          role="alert">
          <div className="flex flex-row justify-end opacity-0">
            <p className="font-bold">New code generated</p>
            <div
              className="opacity-0 font-bold pl-8 md:pl-32 pr-4"
            >
              x
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default AlertModal
