import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Grid } from "../components/ui/grid"
// import { Grid, Container } from "../components/ui/grid"
// import FeaturedMembers from "../components/featured-members"
import Button from "../components/ui/button"
// import Maintainers from "../components/maintainers"
// import Features from "../components/features"
import HeroWrapper from "../components/ui/hero-wrapper"
// import HeartIcon from "../svg/heart.svg"
import Pipes from "../components/ui/pipes"
import ArgoHero from "../components/ui/argo-hero"
import thumbnail from "../images/thumbnails/home.png"
import HostedBy from "../components/hostedby"

const IndexPage = ({ location }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              twitter
              github
              slack
            }
          }
        }
      }
    `
  )

  return (
    <Layout location={location}>
      <Seo
        title="ArgoCon 2021"
        description="ArgoCon 2021 is happening in San Francisco on December 8th. Register now!"
        url={location.href}
        image={thumbnail}
      />

      <HeroWrapper bg="dark">
        <Grid lg={2} alignY="center">
          <div className="relative z-10 text-white">
            <h1 className="pr-12 xl:pr-12 text-5xl lg:text-7xl 2xl:pr-0 2xl:text-8xl">
              ArgoCon <span className="text-primary">'21</span>
            </h1>

            <p className="text-2xl md:pr-12 xl:pr-36 2xl:pr-48">
              San Francisco Live & Virtual<br />December 8th, 2021
            </p>

            <div className="mt-8 space-y-4 md:mt-8 md:space-x-4 md:space-y-0">
              <Button                
                to="https://www.eventbrite.com/e/argocon-tickets-162063240515"
                type="primary"
                label="Register"
              />
              <Button
                to="https://docs.google.com/forms/d/e/1FAIpQLSdDrKd-Jd_6T9xCMyRIqueOHOIMsxA5K6_KEoD_EUpM-78XKQ/viewform?usp=sf_link"
                type="secondary"
                label="Submit a talk"
              />
              <Button
                to="https://forms.gle/mTDGbeTP2XyZYRm68"
                type="secondary"
                label="Sponsor"
              />
            </div>
          </div>

          <div className="relative z-0 mt-12">
            <Pipes className="absolute top-1/2 left-1/2 w-8/12 max-w-full transform rotate-90 -translate-x-1/2 -translate-y-1/2" />
            <ArgoHero className="relative z-10 block mx-auto w-40 h-auto max-w-full lg:mt-12 lg:w-52 2xl:w-72" />
          </div>
        </Grid>

        <HostedBy className="lg:mt-16 2xl:mt-40" />
      </HeroWrapper>
<p>&nbsp;</p>
    </Layout>

  )
}

export default IndexPage
