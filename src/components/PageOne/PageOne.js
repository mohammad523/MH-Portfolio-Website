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
										from={{ scale: 1 }}
										to={{ scale: 300, display: "none" }}
									/>
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
