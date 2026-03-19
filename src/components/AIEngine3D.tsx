import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera, OrbitControls, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const points = useRef<THREE.Points>(null);
  
  // Create random points
  const count = 1000;
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y += 0.001;
      points.current.rotation.x += 0.0005;
    }
  });

  return (
    <Points ref={points} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#FF5000"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
};

const AnimatedSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      // Mouse reactivity
      const { x, y } = state.mouse;
      sphereRef.current.rotation.x = THREE.MathUtils.lerp(sphereRef.current.rotation.x, y * 0.5, 0.1);
      sphereRef.current.rotation.y = THREE.MathUtils.lerp(sphereRef.current.rotation.y, x * 0.5, 0.1);
      
      // Continuous rotation
      sphereRef.current.rotation.z += 0.002;
    }
    
    if (materialRef.current) {
      // Pulse effect
      materialRef.current.distort = THREE.MathUtils.lerp(materialRef.current.distort, 0.4 + Math.sin(state.clock.elapsedTime) * 0.1, 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={sphereRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#FF5000"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Rings = () => {
  const ringsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.z += 0.002;
      ringsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={ringsRef}>
      {[1.5, 2, 2.5].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[radius, radius + 0.02, 64]} />
          <meshBasicMaterial color="#000000" transparent opacity={0.1} side={THREE.DoubleSide} />
        </mesh>
      ))}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3, 3.01, 64]} />
        <meshBasicMaterial color="#FF5000" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export const AIEngine3D = () => {
  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[600px] relative">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FF5000" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#000000" />
        
        <AnimatedSphere />
        <Rings />
        <ParticleField />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      
      {/* Overlay labels to match the original design */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="absolute top-[20%] right-[20%] bg-primary px-3 py-1 shadow-xl rounded-sm">
          <span className="text-[8px] font-black text-white uppercase tracking-widest">VOICE</span>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <span className="text-[9px] font-black text-ink-muted/30 uppercase tracking-[0.4em] whitespace-nowrap">
            AI OPTIMIZATION ENGINE
          </span>
        </div>
        {/* Additional decorative lines */}
        <div className="absolute top-1/2 left-0 w-24 h-[1px] bg-black/5" />
        <div className="absolute top-1/2 right-0 w-24 h-[1px] bg-black/5" />
      </div>
    </div>
  );
};
