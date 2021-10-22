import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Talk from "./ui/talk-card.js"

const Talks = ({ speaker, max }) => {
  var speakerpath = "/(content/speakers/alex-collins)/"
  const query = useStaticQuery(
    graphql`
      query ($speakerpath: String!){
        allMdx(
          filter: { 
            fileAbsolutePath: { regex: $speakerpath
            } 
        } 
      
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

const allTalks = query.allMdx.edges
const [talks, setTalks] = React.useState([...allTalks.slice(0, max)])


  return (
    <React.Fragment>
      {talks.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Talk
              to={item.node.frontmatter?.site}
              title={item.node.frontmatter?.title}
              headshotSrc={item.node.frontmatter?.headshot?.publicURL}
              name={item.node.frontmatter?.name}
              site={item.node.frontmatter?.site}
              talk={item.node.frontmatter?.talk}
              company={item.node.frontmatter?.company}
            />

          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
}

Talks.defaultProps = {
  speaker: "alex-collins",
  max: 36,
}

export default Talks
