import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Grid } from "../components/ui/grid"
import { Container } from "../components/ui/grid"
// import FeaturedMembers from "../components/featured-members"
import Button from "../components/ui/button"
// import Maintainers from "../components/maintainers"
// import Features from "../components/features"
import Speakers from "../components/speakers"
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
        description="ArgoCon 2021 is happening virtually on December 8th. Register now!"
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
              Virtual<br />December 8th, 2021
            </p>

            <div className="mt-8 space-y-4 md:mt-8 md:space-x-4 md:space-y-0">
              <Button                
                to="https://www.eventbrite.com/e/argocon-tickets-162063240515"
                type="primary"
                label="Register"
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

    <section className="container pt-8 md:pt-16 2xl:pt-24 overflow-hidden">
        <h2 className="text-center">
          Speakers
        </h2>        

        <div className="pt-4 pb-24 md:pb-32 md:pt-10">
          <Grid xs={2} sm={3} lg={4} xl={6}>
            <Speakers />
          </Grid>
        </div>

    </section>

    <section className="container p-8 md:p-16 2xl:p-24 overflow-hidden">
      <h2 className="text-center">
        Schedule
      </h2>

      <div className="w-full mb-4 pt-2 md:pt-4 2xl:pt-6 bg-green-400">
        <h3 className="pl-2 md:pl-4 2xl:pl-6">Combined Track</h3>
        
        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl">Keynote</h4>
          Pratik Wadher, Intuit
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl">Argo-based service delivery for multi-tenant, multi region clusters at Adobe</h4>
          Aya Ivtsan, Adobe
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl">Deployments on the Edge using Argo CD & Workflows and K3s</h4>
          Sergio Méndez, Yalo
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl">How Scalable is Argo-Rollouts: A Cloud Operator’s Perspective</h4>
          Hui Kang, Salesforce
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl">Keynote</h4>
          Redhat
        </div>

      </div>
      
      <div className="w-full md:w-1/2 pt-2 md:pt-4 2xl:pt-6 mb-4 bg-blue-600 md:float-left border border-white">
        <h3 className="pl-2 md:pl-4 2xl:pl-6 text-white">Argo Workflows/Events</h3>
        
        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl">Maintainer Update</h4>
          Alex Collins, Intuit
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl">Bridging into Python Ecosystem with Cloud-Native Distributed Machine Learning Pipelines</h4>
          Yuan Tang, Akuity
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl">Building Medical Grade AI with Argo Workflows</h4>
          Omri Fima, Diagnostic Robostics
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl">Processing petabytes in Python with Argo Workflows & Dask</h4>
          J.P. Zivalich, Pipekit
        </div>
      
      </div>


      <div className="w-full md:w-1/2 pt-2 md:pt-4 2xl:pt-6 mb-4 bg-purple-600 md:float-left border border-white">
        <h3 className="pl-2 md:pl-4 2xl:pl-6 text-white">Argo CD/Rollouts</h3>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl">Maintainer Update</h4>
          Jesse Suen, Akuity
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl">Argo CD Production Best Practices</h4>
          Alexander Matyushentsev, Intuit
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl">Debugging Argo Canary Rollouts with Prometheus and OpenTelemetry</h4>
          Anais Urlichs, Civo
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl">Deploying Cluster Addons at Scale using ApplicationSets</h4>
          Venkata Gunapati, Intuit
        </div>

      </div>

      <div className="clear-both w-full mb-4 pt-2 md:pt-4 2xl:pt-6 bg-green-400">
        <h3 className="pl-2 md:pl-4 2xl:pl-6">Combined Track</h3>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl">Argo CD and Stateful Applications - Tips and Tricks!</h4>
          Christian Hernandez, Redhat
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl">Cloud-native CI/CD via ArgoCD and Workflows in Multi-Region & Muti-cell environments</h4>
          Edgar Magana, Splunk
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl">Keynote: Taking an Open GitOps Approach to Building and Delivering Software</h4>
          Dan Garfield, Codefresh
        </div>

      </div>

      Note: Schedule is subject to change.
    </section>

    <section className="container pt-8 md:pt-16 2xl:pt-24 overflow-hidden"></section>
    </Layout>

    

  )
}

export default IndexPage
