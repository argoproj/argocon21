import * as React from "react"

const Talk = ({ talk, name, company }) => {
  return (
    <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl">{talk}</h4>
          {name}, {company}
        </div>
  )
}

export default Talk
