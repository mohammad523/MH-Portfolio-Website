/** @format */
import logo from "../../icons/circle.svg";
import styles from "./PageStyles.css";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const PageOne = () => {
	return (
		<>
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
								<Tween to={{ opacity: 0 }} />

								<Timeline
									progress={progress}
									// paused
									target={
										<h1 id='pageOneTagline'>
											HI IM MOHAMMAD. NICE TO MEET YOU. SCROLL TO SEE MY WORK
										</h1>
									}
								>
									<Tween
										from={{ opacity: 1 }}
										to={{ opacity: 0, display: "none" }}
									/>
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
											to={{ transform: "translateX(250px)" }}
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
												to={{ transform: "translateX(-500px)" }}
											></Tween>
										</Timeline>
									</Timeline>
								</Timeline>
							</Timeline>
						</div>
					)}
				</Scene>
				<Scene triggerHook='onLeave' duration={5000} pin>
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
									// progress={progress}
									// paused
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
				</Scene>
			</Controller>
		</>
	);
};

export default PageOne;
