import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Grid } from "../components/ui/grid"
//import { Container } from "../components/ui/grid"
// import FeaturedMembers from "../components/featured-members"
import Button from "../components/ui/button"
// import Maintainers from "../components/maintainers"
// import Features from "../components/features"
import Speakers from "../components/speakers"
import HeroWrapper from "../components/ui/hero-wrapper"
// import HeartIcon from "../svg/heart.svg`}
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
            <h1 className="pr-12 xl:pr-12 text-5xl lg:text-7xl 2xl:pr-0 2xl:text-8xl" id="home">
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

        <HostedBy className="lg:mt-16 2xl:mt-30" />
      </HeroWrapper>
<p>&nbsp;</p>

    <section className="container pt-8 md:pt-16 2xl:pt-24 overflow-hidden">
        <h2 className="text-center" id="speakers">
          Speakers
        </h2>

        <div className="pt-4 pb-24 md:pb-32 md:pt-10">
          <Grid xs={2} sm={3} lg={4} xl={6}>
            <Speakers />
          </Grid>
        </div>

    </section>

    <section className="container p-8 md:p-16 2xl:p-24 overflow-hidden">
      <h2 className="text-center" id="schedule">
        Schedule
      </h2>

      <div className="w-full mb-4 pt-2 md:pt-4 2xl:pt-6 bg-green-400">
        <h3 className="pl-2 md:pl-4 2xl:pl-6">Combined Track</h3>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl mb-0">8:30 AM - Keynote</h4>
          <p className="text-lg mt-3">Pratik Wadher, Intuit</p>
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl mb-0">9:00 AM - Argo-based service delivery for multi-tenant, multi region clusters at Adobe</h4>
          <p className="text-lg mt-3">Aya Ivtsan, Adobe</p>
          <details>
            <summary className="mt-3 cursor-pointer">Details</summary>
            <p className="mt-3">How do you enable CI/CD for hundreds of services, each with its own pipeline requirements and use-cases, all deploying to multiple clusters in multiple regions? At the Adobe platform team, we are using Argo Workflows, Events, CD and Rollouts to create a flexible, customizable developer experience for CI/CD, where developers get a secure end-to-end pipeline out of the box, and are able to tweak and modify it in a self-serve manner. Join us to learn how we enable and empower teams to manage their own Argo-based CI/CD pipelines across multiple multi-tenant clusters.</p>
          </details>
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl mb-0">9:55 AM - Deployments on the Edge using Argo CD & Workflows and K3s</h4>
          <p className="text-lg mt-3">Sergio Méndez, Yalo</p>
          <details>
            <summary className="mt-3 cursor-pointer">Details</summary>
            <p className="mt-3">This talk presents the challenges to perform continuous deployment for chatbots or ML applications on the edge using Argo CD & Workflows , and how you can use K3s as the main Kubernetes distribution to build edge computing systems. It also focuses in the strategies to do massive deployments on edge devices using ARM processors with Argo, combined with the power of K3s, and storage on the public cloud to fit IoT requirements and a lightweight environment for continuous deployments. At the end of this talk, the speaker presents a short demo, showing a hybrid edge system using public cloud services from GCP to store data for the edge cluster and the applications, and the execution of continuous deployment of ML model in some K3s clusters running on Raspberry Pi’s.</p>
          </details>
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl mb-0">10:50 AM - Keynote</h4>
          <p className="text-lg mt-3">Red Hat</p>
        </div>

      </div>

      <div className="w-full md:w-1/2 pt-2 md:pt-4 2xl:pt-6 mb-4 bg-blue-600 md:float-left border border-white">
        <h3 className="pl-2 md:pl-4 2xl:pl-6 text-white">Argo Workflows/Events</h3>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl mb-0">11:35 AM - Maintainer Update</h4>
          <p className="text-lg mt-3">Alex Collins, Intuit</p>
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl mb-0">12:05 PM - Bridging into Python Ecosystem with Cloud-Native Distributed Machine Learning Pipelines</h4>
          <p className="text-lg mt-3">Yuan Tang, Akuity</p>
          <details>
            <summary className="mt-3 cursor-pointer">Details</summary>
            <p className="mt-3">In recent years, advances in machine learning have made tremendous progress yet large scale machine learning still remains challenging. With the variety of machine learning frameworks such as TensorFlow and PyTorch, it’s not easy to automate the process of training machine learning models on distributed Kubernetes clusters. Machine learning researchers and algorithm engineers with less or zero DevOps experience cannot easily launch, manage, monitor, and optimize distributed machine learning pipelines.</p>
            <p className="mt-3">This talk presents various best practices and challenges on building large, efficient, scalable, and reliable distributed machine learning pipelines using cloud-native technologies such as Argo Workflows and Kubeflow as well as how they fit into Python ecosystem with cutting-edge distributed machine learning frameworks such as TensorFlow and PyTorch.</p>
          </details>
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl mb-0">12:45 PM - Building Medical Grade AI with Argo Workflows</h4>
          <p className="text-lg mt-3">Omri Fima, Diagnostic Robostics</p>
          <details>
            <summary className="mt-3 cursor-pointer">Details</summary>
            <p className="mt-3">AI and Data change the healthcare industry. In the last year, Argo was helping us to bring medical-grade AI workflows to production and improve the lives of over 20 million patients.</p>
            <p className="mt-3">In this talk, I will share the practices and techniques we use to build reusable, production-grade AI workflows using Argo Workflows, How you can write your workflows for a more reusable pipeline. And Finally, How we integrated Argo with Jupyter Notebooks for robust and fast experimentation.</p>
          </details>
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl mb-0">1:40 PM - Processing petabytes in Python with Argo Workflows & Dask</h4>
          <p className="text-lg mt-3">J.P. Zivalich, Pipekit & Severin Ryberg, ACCURE Battery Intelligence</p>
          <details>
            <summary className="mt-3 cursor-pointer">Details</summary>
            <p className="mt-3">Companies with complex computational workloads often use Python packages such as NumPy, Pandas, and Scikit-Learn, but unfortunately they don't scale up well for especially large data sets. Dask makes it easy to use these tools on large data sets in distributed environments with low-latency. Argo Workflows is the best way to run pipelines on Kubernetes but incurs high overhead when tasks are short-lived. This talk demonstrates how to orchestrate these two technologies to achieve the kubernetes-native scheduling and automation available from Argo Workflows with the low-latency scalability of Dask.</p>
            <p className="mt-3">To do so, we'll show how Pipekit provisioned Argo Workflows for ACCURE Battery Intelligence and show how ACCURE uses Dask running on Argo to process petabytes of data with super low-latency for their customers.</p>
            <p className="mt-3">We hope that listeners of this talk will learn how to orchestrate their Dask workloads with Argo Workflows and additionally gain insights for orchestrating other workloads with Argo such as Spark jobs.</p>
          </details>
        </div>

      </div>


      <div className="w-full md:w-1/2 pt-2 md:pt-4 2xl:pt-6 mb-4 bg-purple-600 md:float-left border border-white">
        <h3 className="pl-2 md:pl-4 2xl:pl-6 text-white">Argo CD/Rollouts</h3>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl mb-0">11:35 AM - Maintainer Update</h4>
          <p className="text-lg mt-3">Jesse Suen, Akuity</p>
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl mb-0">12:05 PM - Argo CD Production Best Practices</h4>
          <p className="text-lg mt-3">Alexander Matyushentsev, Intuit</p>
          <details>
            <summary className="mt-3 cursor-pointer">Details</summary>
            <p className="mt-3">Argo CD is quick and easy to get up and running. But as your usage of Kubernetes inevitably increases, Argo CD should be tuned to meet the growing needs of the organization. At Intuit, Argo CD has scaled to manage 12,000 applications, 370 clusters, 3,000 git repositories, all while being continually accessed by thousands of developers.</p>
            <p className="mt-3">Learn from the maintainers about Argo CD architecture, and how various factors impact the performance of Argo CD such as: number of clusters, applications, git repositories, users, and even resource churn of etcd. Understand how to backup and recover from disaster, troubleshoot problems, analyze performance metrics, and adjust various tuning levers to accommodate your scaling dimensions.</p>
            <p className="mt-3">Finally, customize your Argo CD setup and take it to the next level, by leveraging many of its integration points including: resource health checks, resource actions, config management plugins, and API/UI extensions.</p>
          </details>
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl mb-0">12:45 PM - Debugging Argo Canary Rollouts with Prometheus and OpenTelemetry</h4>
          <p className="text-lg mt-3">Anais Urlichs, Civo</p>
          <details>
            <summary className="mt-3 cursor-pointer">Details</summary>
            <p className="mt-3">Thanks to Kubernetes, deploying and running applications in the cloud was never easier. Unfortunately, with the capabilities, the desire for highly reliable services with strict minimal downtime SLO grows. That’s where Argo Rollouts comes in, solving this need by allowing advanced canary deployment techniques. However, its integration can introduce complexity that, without proper observability and monitoring, can become difficult to manage and debug.</p>
            <p className="mt-3">In this talk, Anaïs (SRE, Monitoring End User) and Bartek (Prometheus & Thanos maintainer, TAG Observability) will showcase an efficient way of setting up critical Prometheus monitoring and alerting for your application; deployed through Argo Rollouts. You will learn how to set up tracing using OpenTelemetry and Jaeger in a way that smoothly integrates with Prometheus thanks to Exemplars! This stack will allow us to observe the progress of our canary rollouts, whereby we are able to immediately find the root cause for different application failure scenarios.</p>
          </details>
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl mb-0">1:25 PM - Argo CD and Stateful Applications - Tips and Tricks!</h4>
          <p className="text-lg mt-3">Christian Hernandez, Red Hat</p>
          <details>
            <summary className="mt-3 cursor-pointer">Details</summary>
            <p className="mt-3">Argo CD is widely used as a tool in GitOps workflows. Part of the appeal of GitOps is the recovery after a disaster can be expedited. Reinstall the cluster and reapply the manifest is the high level instructions, but is that all? In this talk I will go over what to keep in mind when planning your recovery of your stateful applications.</p>
          </details>
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl mb-0">1:40 PM - Deploying Cluster Addons at Scale using ApplicationSets</h4>
          <p className="text-lg mt-3">Venkata Gunapati, Intuit</p>
          <details>
            <summary className="mt-3 cursor-pointer">Details</summary>
            <p className="mt-3">At Intuit, developers use Argo CD to deploy their services to a specific cluster. However, we also need to install and configure cluster addons over our fleet of 200+ clusters. Our earlier solution for addon installation/management was a proprietary installer that managed all addons in a monolithic fashion. We couldn’t install or upgrade a single addon without changing the code of the central installer, leading to bottle-necks and deployment delays. We wanted to decouple the addon management from the primary cluster upgrade process and enable additional teams (beyond the central platform team) to deploy and manage cluster addons. Additionally, some addons are needed in all clusters, while others are only required in a few clusters.</p>
            <p className="mt-3">This presentation will describe how we accomplished this using Argo CD and Argo ApplicationSets with the following capabilities:</p>
            <ul className="mt-3">
              <li>- Deploy cluster addons on a set of clusters (either 20 of 200 clusters or all 200 clusters) to  iterate faster on addon changes</li>
              <li>- We'll show you how to reduce risk and seamlessly roll out Addons by using a phased approach (per cluster, environment, region, etc.)</li>
              <li>- We decoupled namespaced scoped resources (managed by the addon development team) from cluster resources (managed by the cluster platform team) to allow a secure operational environment</li>
              <li>- The least privileged security model using Argo CD project cluster/namespace allow/deny lists</li>
              <li>- Variable configuration of addons per cluster (defaults vs. overrides)</li>
            </ul>
            <p className="mt-3">You will learn to utilize Argo CD & Argo ApplicationSets to deploy and manage cluster Addons over a large fleet of Kubernetes clusters and to maintain a centrally governed security model by decoupling RBAC from addons.</p>
          </details>
        </div>

      </div>

      <div className="clear-both w-full mb-4 pt-2 md:pt-4 2xl:pt-6 bg-green-400">
        <h3 className="pl-2 md:pl-4 2xl:pl-6">Combined Track</h3>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl mb-0">2:35 PM - How Scalable is Argo-Rollouts: A Cloud Operator’s Perspective</h4>
          <p className="text-lg mt-3">Hui Kang, Salesforce</p>
          <details>
            <summary className="mt-3 cursor-pointer">Details</summary>
            <p className="mt-3">Argo-Rollouts enables advanced deployment capabilities to Kubernetes such as blue-green/canary update strategy, automated rollback and promotion, configurable update steps, and fine-grained, weighted traffic control. As Argo-Rollouts reaches its first major release of v1.0, companies are working rapidly to adopt Argo-Rollouts into their continuous deployment infrastructure. Further, work is underway to prove Argo-Rollouts’ scalability.</p>
            <p className="mt-3">In this talk, we present our methodology of benchmarking Argo-Rollouts controller to manage the life cycle of a large number of Rollout custom resources in a realistic cloud environment. For this purpose, we developed a load-generation and performance measurement tool argo-rollouts-benchmark  to emulate users, making continuous requests using k8s API with defined quantities and concurrency (e.g., create 100 rollouts in the cluster by 10 concurrent users). While the Argo-rollouts controller under test reconciles these Rollout CRs to the desired state, the benchmark tool collects the following metrics: convergence latency (The amount of time between the rollout CR is received by the controller and reaches a conclusive phase such as healthy, degraded, paused) in percentile distribution, timeout error rate (the percentage of degraded rollouts due to timeout), and throughput.</p>
            <p className="mt-3">We will share the latest results from our experiments, as well as how these results help improve the overall scalability of Argo-Rollouts. We then looked at ways, such as predetermined t-shirt sizes and autoscaling, to optimize the resource provision of Argo-Rollouts to accommodate various customer demands. Based on these findings, we can define the SLO for our deployment capability offerings built atop Argo-Rollouts. Finally, the talk shows how to evaluate the Argo-Rollouts performance in your own clusters.</p>
          </details>
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl mb-0">3:30 PM - Cloud-native CI/CD via ArgoCD and Workflows in Multi-Region & Muti-cell environments</h4>
          <p className="text-lg mt-3">Edgar Magana, Splunk</p>
          <details>
            <summary className="mt-3 cursor-pointer">Details</summary>
            <p className="mt-3">Software as a Service (SAAS) transformation is only successful when the right DevOps processes are in place for the Cloud. In the world of microservices and multi-region services the extensibility of the Continuous Integration (CI) pipelines along with Continuous Delivery (CD) strategies is more critical than ever before. In this session, we present how Splunk is adopting the GitOps Kubernetes operating model to deliver a unified pipeline to provide system integration, fault injection and interoperability for our Cloud services. We will also show the adoption of ArgoCD and Argo Workflows to instantiate and operate kubernetes clusters where applications are delivered in a multi-region and multi-cell canary strategy.</p>
          </details>
        </div>

        <div className="w-full p-2 md:p-4 2xl:p6 bg-white border">
          <h4 className="text-xl mb-0">4:25 PM - Keynote</h4>
          <p className="text-lg mt-3">Dan Garfield, & Raziel Tabib, Codefresh</p>
        </div>

      </div>

      Note: Schedule is subject to change.
    </section>

    <section id="sponsors" className="container pt-8 md:pt-16 2xl:pt-24 overflow-hidden">

        <div className="pt-4 pb-24 md:pb-32 md:pt-10 text-center mx-auto">
          <h3 className="text-5xl font-normal mb-12">Diamond Sponsors</h3>
          <div className="flex flex-wrap mb-24 place-items-center">
            <div className="w-48 flex-shrink-0 mx-auto px-4 mb-4"><a className="inline-block" href="https://akuity.io/" target="_blank" rel="noreferrer"><img className="h-16" src={`logos/akuity2.svg`} alt="Akuity" loading="lazy" /></a></div>
            <div className="w-48 flex-shrink-0 mx-auto px-4 mb-4"><a className="inline-block" href="https://codefresh.io/" target="_blank" rel="noreferrer"><img className="h-16" src={`logos/codefresh.svg`} alt="Codefresh" loading="lazy" /></a></div>
            <div className="w-48 flex-shrink-0 mx-auto px-4 mb-4"><a className="inline-block" href="https://www.intuit.com/" target="_blank" rel="noreferrer"><img className="h-16" src={`logos/intuit.svg`} alt="Intuit" loading="lazy" /></a></div>
            <div className="w-48 flex-shrink-0 mx-auto px-4 mb-4"><a className="inline-block" href="https://www.redhat.com/" target="_blank" rel="noreferrer"><img className="h-16" src={`logos/redhat.svg`} alt="Red Hat" loading="lazy" /></a></div>
          </div>
          <h3 className="text-5xl font-normal mb-12">Gold Sponsors</h3>
          <div className="flex flex-wrap mb-24 place-items-center">
            <div className="w-48 flex-shrink-0 mx-auto px-4 mb-4"><a className="inline-block" href="https://www.blackrock.com/" target="_blank" rel="noreferrer"><img className="h-16" src={`logos/blackrock.svg`} alt="BlackRock" loading="lazy" /></a></div>
            <div className="w-48 flex-shrink-0 mx-auto px-4 mb-4"><a className="inline-block" href="https://harness.io/" target="_blank" rel="noreferrer"><img className="h-16" src={`logos/harness.svg`} alt="Harness" loading="lazy" /></a></div>
            <div className="w-48 flex-shrink-0 mx-auto px-4 mb-4"><a className="inline-block" href="https://pipekit.io/" target="_blank" rel="noreferrer"><img className="h-16" src={`logos/pipekit.svg`} alt="Pipekit" loading="lazy" /></a></div>
            <div className="w-48 flex-shrink-0 mx-auto px-4 mb-4"><a className="inline-block" href="https://shipa.io/" target="_blank" rel="noreferrer"><img className="h-16" src={`logos/shipa.svg`} alt="Shipa" loading="lazy" /></a></div>
            <div className="w-48 flex-shrink-0 mx-auto px-4 mb-4"><a className="inline-block" href="https://www.spectrocloud.com/" target="_blank" rel="noreferrer"><img className="h-16" src={`logos/spectro-cloud.svg`} alt="Spectro Cloud" loading="lazy" /></a></div>
          </div>
          <h3 className="text-5xl font-normal mb-12">Silver Sponsors</h3>
          <div className="flex flex-wrap place-items-center">
            <div className="w-48 flex-shrink-0 mx-auto px-4 mb-4"><a className="inline-block" href="https://www.paperspace.com/" target="_blank" rel="noreferrer"><img className="h-16" src={`logos/paperspace.png`} alt="Paperspace" loading="lazy" /></a></div>
          </div>
        </div>

    </section>

    <section className="container pt-8 md:pt-16 2xl:pt-24 overflow-hidden"></section>
    </Layout>

  )
}

export default IndexPage

