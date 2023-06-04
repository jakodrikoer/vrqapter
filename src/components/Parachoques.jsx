import React, { useContext, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useGLTF, useAnimations, Tube } from '@react-three/drei'
import { Select } from '@react-three/postprocessing'
import { AppContext } from '../App'
import { gsap } from 'gsap'

export default function Model({ ...props }) {
	const group = useRef()
	const { nodes, materials, animations } = useGLTF(
		'public/models/parachoques.gltf'
	)
	const { actions } = useAnimations(animations, group)
	const [hovered, set] = useState(false)
	const [enable, setEnable] = useState(false)
	const [open, setOpen] = useState(false)
	const global = useContext(AppContext)

	const base = new THREE.MeshNormalMaterial({
		color: 0xc6c6c6,
		transparent: true,
		opacity: 1,
		doubleSided: true,
	})

	useEffect(() => {
		if (open === false) {
			actions.animationParachoque.timeScale = -1
			actions.animationParachoque.enabled = enable
			actions.animationParachoque.paused = false
			global.setOpacityCar(0)
		} else {
			actions.animationParachoque.reset()
			actions.animationParachoque.clampWhenFinished = true
			actions.animationParachoque.timeScale = 1
			actions.animationParachoque.setLoop(THREE.LoopOnce, 1)
			actions.animationParachoque.enabled = enable
			actions.animationParachoque.play()
			global.setOpacityCar(1)
		}
	}, [enable, open])

	useEffect(() => {
		if (global.opacityCar === 0) {
			gsap.fromTo(
				base,
				{ opacity: 1 },
				{ opacity: 0, duration: 2, ease: 'power2.in' }
			)
		} else {
			gsap.fromTo(
				base,
				{ opacity: 0 },
				{ opacity: 1, duration: 2, ease: 'power2.out' }
			)
		}
	}, [global.opacityCar])

	return (
		<group ref={group} {...props} dispose={null}>
			<Select enabled={hovered}>
				<group
					name='Scene'
					onClick={() => {
						setEnable(true)
						setOpen(!open)
					}}
				>
					<mesh
						name='ProtectorSuperior'
						geometry={nodes.ProtectorSuperior.geometry}
						material={base}
						position={[2, 0.89, 0]}
					/>
					<mesh
						name='ParachoqueInferior'
						geometry={nodes.ParachoqueInferior.geometry}
						material={base}
						position={[2.02, 0.37, 0]}
					/>
					<mesh
						name='Parrilla'
						geometry={nodes.Parrilla.geometry}
						material={base}
						position={[2.09, 0.75, 0]}
					/>
					<mesh
						name='ProtectorInferior'
						geometry={nodes.ProtectorInferior.geometry}
						material={base}
						position={[1.71, 0.35, 0]}
					/>
					<mesh
						name='GuardapolvoCocuyos'
						geometry={nodes.GuardapolvoCocuyos.geometry}
						material={base}
						position={[2.03, 0.59, 0]}
					/>
					<mesh
						name='Placa001'
						geometry={nodes.Placa001.geometry}
						material={base}
						position={[2.26, 0.57, 0.01]}
					/>
					<mesh
						name='Cocuyos'
						geometry={nodes.Cocuyos.geometry}
						material={base}
						position={[1.96, 0.58, 0]}
					/>
					<mesh
						name='BordeParrilla'
						geometry={nodes.BordeParrilla.geometry}
						material={base}
						position={[2.14, 0.77, 0.03]}
					/>
					<mesh
						name='ParachoqueSuperior'
						geometry={nodes.ParachoqueSuperior.geometry}
						material={base}
						position={[2.01, 0.66, 0]}
					/>
					<mesh
						name='LucesDelantera'
						geometry={nodes.LucesDelantera.geometry}
						material={base}
						position={[1.89, 0.83, 0]}
					/>
					<mesh
						name='BombillaPrincipales'
						geometry={nodes.BombillaPrincipales.geometry}
						material={base}
						position={[1.55, 0.83, 0]}
					/>
					<mesh
						name='BarraHorizontal'
						geometry={nodes.BarraHorizontal.geometry}
						material={base}
						position={[1, 0.86, -0.12]}
					/>
					<mesh
						name='Pieza1'
						geometry={nodes.Pieza1.geometry}
						material={base}
						position={[1.93, 0.79, 0.06]}
						rotation={[Math.PI / 2, 0, -1.57]}
						scale={0.03}
					/>
					<mesh
						name='Pieza2'
						geometry={nodes.Pieza2.geometry}
						material={base}
						position={[1.85, 0.8, 0.07]}
						rotation={[Math.PI / 2, 0, -1.58]}
						scale={0.06}
					/>
					<mesh
						name='Pieza3'
						geometry={nodes.Pieza3.geometry}
						material={base}
						position={[1.72, 0.72, 0.02]}
						rotation={[Math.PI / 2, 0, -1.54]}
						scale={0.36}
					/>
				</group>
			</Select>
		</group>
	)
}

useGLTF.preload('public/models/parachoques.gltf')
