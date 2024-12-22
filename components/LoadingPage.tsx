import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function LoadingPyramid() {
  return (
    <mesh rotation={[0, 0.6, 0]}>
      <coneGeometry args={[2, 2, 4]} />
      <meshStandardMaterial color="white" />
      <lineSegments>
        <coneGeometry args={[2, 2, 4]} />
        <lineBasicMaterial color="black" />
      </lineSegments>
    </mesh>
  );
}

export default function LoadingPage() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-black"
      style={{ visibility: "visible", opacity: 1 }} 
    >
      <div className="w-[150px] h-[150px]">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} />
          <LoadingPyramid />
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={29} 
          />
        </Canvas>
      </div>
      <p
        className="mt-8 text-lg text-white tracking-wider animate-pulse"
        style={{ visibility: "visible", opacity: 1 }} 
      >
        Carregando...
      </p>
    </div>
  );
}
