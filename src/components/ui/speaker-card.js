import * as React from "react"
 
const Speaker = ({ name, site, company, title, talk, headshotSrc }) => {
  return (
    <div className="bg-white rounded-xl transition-shadow duration-200 group hover:shadow-primary">
      <a href={site} target="_blank" rel="noopener noreferrer" className="block">
        

        <div className="">
          <div className="flex items-center justify-center">
            <img
              src={headshotSrc}
              alt={title}
              title={title}
              className="h-auto max-w-9/12 rounded-full object-contain"
            />
          </div>
          <div className="py-2 text-gray text-center text-sm border-b-2 border-none transition-colors duration-200 group-hover:text-primary">
          <span className="font-bold text-lg">{name}</span><br />{title}<br />{company}
        </div>
        </div>
      </a>
    </div>
  )
}

export default Speaker