import { useGLTF, Detailed } from "@react-three/drei";
import { useMemo, useState, useEffect } from "react";

// Create multiple quality versions
function HighQualityComputer() {
  const { nodes, materials } = useGLTF("/models/computer-optimized-transformed.glb");
  
  return (
    <group dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_1.geometry}
          material={materials["ComputerDesk.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_2.geometry}
          material={materials["FloppyDisk.001"]}
        />
      </group>
    </group>
  );
}

function MediumQualityComputer() {
  // Simplified version - fewer polygons, basic materials
  return (
    <group>
      <mesh position={[-4.005, 67.549, 58.539]}>
        <boxGeometry args={[80, 50, 60]} />
        <meshStandardMaterial color="#4a4a4a" roughness={0.7} />
      </mesh>
      <mesh position={[-4.005, 77.549, 58.539]}>
        <boxGeometry args={[70, 2, 50]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
    </group>
  );
}

function LowQualityComputer() {
  // Ultra simple version for distant viewing
  return (
    <mesh position={[-4.005, 67.549, 58.539]}>
      <boxGeometry args={[80, 60, 60]} />
      <meshBasicMaterial color="#3a3a3a" />
    </mesh>
  );
}

export function Computer(props) {
  return (
    <group {...props}>
      <Detailed distances={[0, 15, 25]}>
        <HighQualityComputer />
        <MediumQualityComputer />
        <LowQualityComputer />
      </Detailed>
    </group>
  );
}

// Preload only when needed
useGLTF.preload("/models/computer-optimized-transformed.glb");

export default Computer;