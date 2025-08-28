'use client';
import { useStorage } from '@/components/context/StorageProvider';
import { getApiBaseUrl } from '@/config/AppConfig';
import { message, notification } from 'antd';
import axios from 'axios';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { usePathname } from 'next/navigation';
import React, { useContext, useEffect, useRef } from 'react';
import { useIsMounted, useWindowSize } from 'usehooks-ts';
import { ReactLenis } from '@studio-freight/react-lenis';

notification.config({
	duration: 2,
	maxCount: 3,
});

export const MainContext = React.createContext<any>(null);

const MainProvider: React.FC<any> = ({ children, isPrivate }) => {
	const lenisRef = useRef<any>();

	const isMounted = useIsMounted();
	const pathName = usePathname();
	const { width } = useWindowSize();

	const { setSetting, setIsLoading, setDataOrigin } = useStorage();

	const initAnimation = () => {
		let listFadeInScroll = gsap.utils.toArray('.fadeInScroll');
		if (listFadeInScroll.length > 0) {
			listFadeInScroll.forEach((l: any) => {
				gsap.timeline({
					scrollTrigger: {
						trigger: l,
						// start: 'top bottom',
						start: 'top bottom',
						end: 'top center',
						scrub: 2,
					},
				}).fromTo(
					l,
					{ autoAlpha: 0, opacity: 0 },
					{ autoAlpha: 1, opacity: 1, duration: 0.7, ease: 'sine.out' }
				);
			});
		}

		let listFadeUpScroll = gsap.utils.toArray('.fadeUpScroll');
		if (listFadeUpScroll.length > 0) {
			listFadeUpScroll.forEach((l: any) => {
				gsap.timeline({
					scrollTrigger: {
						trigger: l,
						start: 'top bottom',
						end: 'top center',
						scrub: 2,
					},
				}).fromTo(
					l,
					{ y: 75, autoAlpha: 0, opacity: 0 },
					{ y: 0, autoAlpha: 1, opacity: 1, duration: 0.7, ease: 'sine.out' }
				);
			});
		}

		let listFadeDownScroll = gsap.utils.toArray('.fadeDownScroll');
		if (listFadeDownScroll.length > 0) {
			listFadeDownScroll.forEach((l: any) => {
				gsap.timeline({
					scrollTrigger: {
						trigger: l,
						start: 'top bottom',
						end: 'top center',
						scrub: 2,
					},
				}).fromTo(
					l,
					{ y: -75, autoAlpha: 0, opacity: 1 },
					{ y: 0, autoAlpha: 1, opacity: 1, duration: 0.7, ease: 'sine.out' }
				);
			});
		}

		let listFadeRightScroll = gsap.utils.toArray('.fadeRightScroll');
		if (listFadeRightScroll.length > 0) {
			listFadeRightScroll.forEach((l: any) => {
				gsap.timeline({
					scrollTrigger: {
						trigger: l,
						start: 'top bottom',
						end: 'top center',
						scrub: 2,
					},
				}).fromTo(
					l,
					{ x: -75, autoAlpha: 0, opacity: 0 },
					{ x: 0, autoAlpha: 1, opacity: 1, duration: 0.7, ease: 'sine.out' }
				);
			});
		}

		let listFadeLeftScroll = gsap.utils.toArray('.fadeLeftScroll');
		if (listFadeLeftScroll.length > 0) {
			listFadeLeftScroll.forEach((l: any) => {
				gsap.timeline({
					scrollTrigger: {
						trigger: l,
						start: 'top bottom',
						end: 'top center',
						scrub: 2,
					},
				}).fromTo(
					l,
					{ x: 75, autoAlpha: 0, opacity: 0 },
					{ x: 0, autoAlpha: 1, opacity: 1, duration: 0.7, ease: 'sine.out' }
				);
			});
		}

		let listFadeIn = gsap.utils.toArray('.fadeIn');
		if (listFadeIn.length > 0) {
			listFadeIn.forEach((l: any) => {
				gsap.timeline({
					scrollTrigger: {
						trigger: l,
						start: 'top bottom',
					},
				}).fromTo(
					l,
					{ autoAlpha: 0, opacity: 0 },
					{ autoAlpha: 1, opacity: 1, duration: 0.7, ease: 'sine.out' }
				);
			});
		}

		let listFadeUp = gsap.utils.toArray('.fadeUp');
		if (listFadeUp.length > 0) {
			listFadeUp.forEach((l: any) => {
				gsap.timeline({
					scrollTrigger: {
						trigger: l,
						start: 'top bottom',
					},
				}).fromTo(
					l,
					{ y: 75, autoAlpha: 0, opacity: 0 },
					{ y: 0, autoAlpha: 1, opacity: 1, duration: 0.7, ease: 'sine.out' }
				);
			});
		}

		let listFadeDown = gsap.utils.toArray('.fadeDown');
		if (listFadeDown.length > 0) {
			listFadeDown.forEach((l: any) => {
				gsap.timeline({
					scrollTrigger: {
						trigger: l,
						start: 'top bottom',
					},
				}).fromTo(
					l,
					{ y: -75, autoAlpha: 0, opacity: 0 },
					{ y: 0, autoAlpha: 1, opacity: 1, duration: 0.7, ease: 'sine.out' }
				);
			});
		}

		let listFadeRight = gsap.utils.toArray('.fadeRight');
		if (listFadeRight.length > 0) {
			listFadeRight.forEach((l: any) => {
				gsap.timeline({
					scrollTrigger: {
						trigger: l,
						start: 'top bottom',
					},
				}).fromTo(
					l,
					{ x: -75, autoAlpha: 0, opacity: 0 },
					{ x: 0, autoAlpha: 1, opacity: 1, duration: 0.7, ease: 'sine.out' }
				);
			});
		}

		let listFadeLeft = gsap.utils.toArray('.fadeLeft');
		if (listFadeLeft.length > 0) {
			listFadeLeft.forEach((l: any) => {
				gsap.timeline({
					scrollTrigger: {
						trigger: l,
						start: 'top bottom',
					},
				}).fromTo(
					l,
					{ x: 75, autoAlpha: 0, opacity: 0 },
					{ x: 0, autoAlpha: 1, opacity: 1, duration: 0.7, ease: 'sine.out' }
				);
			});
		}

		ScrollTrigger.refresh();
	};

	const getSetting = async () => {
		try {
			const Apicall: any = await axios.get(getApiBaseUrl(`/api/get-setting/`));
			const res: any = Apicall.data;
			if (res.success) {
				setSetting(res.data);
			}
		} catch (error) {
			// notification.warning({ message: 'Somthing wrong!' });
			console.log('BiMeow log get setting fail');
		}
	};

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		// getSetting();

		function update(time: any) {
			lenisRef.current?.lenis?.raf(time * 1000);
		}

		gsap.ticker.add(update);

		return () => {
			gsap.ticker.remove(update);
		};
	}, []);

	useEffect(() => {
		setIsLoading(true);
		setDataOrigin([]);

		setTimeout(() => {
			if (isMounted() && pathName) {
				window.scroll(0, 0);
				initAnimation();
				ScrollTrigger.refresh();
				setIsLoading(false);
			}
		}, 1000);

		return () => {};
	}, [isMounted, pathName]);

	// useEffect(() => {
	// 	if (width < 1000) {
	// 		ScrollTrigger.defaults({
	// 			scroller: '.mainPage',
	// 		});
	// 	}
	// 	return () => {};
	// }, [width]);

	return (
		<MainContext.Provider value={{}}>
			<ReactLenis ref={lenisRef} autoRaf={false} root={true}>
				{children}
			</ReactLenis>
		</MainContext.Provider>
	);
};

export default MainProvider;

export const useMain = () => {
	const context = useContext(MainContext);
	if (!context) {
		throw new Error('useMain has to be used within <MainContext.Provider>');
	}
	return context;
};
