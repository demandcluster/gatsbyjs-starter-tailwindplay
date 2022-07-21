import React,{useEffect} from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import ResultSvg from "../images/results.svg";
import PieChart from "../images/piechart.svg";
import GrowthCurve from "../images/growth_curve.svg";
import Projections from "../images/projections.svg";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import CountDownTimer from './CountDownTimer';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';



function Invest({ children }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const percentLeft=30
const percentDeveloped=80


const FOUR_MONTHS_IN_MS = 122 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = 1658393120419;

  const dateTimeAfterFourMonths = NOW_IN_MS + FOUR_MONTHS_IN_MS;

useEffect(()=>{
  fetch('https://maker.ifttt.com/trigger/visit_demandcluster/json/with/key/bZcA4kbVP98YZhTerM683_')
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  }).catch(err=>{
  console.log(err)
})
},[]);

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Demandcluster Investment Forecast',
      },
    },
    scales: {
      y: {
        type: 'linear' ,
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: true,
        },
      },
    },
  };
  

  
  const labels = ['2022', '2023', '2024', '2025', '2026'];
  
  const dataSet1=[30000,500000,2000000,5000000,10000000]

  const dataSet2=[5000,7500,30000,50000,100000]

  const dataChart = {
    labels,
    datasets: [
      {
        label: 'Demandcluster Value',
        data: labels.map((el,index) => dataSet1[index]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Investment',
        data: labels.map((el,index) => dataSet2[index]),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
    ],
  };

 

  return (
    <StaticQuery
      query={graphql`
        query InvestTitleQuery {
         
          site {
            siteMetadata {
              title,
              github,
              backend,
              blog
            }
            
          }
        }
      `}
      render={data => (
        <div className="leading-normal tracking-normal text-white gradient">

            {children}
     
        
            {/* Navigation */}
            <nav id="header" className="fixed w-full z-50 top-0 text-white bg-white shadow">

              <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                  
                <div className="pl-4 flex items-center">
                  <a className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-gray-800"  href="#"> 
                    
                    <svg id="Layer_1"  className="h-8 fill-current inline" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 591.9 53.55"><defs></defs><path class="cls-1" d="M205.53,292.83c0,15.51-10.22,26.48-27.77,26.48h-17v-53h17C195.31,266.34,205.53,277.32,205.53,292.83Zm-10.06,0c0-10.07-6.82-16.8-17.94-16.8H170.8V309.7h6.73C188.65,309.7,195.47,303,195.47,292.83Z" transform="translate(-160.73 -266.34)"/><path class="cls-2" d="M245.94,273.53H211.21v-7.19h34.73Zm.45,38.52v7.26H211.21v-7.26Zm0-22.85v7.26H211.21V289.2Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M305.87,266.34v53H295.81V285.94l-12.94,20.89h-6L264,285.94v33.37H253.89v-53h9.38l16.57,26.79,16.73-26.79Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M342.73,307.36H324.79l-4.08,11.95H309.28l19.37-53h10.29l19.38,53H346.89Zm-3.33-9.61-5.6-16.27-5.6,16.27Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M403,266.34v53h-9.92L371.79,285v34.35H361.72v-53h9.84L392.9,300.7V266.34Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M454.58,292.83c0,15.51-10.22,26.48-27.77,26.48h-17v-53h17C444.36,266.34,454.58,277.32,454.58,292.83Zm-10.07,0c0-10.07-6.81-16.8-17.93-16.8h-6.74V309.7h6.74C437.7,309.7,444.51,303,444.51,292.83Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M503.47,306.7l2.34,1.09a24.13,24.13,0,0,1-21,12c-14.29,0-24.72-11.67-24.72-26s10.43-26,24.72-26a24.13,24.13,0,0,1,21,12l-2.34,1.1a21.35,21.35,0,0,0-18.67-10.51c-12.84,0-21.95,10.51-22,23.42.08,12.91,9.19,23.41,22,23.41A21.36,21.36,0,0,0,503.47,306.7Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M543.37,316.76v2.55H512.74V268.26h2.55v48.5Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M584.58,268.26v30.49c0,12.83-6.85,21.07-18.82,21.07S547,311.8,547,298.75V268.26h2.55v30.49c0,11.67,6.06,18.59,16.19,18.59S582,310.42,582,298.75V268.26Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M626.74,279.13l-2.41.8c-1.16-5.76-6.92-9.63-15.31-9.63s-14.15,4.67-14.15,11.45,7.73,8.75,15.9,10.58c14.73,3.35,18,7.66,18,13.56,0,5.4-3.86,14-17.94,14-10.65,0-17.65-5.18-19.69-11.67l2.4-.8c1.61,5.47,7.66,9.91,17.29,9.91,7.81,0,15.39-3.42,15.39-11.45,0-7-7.73-9.33-16.05-11.08-11.81-2.56-17.79-6.28-17.79-13.06,0-8.39,7.07-14,16.63-14C617.19,267.75,625.06,271.61,626.74,279.13Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M667.88,270.81H650.67v48.5h-2.48v-48.5H631v-2.55h36.91Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M707.63,316.76v2.55H673.72V268.26h33.47v2.55h-31v21.74h28.73V295H676.2v21.73Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M749.72,319.31l-11.38-20.13a16.87,16.87,0,0,1-3.36.3H719.16v19.83h-2.48V268.26H735c9.34,0,16.63,6.2,16.63,15.61a14.91,14.91,0,0,1-10.72,14.73l11.74,20.71Zm-.81-35.44c0-8.17-6-13.06-13.93-13.06H719.16v26.11H735C742.72,296.92,748.91,292,748.91,283.87Z" transform="translate(-160.73 -266.34)"/></svg>

                  </a>
                </div>

                <div className="block lg:hidden pr-4">
                  <button id="nav-toggle" 
                          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20 bg-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                  </button>
                </div>

                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
                  <ul className="list-reset lg:flex justify-end flex-1 items-center">
                    <li className="mr-3">
                      <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Active</a>
                    </li>
                    <li className="mr-3">
                      <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
                    </li>
                  </ul>
                  <form action={data.site.siteMetadata.backend}>
                    <button type="submit" id="navAction" 
                            className="mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 gradient text-white">Login</button>
                  </form>

                </div>
              </div>
              
              <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            </nav>

            {/* Hero */}
            <div className="pt-24 z-0">

              <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

                <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                  <p className="uppercase tracking-loose w-full">Get ready for the launch</p>
                  <h1 className="my-4 text-5xl font-bold leading-tight">DemandCluster</h1>
                  <p className="leading-normal text-2xl mb-8">
                   Rocket Science for Marketplaces
                  </p>
                  <p className="leading-normal text-4xl mb-8">
                   Investment opportunity
                  </p>

                </div>

                <div className="w-full md:w-3/5 py-6 text-center z-0 max-w-sm md:max-w-full">
                <ResultSvg className="max-w-sm md:max-w-full"/>
                </div>
          
              </div>

            </div>

            {/* Waves SVG */}
            <div class="relative -mt-12 lg:-mt-24">
              <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
              <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
              <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
              <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
              </g>
              <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
              </g>
              </g>
              </svg>
            </div>

            {/* Alternate features */}
            <section className="bg-white border-b py-8">
              <div className="container max-w-5xl mx-auto m-8">
                <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">{data.site.siteMetadata.title}</h2>
                <div className="w-full mb-4">	
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t">what is this</div>
                </div>
              
                <div className="flex flex-wrap">
                  <div className="w-5/6 sm:w-1/2 p-6">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3"></h3>
                    <p className="text-gray-600 mb-8"><br /><br />
                    <span className="italic">This opportunity is shared with a select group of investors</span><br/>
                    <span className="font-bold">We are in the final stage of launch.</span><br/>The current status is as follows
                   <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
                   {({ isVisible }) => (
                        <div style={{ height: 100 }}>
                          {isVisible ? <CountUp end={percentLeft} className="text-xl" suffix="% of shares are still available" delay={0} /> : null}
                          <br/>
                          {isVisible ? <CountUp end={percentDeveloped} className="text-xl" suffix="% of platform has been developed" delay={0.5} /> : null}
                          
                        </div>
                      )}
                    </VisibilitySensor>
                   
                   Demandcluster runs on a fully operational multi-datacenter private cloud since 2020.
                   Our cloud service is fully compatible with AWS, EC3, K8S. Demandcluster has full control over the route of all data.
                   We have contributed to the Mailchimp Open Commerce framework and are very active in their community through moderation of their communication channels and regular meetings.
                    </p>
                    
                  </div>
                  <div className="w-full sm:w-1/2 mx-auto p-6">
                 <PieChart className="max-w-sm md:max-w-full"/>
             

                  </div>
                </div>
        </div>
        </section>
        <section className="bg-white border-b py-8 ">
        <div className="container max-w-5xl mx-auto m-8">

                <div className="flex flex-wrap flex-col-reverse sm:flex-row ">	
                  <div className="w-full sm:w-1/2 p-6 mt-6">
           
                  <Projections className="max-w-sm md:max-w-full"/>

                  </div>
                  <div className="w-full sm:w-1/2 p-6 mt-6">
                    <div className="align-middle">
                      <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">The opportunity</h3>
                      <p className="text-gray-600 mb-8">
                      <div class="bg-white">

<div class="overflow-x-auto border-x border-t">
   <table class="table-auto w-full">
      
      <tbody>
         <tr class="border-b hover:bg-gray-50">
            <td class="p-4">
               &euro;5,000
            </td>
            <td class="p-4">
               package pricing
            </td>
           
         </tr>
         <tr class="border-b hover:bg-gray-50">
            <td class="p-4">
               1.5%
            </td>
            <td class="p-4">
               percentage of total  
            </td>
           
         </tr>
         <tr class="border-b hover:bg-gray-50">
            <td class="p-4">
               1,500
            </td>
            <td class="p-4">
               amount of shares  
            </td>
            
         </tr>
         <tr class="border-b hover:bg-gray-50">
            <td class="p-4">
               1%
            </td>
            <td class="p-4">
               percentage remaining after invested amount is reimbursed
            </td>
            
         </tr>
        </tbody>
      </table>
    </div>
  </div>

  We will reimburse the invested amount within 3 years in which case we will get back ⅓ of the shares (500 per package). Leaving the investor with 1% per purchased package and a pure profit outcome. If Demandcluster fails to pay back the full amount within 3 years, the 1.5% will stand and the obligation to pay back the invested amount remains.
  If you need more insight, please enquire to receive our pitch deck.

                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            <section className="bg-white border-b py-8">
            <div className="container max-w-5xl mx-auto m-8">

                <div className="flex flex-wrap sm:flex-row">	
                  <div className="w-full sm:w-1/2 p-6 mt-6">
                      <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">The future</h3>
                      <p className="text-gray-600 mb-8">
                        Demandcluster is like a mini-Amazon. We have our own cloud infrastructure combined with a flexible headless marketplace platform.
                        There is no 3rd party dependencies which increases our profit margin significantly.
                        Each customer will bring a substantial amount of growth
                      </p>
                      
                  </div>
                  <div className="w-full sm:w-1/2 p-6 mt-6">
                    <div className="align-middle">
                      <p className="text-gray-600 mb-8">
                      <div class="bg-white">
                    
                        <div >
                           <Line options={options} data={dataChart} /> 
                        </div>
                      

                      </div>
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </section>

        

            {/* Waves SVG */}
            <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
                  <g className="wave" fill="#f8fafc">
                    <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
                  </g>
                  <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                    <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                      <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                      <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                      <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>

            {/* CTA block */}
            <section className="container mx-auto text-center py-6 mb-12">

              <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Board now to be part of our launch!</h2>
              <div className="w-full mb-4">	
                <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t">
                 </div>
              </div>

              <h3 className="my-4 text-3xl leading-tight">     
              <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
                   {({ isVisible }) => (
                        <div style={{ height: 100 }}>
                          {isVisible ? <CountUp duration={3} separator={","} start={100000} end={percentLeft*1000} className="text-xl" suffix=" shares still available" delay={0} /> : null}
                          
                        </div>
                      )}
                    </VisibilitySensor>
                    </h3>	
                    <h4>
                    Launch within <CountDownTimer targetDate={dateTimeAfterFourMonths}/>
                    </h4>
                <h4>Contact us now through known channels or use our Discord below</h4>
              <form action={data.site.siteMetadata.blog}>
                <button type="submit"
                        className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Join our Discord</button>
              </form>
              <p className="text-xs">The data on this website is updated live.<br/>This opportunity will last for a maximum of 60 days from the 21st of June 2022.
                    </p>
            </section>

            {/* Footer */}
            <footer className="bg-white">
              <div className="container mx-auto  px-8">

                    <div className="w-full flex flex-col md:flex-row py-6">
                    
                  <div className="flex-1 mb-6">
                  
                    <a className="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"  href="#"> 
                     
                         <svg id="Layer_2" className="h-8 fill-current inline" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 591.9 53.55"><defs></defs><path class="cls-1" d="M205.53,292.83c0,15.51-10.22,26.48-27.77,26.48h-17v-53h17C195.31,266.34,205.53,277.32,205.53,292.83Zm-10.06,0c0-10.07-6.82-16.8-17.94-16.8H170.8V309.7h6.73C188.65,309.7,195.47,303,195.47,292.83Z" transform="translate(-160.73 -266.34)"/><path class="cls-2" d="M245.94,273.53H211.21v-7.19h34.73Zm.45,38.52v7.26H211.21v-7.26Zm0-22.85v7.26H211.21V289.2Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M305.87,266.34v53H295.81V285.94l-12.94,20.89h-6L264,285.94v33.37H253.89v-53h9.38l16.57,26.79,16.73-26.79Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M342.73,307.36H324.79l-4.08,11.95H309.28l19.37-53h10.29l19.38,53H346.89Zm-3.33-9.61-5.6-16.27-5.6,16.27Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M403,266.34v53h-9.92L371.79,285v34.35H361.72v-53h9.84L392.9,300.7V266.34Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M454.58,292.83c0,15.51-10.22,26.48-27.77,26.48h-17v-53h17C444.36,266.34,454.58,277.32,454.58,292.83Zm-10.07,0c0-10.07-6.81-16.8-17.93-16.8h-6.74V309.7h6.74C437.7,309.7,444.51,303,444.51,292.83Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M503.47,306.7l2.34,1.09a24.13,24.13,0,0,1-21,12c-14.29,0-24.72-11.67-24.72-26s10.43-26,24.72-26a24.13,24.13,0,0,1,21,12l-2.34,1.1a21.35,21.35,0,0,0-18.67-10.51c-12.84,0-21.95,10.51-22,23.42.08,12.91,9.19,23.41,22,23.41A21.36,21.36,0,0,0,503.47,306.7Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M543.37,316.76v2.55H512.74V268.26h2.55v48.5Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M584.58,268.26v30.49c0,12.83-6.85,21.07-18.82,21.07S547,311.8,547,298.75V268.26h2.55v30.49c0,11.67,6.06,18.59,16.19,18.59S582,310.42,582,298.75V268.26Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M626.74,279.13l-2.41.8c-1.16-5.76-6.92-9.63-15.31-9.63s-14.15,4.67-14.15,11.45,7.73,8.75,15.9,10.58c14.73,3.35,18,7.66,18,13.56,0,5.4-3.86,14-17.94,14-10.65,0-17.65-5.18-19.69-11.67l2.4-.8c1.61,5.47,7.66,9.91,17.29,9.91,7.81,0,15.39-3.42,15.39-11.45,0-7-7.73-9.33-16.05-11.08-11.81-2.56-17.79-6.28-17.79-13.06,0-8.39,7.07-14,16.63-14C617.19,267.75,625.06,271.61,626.74,279.13Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M667.88,270.81H650.67v48.5h-2.48v-48.5H631v-2.55h36.91Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M707.63,316.76v2.55H673.72V268.26h33.47v2.55h-31v21.74h28.73V295H676.2v21.73Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M749.72,319.31l-11.38-20.13a16.87,16.87,0,0,1-3.36.3H719.16v19.83h-2.48V268.26H735c9.34,0,16.63,6.2,16.63,15.61a14.91,14.91,0,0,1-10.72,14.73l11.74,20.71Zm-.81-35.44c0-8.17-6-13.06-13.93-13.06H719.16v26.11H735C742.72,296.92,748.91,292,748.91,283.87Z" transform="translate(-160.73 -266.34)"/></svg>

                    </a>
                  </div>
                
                
                        <div className="flex-1">
                            <p className="uppercase text-gray-500 md:mb-6">Links</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">FAQ</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Help</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Support</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <p className="uppercase text-gray-500 md:mb-6">Legal</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Terms</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Privacy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <p className="uppercase text-gray-500 md:mb-6">Social</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Facebook</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Linkedin</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Twitter</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <p className="uppercase text-gray-500 md:mb-6">Company</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Official Blog</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">About Us</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
          
            </footer>

        </div>
      )}
    />
  );
}

Invest.propTypes = {
  children: PropTypes.node.isRequired
};

export default Invest;
