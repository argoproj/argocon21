import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Speaker from "./ui/speaker-card.js"

const Speakers = ({ max }) => {
  const query = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/(content/speakers)/" } }
          sort: { order: ASC, fields: frontmatter___title }
        ) {
          edges {
            node {
              frontmatter {
              	title
                name
                site
                company
                talk
                headshot {
                  publicURL
                }
              }
            }
          }
        }
      }
    `
)

const allSpeakers = query.allMdx.edges
const [speakers, setSpeakers] = React.useState([...allSpeakers.slice(0, max)])


  return (
    <React.Fragment>
      {speakers.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Speaker
              to={item.node.frontmatter?.site}
              title={item.node.frontmatter?.title}
              headshotSrc={item.node.frontmatter?.headshot?.publicURL}
              name={item.node.frontmatter?.name}
              site={item.node.frontmatter?.site}
              talk={item.node.frontmatter?.talk}
              company={item.node.frontmatter?.company}
            />

            {index === speakers.length - 1 &&
              allSpeakers.length !== speakers.length && (
                <button
                  onClick={() => setSpeakers(allSpeakers)}
                  className="flex justify-center items-center text-blue bg-gradient-to-tl from-blue/20 to-transparent rounded-xl transition hover:text-dark">
                  <div className="px-4 font-display text-2xl">
                    See all {allSpeakers.length}
                  </div>
                </button>
              )}
          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
}

Speakers.defaultProps = {
  max: 36,
}

export default Speakers
