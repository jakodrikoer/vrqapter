import * as THREE from 'three'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { AppContext } from '../App'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { gsap } from 'gsap'

export default function Model({ ...props }) {
	const group = useRef()
	const { nodes, materials } = useGLTF('public/models/carbase.gltf')
	const global = useContext(AppContext)

	const base = new THREE.MeshNormalMaterial({
		color: 0xc6c6c6,
		transparent: true,
		doubleSided: true,
		opacity: 0,
	})

	useEffect(() => {
		if (global.opacityCar === 1) {
			gsap.fromTo(
				base,
				{ opacity: 1 },
				{ opacity: 0, duration: 2, ease: 'power2.out' }
			)
		} else {
			gsap.fromTo(
				base,
				{ opacity: 0 },
				{ opacity: 1, duration: 2, ease: 'power2.in' }
			)
		}
	}, [global.opacityCar])

	return (
		<group ref={group} {...props} dispose={null} scale={1}>
			<mesh
				geometry={nodes.PinturaPlateada.geometry}
				material={base}
				scale={0.01}
			/>
			<mesh geometry={nodes.Vidrio.geometry} material={base} scale={0.01} />
			<mesh geometry={nodes.Interior.geometry} material={base} scale={0.01} />
			<mesh
				geometry={nodes.PlasticoNegro.geometry}
				material={base}
				scale={0.01}
			/>
			<mesh
				geometry={nodes.GomasNegras.geometry}
				material={base}
				scale={0.01}
			/>
			<mesh
				geometry={nodes.VidrioOscuro.geometry}
				material={base}
				scale={0.01}
			/>
			<mesh geometry={nodes.Sombra.geometry} material={base} scale={0.01} />
			<mesh geometry={nodes.Placa.geometry} material={base} scale={0.01} />
			<mesh geometry={nodes.Espejo.geometry} material={base} scale={0.01} />
			<mesh geometry={nodes.Chromado.geometry} material={base} scale={0.01} />
			<mesh
				geometry={nodes.PinturaPlateada2.geometry}
				material={base}
				scale={0.01}
			/>
			<mesh
				geometry={nodes.PlasticoNegro2.geometry}
				material={base}
				scale={0.01}
			/>
			<mesh
				geometry={nodes.PlasticoNegroRin.geometry}
				material={base}
				position={[-0.03, 0.34, 0]}
			/>
			<mesh
				geometry={nodes.Cauchos.geometry}
				material={base}
				position={[-0.03, 0.34, 0]}
			/>
			<mesh
				geometry={nodes.PlateadoRin.geometry}
				material={base}
				position={[-0.03, 0.34, 0]}
			/>
			<mesh
				geometry={nodes.ChromadoRin.geometry}
				material={base}
				position={[-0.03, 0.34, 0]}
			/>
			<mesh
				geometry={nodes.MetalNegroRin.geometry}
				material={base}
				position={[-0.03, 0.34, 0]}
			/>
			<mesh
				geometry={nodes.Plateado2Rin.geometry}
				material={base}
				position={[-0.03, 0.34, 0]}
			/>
			<mesh
				geometry={nodes.FaroMetalizadoRojo.geometry}
				material={base}
				scale={0.01}
			/>
			<mesh
				geometry={nodes.FaroPlasticoAmarillo.geometry}
				material={base}
				scale={0.01}
			/>
			<mesh
				geometry={nodes.FaroPlasticoGris.geometry}
				material={base}
				scale={0.01}
			/>
			<mesh
				geometry={nodes.FaroPlasticoRojoTransparente.geometry}
				material={base}
				scale={0.01}
			/>
			<mesh
				geometry={nodes.FaroPlasticoTransparente.geometry}
				material={base}
				scale={0.01}
			/>
			<mesh
				geometry={nodes.FaroChromado.geometry}
				material={base}
				scale={0.01}
			/>
		</group>
	)
}

useGLTF.preload('public/models/carbase.gltf')
