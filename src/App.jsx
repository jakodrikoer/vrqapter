import React, { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { CameraControls } from '@react-three/drei'
import Carbase from './components/Carbase'
import Parachoques from './components/Parachoques'
import { EffectComposer, Outline, Selection } from '@react-three/postprocessing'
import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'

export const AppContext = React.createContext()

export default function App() {
	const [opacityCar, setOpacityCar] = useState(1)
	const [cameraTo, setCameraTo] = useState('base')

	var pos = null
	var tar = null

	console.log(cameraTo)
	if (cameraTo === 'base') {
		useEffect(() => {
			pos = { x: 0, y: 0, z: 0 }
			tar = { x: 0, y: 0, z: 0 }
		})
	} else if (cameraTo === 'parachoques') {
		useEffect(() => {
			pos = { x: 0, y: 0, z: 0 }
			tar = { x: 0, y: 0, z: 0 }
		})
	}
	return (
		<>
			<VRButton />
			<Canvas camera={{ position: [0, 0, 0], fov: 60 }}>
				<XR>
					<Controllers />
					<Hands />
					<ambientLight color={'0xffffff'} intensity={1} />
					<AppContext.Provider
						value={{ opacityCar, setOpacityCar, cameraTo, setCameraTo }}
					>
						<Carbase />
						<Selection>
							<EffectComposer multisampling={4} autoClear={false}>
								<Outline
									visibleEdgeColor='white'
									hiddenEdgeColor='white'
									blur
									edgeStrength={5}
								/>
							</EffectComposer>
							<Parachoques />
						</Selection>
					</AppContext.Provider>
					<Camara cameraTo={cameraTo} pos={pos} tar={tar} />
				</XR>
			</Canvas>
		</>
	)
}

function Camara({ tar, pos, ...props }) {
	const cameraControlsRef = useRef()

	useEffect(() => {
		cameraControlsRef.current?.setLookAt(0, 0, 5, 0, 0, 0, true)
	})

	return (
		<CameraControls
			ref={cameraControlsRef}
			distance={4}
			minDistance={0}
			maxDistance={5}
			minZoom={0.1}
			maxZoom={3.1}
			enabled={true}
			verticalDragToForward={false}
			dollyToCursor={false}
			infinityDolly={false}
		/>
	)
}
