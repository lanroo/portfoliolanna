import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Float } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

import { Group } from "three";

function PyramidScene() {
  const pyramidRef = useRef<Group>(null); 
  const [hovered, setHovered] = useState(false);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768; 
      setScale(isMobile ? 0.3 : 0.5); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  useFrame(() => {
    if (pyramidRef.current) {
      pyramidRef.current.rotation.y += 0.1; 
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <group
        ref={pyramidRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <mesh rotation={[0, 0.6, 0]} scale={scale}>
          <coneGeometry args={[2, 2, 4]} />
          <meshPhysicalMaterial
            color={hovered ? "#ffffff" : "#f0f0f0"}
            metalness={0.9}
            roughness={0.1}
            envMapIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
        <mesh rotation={[0, 0.6, 0]} scale={scale * 0.8}>
          <coneGeometry args={[2, 2, 4]} />
          <meshBasicMaterial
            color="#0088ff"
            transparent
            opacity={0.1}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        <lineSegments rotation={[0, 0.6, 0]} scale={scale}>
          <edgesGeometry args={[new THREE.ConeGeometry(2, 2, 4)]} />
          <lineBasicMaterial color="#0088ff" linewidth={2} />
        </lineSegments>
      </group>
    </Float>
  );
}

function LoadingText() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 20); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center">
      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-400 to-cyan-400"
          style={{ width: `${progress}%`, transition: "width 0.1s ease-out" }}
        />
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <div className="text-blue-400 font-light tracking-wider">
          {progress}% Complete
        </div>
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
      </div>
    </div>
  );
}

export default function LoadingPage() {
  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }} 
          gl={{ antialias: true }}
          dpr={[1, 2]}
        >
          <color attach="background" args={["#000000"]} />

          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.2}
            penumbra={1}
            intensity={1.5}
            castShadow
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          {/* Main Content */}
          <PyramidScene />

          <Stars
            radius={80}
            depth={30} 
            count={2000} 
            factor={4}
            saturation={0}
            fade
            speed={2} 
          />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={3} 
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
      <LoadingText />
    </div>
  );
}
