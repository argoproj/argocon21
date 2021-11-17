 import * as React from "react"
import classNames from "classnames"
import Akuity from "../svg/featured/akuity.svg"
import Redhat from "../svg/featured/redhat.svg"
import Codefresh from "../svg/featured/codefresh.svg"
import Intuit from "../svg/featured/intuit.svg"

const HostedBy = ({ className }) => {
  const wrapperClass = classNames({
    "max-w-6xl mx-auto": true,
    [className]: className,
  })

  return (
    <div className={wrapperClass}>
      <p className="mb-8 text-center text-primary font-bold">
        Hosted by
      </p>

      <div className="flex flex-wrap items-center justify-center">
        <Akuity className="h-6 w-auto mb-8 mx-4 md:mx-7" />
        <Intuit className="h-6 w-auto mb-8 mx-4 md:mx-7" />
        <Codefresh className="h-6 w-auto mb-8 mx-4 md:mx-7" />
        <Redhat className="h-7 w-auto mb-8 mx-4 md:mx-7" />
      </div>
    </div>
  )
}

export default HostedBy
