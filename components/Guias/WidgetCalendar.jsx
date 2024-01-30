import React from 'react'

const WidgetCalendar = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
    <iframe
      title="Calendly Widget"
      src="https://calendly.com/TU_ENLACE_DEL_EVENTO"
      width="800"
      height="600"
      frameBorder="0"
    />
  </div>
  )
}

export default WidgetCalendar