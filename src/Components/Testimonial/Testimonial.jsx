import React from 'react'
import './Testimonial.css'

function Testimonial() {
  return (
    <>
        <div className="dvh mt-8 testimonials p-3 md:px-20 flex flex-col gap-y-20 gap-x-7 bg-[#001a53] text-white">
        <div className="mt-8">
            <div className="flex md:gap-x-4 gap-x-2 items-center mb-4">
            <i  className="fa-solid fa-square fa-2xs me-3 text-blue-600"></i>
                <p className="text-medium md:font-bold font-normal">OUR TESTIMONIALS</p>
            </div>
            <h3 className="md:text-4xl text-3xl font-medium">What Customers Say About Us</h3>
        </div>
        <div className="scrollable-cards-container overflow-x-auto">
            <div className="cards flex gap-x-4 overflow-x-auto">
                <div className="max-w-[40rem] flex items-center justify-center">
                    <div className="card bg-white md:w-[40rem] w-[18rem] rounded-lg">
                        <div className="p-9">
                        <i class="fa-solid fa-quote-left text-3xl text-indigo-600"></i>

                            <p className="text-[#82858d] font-normal text-lg">Ombrulla demonstrates how AI could quickly extract value from our data and show significant economic benefits. Ombrulla comes highly recommended by us and we look forward to collaborating with them on future initiatives.</p>
                        </div>
                        <div className="text-sm bg-slate-300 md:p-9 p-2 rounded-b-lg flex items-center gap-x-6">
                            <div className="card-logo w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem] rounded-full overflow-hidden">
                                <img src="https://www.ombrulla.com/_astro/planet-fitness.2b86950e_Z1XdacQ.webp" alt="Planet Fitness"/>
                            </div>
                            <div className="detals font-medium">
                                <p className="text-black">Joseph</p>
                                <p className="text-indigo-400">Planet Fitness</p>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="max-w-[40rem] flex items-center justify-center">
                    <div className="card bg-white md:w-[40rem] w-[18rem] rounded-lg">
                        <div className="p-9">
                        <i class="fa-solid fa-quote-left text-3xl text-indigo-600"></i>

                            <p className="text-[#82858d] font-normal text-lg">Ombrulla has exceeded our expectations; they are serious and consistent in their job. Ombrulla and their team of programmers have always been available to us. I would suggest this firm to anyone looking for restaurant data analytics solutions.</p>
                        </div>
                        <div className="text-sm bg-slate-300 md:p-9 p-2 rounded-b-lg flex items-center gap-x-6">
                            <div className="card-logo w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem] rounded-full overflow-hidden">
                                <img src="https://www.ombrulla.com/_astro/wild-leaf.85d7f76f_Z1vakWD.webp" alt="Wild Leaf" className="h-full"/>
                            </div>
                            <div className="detals font-medium">
                                <p className="text-black">Tony Michael</p>
                                <p className="text-indigo-400">CEO, The Cotillion Hotels, New York, USA</p>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="max-w-[40rem] flex items-center justify-center">
                    <div className="card bg-white md:w-[40rem] w-[18rem] rounded-lg">
                        <div className="p-9">
                        <i class="fa-solid fa-quote-left text-3xl text-indigo-600"></i>

                            <p className="text-[#82858d] font-normal text-lg">We would like to express our gratitude for the collaboration on the development of our Business Intelligence & Analytics solutions. Ombrulla and its analytics team performed admirably and we are pleased with the solution provided to us.</p>
                        </div>
                        <div className="text-sm bg-slate-300 md:p-9 p-2 rounded-b-lg flex items-center gap-x-6">
                            <div className="card-logo w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem] rounded-full overflow-hidden">
                                <img src="https://www.ombrulla.com/_astro/best-western.d33d3fe0_Z2qgqbJ.webp" alt="Best Western" className="h-full"/>
                            </div>
                            <div className="detals font-medium">
                                <p className="text-black">David Thomas</p>
                                <p className="text-indigo-400">Managing Director Best Western, Kansas, USA.</p>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="max-w-[40rem] flex items-center justify-center">
                    <div className="card bg-white md:w-[40rem] w-[18rem] rounded-lg">
                        <div className="p-9">
                        <i class="fa-solid fa-quote-left text-3xl text-indigo-600"></i>

                            <p className="text-[#82858d] font-normal text-lg">Ombrulla's AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective.</p>
                        </div>
                        <div className="text-sm bg-slate-300 md:p-9 p-2 rounded-b-lg flex items-center gap-x-6">
                            <div className="card-logo w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem] rounded-full border-2 overflow-hidden border-white">
                                <img src="https://www.ombrulla.com/_astro/terranz-other.fe41f67d_Z1IrlCC.webp" alt="Terranz"/>
                            </div>
                            <div className="detals font-medium">
                                <p className="text-black">James Joseph</p>
                                <p className="text-indigo-400">Managing Director, Terranz Dubai, UAE</p>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="max-w-[40rem] flex items-center justify-center">
                    <div className="card bg-white md:w-[40rem] w-[18rem] rounded-lg">
                        <div className="p-9">
                        <i class="fa-solid fa-quote-left text-3xl text-indigo-600"></i>

                            <p className="text-[#82858d] font-normal text-lg">We are pleased to express our satisfaction with the collaboration with Ombrulla for the execution of scratch and damage detection in cars. We extend our heartfelt gratitude to Ombrulla for their invaluable support throughout this project.</p>
                        </div>
                        <div className="text-sm bg-slate-300 md:p-9 p-2 rounded-b-lg flex items-center gap-x-6">
                            <div className="card-logo w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem] rounded-full overflow-hidden">
                                <img src="https://www.ombrulla.com/_astro/azelit.c51d4d1e_ZFoIpv.webp" alt="Azelit" className="h-full"/>
                            </div>
                            <div className="detals font-medium">
                                <p className="text-black">Vinod MN</p>
                                <p className="text-indigo-400">Managing Director, AZEL IT Solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="max-w-[40rem] flex items-center justify-center">
                    <div className="card bg-white md:w-[40rem] w-[18rem] rounded-lg">
                        <div className="p-9">
                        <i class="fa-solid fa-quote-left text-3xl text-indigo-600"></i>

                            <p className="text-[#82858d] font-normal text-lg">Ombrulla's AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective.</p>
                        </div>
                        <div className="text-sm bg-slate-300 md:p-9 p-2 rounded-b-lg flex items-center gap-x-6">
                            <div className="card-logo w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem] rounded-full overflow-hidden border-2 border-white">
                                <img src="https://www.ombrulla.com/_astro/terranz-other.fe41f67d_Z1IrlCC.webp" alt="Terranz"/>
                            </div>
                            <div className="detals font-medium">
                                <p className="text-black">Joseph</p>
                                <p className="text-indigo-400">Terranz Dubai, UAE</p>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="max-w-[40rem] flex items-center justify-center">
                    <div className="card bg-white md:w-[40rem] w-[18rem] rounded-lg">
                        <div className="p-9">
                        <i class="fa-solid fa-quote-left text-3xl text-indigo-600"></i>
                            <p className="text-[#82858d] font-normal text-lg">Ombrulla's AI people tracking solution has impressively enhanced our ability to seamlessly monitor and manage foot traffic. The system's accuracy and real-time insights not only streamline operations but also elevate overall security measures.</p>
                        </div>
                        <div className="text-sm bg-slate-300 md:p-9 p-2 rounded-b-lg flex items-center gap-x-6">
                            <div className="card-logo w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem] rounded-full overflow-hidden">
                                <img src="https://www.ombrulla.com/_astro/shipcom.ee1ba5d2_o18LH.webp" alt="Shipcom"/>
                            </div>
                            <div className="detals font-medium">
                                <p className="text-black">Quresh Goga</p>
                                <p className="text-indigo-400">Shipcom wireless</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-[40rem] flex items-center justify-center">
                    <div className="card bg-white md:w-[40rem] w-[18rem] rounded-lg">
                        <div className="p-9">
                        <i class="fa-solid fa-quote-left text-3xl text-indigo-600"></i>

                            <p className="text-[#82858d] font-normal text-lg">Ombrulla and Green Palm collaborate on an AI ship inspection project, employing image and video analysis to detect damages and anomalies. We are highly satisfied with the project's outcomes and the benefits it brings.</p>
                        </div>
                        <div className="text-sm bg-slate-300 md:p-9 p-2 rounded-b-lg flex items-center gap-x-6">
                            <div className="card-logo w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem] rounded-full overflow-hidden">
                                <img src="https://www.ombrulla.com/_astro/green-palmes.41a0af47_Z1Mo497.webp" alt="Green Palms"/>
                            </div>
                            <div className="detals font-medium">
                                <p className="text-black">Manoj Menon</p>
                                <p className="text-indigo-400">Green Palm</p>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="flex items-center justify-between">
                    <div className="left-5 overlay-button flex items-center justify-center bg-slate-600 text-white rounded-full w-[3rem] h-[3rem] cursor-pointer" onclick="scrollCards('left')"><i className="fa-solid fa-chevron-left"></i></div>
                    <div className="right-5 overlay-button flex items-center justify-center bg-slate-600 text-white rounded-full w-[3rem] h-[3rem] cursor-pointer" onclick="scrollCards('right')"><i className="fa-solid fa-chevron-right"></i></div>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Testimonial