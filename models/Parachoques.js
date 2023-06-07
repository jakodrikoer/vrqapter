/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/parachoques.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="P10" geometry={nodes.P10.geometry} material={nodes.P10.material} position={[2, 0.89, 0]} />
        <mesh name="P2" geometry={nodes.P2.geometry} material={nodes.P2.material} position={[2.02, 0.37, 0]} />
        <mesh name="P3" geometry={nodes.P3.geometry} material={nodes.P3.material} position={[2.09, 0.75, 0]} />
        <mesh name="P20" geometry={nodes.P20.geometry} material={nodes.P20.material} position={[1.71, 0.35, 0]} />
        <mesh name="P4" geometry={nodes.P4.geometry} material={nodes.P4.material} position={[2.03, 0.59, -0.74]} />
        <mesh name="P6" geometry={nodes.P6.geometry} material={nodes.P6.material} position={[2.01, 0.58, -0.74]} />
        <mesh name="P7" geometry={nodes.P7.geometry} material={nodes.P7.material} position={[2.14, 0.77, 0.03]} />
        <mesh name="P8" geometry={nodes.P8.geometry} material={nodes.P8.material} position={[1.93, 0.67, 0.11]} />
        <mesh name="P9" geometry={nodes.P9.geometry} material={nodes.P9.material} position={[1.9, 0.82, 0]} />
        <mesh name="P1" geometry={nodes.P1.geometry} material={nodes.P1.material} position={[1.55, 0.83, 0]} />
        <mesh name="P11" geometry={nodes.P11.geometry} material={nodes.P11.material} position={[1, 0.86, -0.12]} />
        <mesh name="P12" geometry={nodes.P12.geometry} material={nodes.P12.material} position={[1.93, 0.79, 0.06]} />
        <mesh name="P13" geometry={nodes.P13.geometry} material={nodes.P13.material} position={[1.85, 0.8, 0.07]} />
        <mesh name="P14" geometry={nodes.P14.geometry} material={nodes.P14.material} position={[1.72, 0.72, 0.02]} />
        <mesh name="P15" geometry={nodes.P15.geometry} material={nodes.P15.material} />
        <mesh name="P16" geometry={nodes.P16.geometry} material={nodes.P16.material} />
        <mesh name="P17" geometry={nodes.P17.geometry} material={nodes.P17.material} />
        <mesh name="P18" geometry={nodes.P18.geometry} material={nodes.P18.material} position={[2.03, 0.59, 0.73]} />
        <mesh name="P19" geometry={nodes.P19.geometry} material={nodes.P19.material} position={[2.01, 0.58, 0.74]} />
      </group>
    </group>
  )
}

useGLTF.preload('/parachoques.gltf')
