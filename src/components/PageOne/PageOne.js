/** @format */
import logo from "../../icons/circle.svg";
import responsive from "../../icons/rtw_responsive_design.png";
import sdresponsive from "../../icons/social_dev_responsive_design.png";
import twaResponsive from "../../icons/theWeatherApp_responsive_design.png";
import styles from "./PageStyles.css";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { FaReact, FaCss3Alt, FaJs, FaBorderNone } from "react-icons/fa";
import { DiMongodb, DiNodejsSmall, DiCss3 } from "react-icons/di";
import { useInView } from "react-intersection-observer";
import "animate.css";

const PageOne = () => {
	const [ref, inView, entry] = useInView({
		threshold: 0.5,
	});

	console.log("entry", entry);
	return (
		<div className='scroll-magic'>
			<Controller>
				<Scene triggerHook='onLeave' duration={5000} pin>
					{(progress) => (
						<div id='page-one-div'>
							<Timeline
								progress={progress}
								paused
								target={<img src={logo} alt='MH Logo' className='mhLogo' />}
							>
								<Tween from={{ rotate: "0deg" }} to={{ rotate: "360deg" }} />

								<Timeline
									progress={progress}
									// paused
									target={
										<h1 id='pageOneTagline'>
											HI IM MOHAMMAD. NICE TO MEET YOU. SCROLL TO SEE MY WORK
										</h1>
									}
								>
									<Tween to={{ opacity: 0, display: "none" }} />
									<Timeline
										progress={progress}
										paused
										target={
											<div className='absolute'>
												<h1 className='forward'>
													HTML • CSS • JAVASCRIPT • REACTJS • MONGODB • NODEJS •
													RAILS • REACT NATIVE • BOOTSTRAP
												</h1>
												\{" "}
												<h1 className='forward'>
													BOOTSTRAP • NODEJS • MONGODB • HTML • JAVASCRIPT •
													REACT NATIVE • RAILS • REACTJS
												</h1>
												<h1 className='forward'>
													CSS • BOOTSTRAP • NODEJS • HTML • JAVASCRIPT • REACT
													NATIVE • RAILS • REACTJS
												</h1>
												<h1 className='forward'>
													HTML • CSS • JAVASCRIPT • REACTJS • REACTJS • NODEJS •
													RAILS • REACT NATIVE • BOOTSTRAP
												</h1>
												<h1 className='forward'>
													HTML • CSS • JAVASCRIPT • REACTJS • MONGODB • NODEJS •
													RAILS • REACT NATIVE • BOOTSTRAP
												</h1>
												<h1 className='forward'>
													HTML • CSS • JAVASCRIPT • REACTJS • REACT NATIVE •
													NODEJS • RAILS • REACT NATIVE • BOOTSTRAP
												</h1>
											</div>
										}
									>
										<Tween
											from={{ transform: "translateX(100px)" }}
											to={{
												transform: "translateX(250px)",
												opacity: 0,

												display: "none",
											}}
										></Tween>
										<Timeline
											progress={progress}
											paused
											target={
												<div className='absolute2'>
													<h1 className='backward'>
														HTML • CSS • REACT NATIVE • REACTJS • JAVASCRIPT
													</h1>

													<h1 className='backward'>
														REACTJS • RAILS • REACT NATIVE • JAVASCRIPT • HTML •
														REACT NATIVE • REACTJS
													</h1>
													<h1 className='backward'>
														REACTJS • RAILS • REACT NATIVE • JAVASCRIPT • HTML •
														NODEJS • BOOTSTRAP • CSS
													</h1>
													<h1 className='backward'>
														REACTJS • REACTNATIVE • NODEJS • RAILS • BOOTSTRAP •
														HTML • CSS • JAVASCRIPT • NATIVE
													</h1>
													<h1 className='backward'>
														REACTJS • REACTJS • NODEJS • RAILS • BOOTSTRAP •
														HTML • CSS • JAVASCRIPT • NATIVE
													</h1>
													<h1 className='backward'>
														REACTJS • REACTJS • REACTJS • RAILS • REACTJS • CSS
														• REACTJS • NATIVE
													</h1>
												</div>
											}
										>
											<Tween
												from={{ transform: "translateX(0px)" }}
												to={{
													transform: "translateX(-500px)",
													opacity: 0,
													display: "none",
												}}
											></Tween>
											<Timeline
												progress={progress}
												paused
												target={
													<div ref={ref} className='project page-one'>
														<h1
															className={`project-title ${
																entry
																	? "animate__animated animate__fadeInUp"
																	: ""
															}`}
														>
															<span className=''></span>Research Trials
															Worldwide
														</h1>
														{/* <img src={logo} className='constant-mhLogo' /> */}
														<a
															href='https://rtworldwide.herokuapp.com/'
															className='link'
														>
															<img
																src={responsive}
																className='responsive-design'
															/>
														</a>
														<p className='project-description'>
															A beautiful site designed for a pharmaceutical
															trials company with lazy-loading animations, a
															custom burger icon, and CSS transitions. The
															following technologies were used:
														</p>
														<ul className='project-technologies'>
															<li>
																<FaReact />
																<FaCss3Alt />
																<FaJs />
															</li>
														</ul>
													</div>
												}
											>
												<Tween
													from={{ opacity: 0, display: "none" }}
													to={{
														transform: "translateX(-500px)",
														opacity: 1,
														display: "none",
													}}
												></Tween>
											</Timeline>
										</Timeline>
									</Timeline>
								</Timeline>
							</Timeline>
						</div>
					)}
				</Scene>
				{/* <Scene triggerHook='onLeave' duration={5000} pin>
					{(progress) => (
						<div className='page-two'>
							<Timeline
								totalProgress={progress}
								paused
								target={
									<p className='page-two-tagline'>i love everything visual.</p>
								}
							>
								<Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
								<Tween to={{ opacity: 0, display: "none" }} />
								<Timeline
									target={
										<p className='page-two-tagline'>
											Turning your ideas into reality
										</p>
									}
								>
									<Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />

									<Tween to={{ opacity: 0, display: "none" }} />
								</Timeline>
							</Timeline>
						</div>
					)}
				</Scene> */}
				<Scene triggerHook='onLeave' duration={"1000%"}>
					{(progress) => (
						<div className='project-container'>
							<Timeline
								progress={progress}
								paused
								target={
									<div ref={ref} className='project page-one'>
										<h1 className='project-title'>
											<span className=''></span>Research Trials Worldwide
										</h1>

										{/* <img src={logo} className='constant-mhLogo' /> */}
										<a
											href='https://rtworldwide.herokuapp.com/'
											className='link'
										>
											<img src={responsive} className='responsive-design' />
										</a>
										<p className='project-description'>
											A beautiful site designed for a pharmaceutical trials
											company with lazy-loading animations, a custom burger
											icon, and CSS transitions. The following technologies were
											used:
										</p>
										<ul className='project-technologies'>
											<li>
												<FaReact />
												<FaCss3Alt />
												<FaJs />
											</li>
										</ul>
									</div>
								}
							>
								<Tween />
							</Timeline>
							<Timeline
								progress={progress}
								paused
								target={
									<div className='project page-two'>
										<h1 className='project-title'>The Social Dev</h1>
										{/* <img src={logo} className='constant-mhLogo' /> */}
										<a
											href='https://the-social-dev-network.herokuapp.com/login'
											className='link'
										>
											<img src={sdresponsive} className='responsive-design' />
										</a>
										<p className='project-description'>
											A social network for developers connected to a fully
											functional REST API with user authentication, Redux state
											management, and a live feed.
										</p>
										<ul className='project-technologies'>
											<li>
												<FaReact />
												<DiCss3 />
												<DiMongodb />
												<DiNodejsSmall />
											</li>
										</ul>
									</div>
								}
							>
								<Tween />
							</Timeline>
							<Timeline
								progress={progress}
								paused
								target={
									<div className='project page-two'>
										<h1 className='project-title'>The Weather App</h1>
										{/* <img src={logo} className='constant-mhLogo' /> */}
										<a
											href='https://the-social-dev-network.herokuapp.com/login'
											className='link'
										>
											<img src={twaResponsive} className='responsive-design' />
										</a>
										<p className='project-description'>
											A beautiful weather app linked to a weather API with a
											responsive transparent design. ZIP codes that are looked
											up are saved in the state.
										</p>
										<ul className='project-technologies'>
											<li>
												<FaReact />
												<DiCss3 />
												<DiMongodb />
												<DiNodejsSmall />
											</li>
										</ul>
									</div>
								}
							>
								<Tween />
							</Timeline>
						</div>
					)}
				</Scene>
			</Controller>
		</div>
	);
};

export default PageOne;
