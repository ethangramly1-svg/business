"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/* ---------- Path stones (static) ---------- */
function PathStones() {
  const stones = useMemo(() => {
    const pts: { x: number; z: number; r: number }[] = [];
    for (let t = 0; t <= 1.0001; t += 0.06) {
      pts.push({
        x: -8 + t * 16,
        z: Math.sin(t * Math.PI * 1.5) * 3,
        r: Math.random() * 0.5,
      });
    }
    return pts;
  }, []);

  return (
    <>
      {stones.map((s, i) => (
        <mesh key={i} position={[s.x, 0.08, s.z]} rotation={[0, s.r, 0]} receiveShadow>
          <boxGeometry args={[0.55, 0.15, 0.55]} />
          <meshStandardMaterial color="#fde68a" roughness={0.8} />
        </mesh>
      ))}
    </>
  );
}

/* ---------- Lesson node ---------- */
type NodeState = "complete" | "active" | "locked";
function LessonNode({
  position,
  state,
  groupRef,
}: {
  position: [number, number, number];
  state: NodeState;
  groupRef?: React.Ref<THREE.Group>;
}) {
  const platColor = state === "locked" ? "#d1d5db" : "#22c55e";
  return (
    <group position={position} ref={groupRef}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.7, 0.7, 0.2, 24]} />
        <meshStandardMaterial color={platColor} roughness={0.6} />
      </mesh>
      {state === "complete" ? (
        <mesh position={[0, 0.55, 0]} castShadow>
          <sphereGeometry args={[0.38, 24, 24]} />
          <meshStandardMaterial color="#16a34a" roughness={0.5} />
        </mesh>
      ) : null}
      {state === "active" ? (
        <mesh position={[0, 0.65, 0]} castShadow>
          <octahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial color="#fbbf24" roughness={0.4} emissive="#f59e0b" emissiveIntensity={0.2} />
        </mesh>
      ) : null}
      {state === "locked" ? (
        <mesh position={[0, 0.55, 0]}>
          <boxGeometry args={[0.35, 0.45, 0.25]} />
          <meshStandardMaterial color="#9ca3af" roughness={0.7} />
        </mesh>
      ) : null}
    </group>
  );
}

/* ---------- Tree ---------- */
function Tree({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.3 * scale, 0]}>
        <cylinderGeometry args={[0.1, 0.15, 0.6 * scale, 8]} />
        <meshStandardMaterial color="#78350f" roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.1 * scale, 0]} castShadow>
        <coneGeometry args={[0.55 * scale, 1.2 * scale, 8]} />
        <meshStandardMaterial color="#16a34a" roughness={0.7} />
      </mesh>
    </group>
  );
}

/* ---------- Scene ---------- */
const NODES: { pos: [number, number, number]; state: NodeState }[] = [
  { pos: [-6, 0.1, 1.5], state: "complete" },
  { pos: [-3, 0.1, -1.5], state: "complete" },
  { pos: [0.5, 0.1, 2], state: "active" },
  { pos: [4, 0.1, -1], state: "locked" },
  { pos: [7, 0.1, 1.5], state: "locked" },
];
const TREES: { pos: [number, number, number]; s: number }[] = [
  { pos: [-10, 0, -2], s: 1.2 },
  { pos: [-9, 0, 3], s: 0.9 },
  { pos: [9, 0, 2], s: 1.1 },
  { pos: [10, 0, -3], s: 0.8 },
  { pos: [-5, 0, 4], s: 0.75 },
  { pos: [5, 0, 4], s: 1.0 },
  { pos: [6, 0, -4], s: 0.85 },
  { pos: [-7, 0, -4], s: 1.0 },
  { pos: [2, 0, -4.5], s: 0.7 },
];
const GEMS: [number, number, number][] = [
  [-4.5, 0.8, 0.5],
  [1.5, 2.5, 2],
  [3, -0.5, 1.5],
];
const COINS: [number, number, number][] = [
  [-6, 0.5, -0.5],
  [-2.5, 0.8, -2],
  [0, 0.6, -1],
];

function Scene({ reducedMotion }: { reducedMotion: boolean }) {
  const gemRefs = useRef<(THREE.Mesh | null)[]>([]);
  const coinRefs = useRef<(THREE.Mesh | null)[]>([]);
  const activeNode = useRef<THREE.Group>(null);
  const flame = useRef<THREE.Group>(null);
  const house = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cam = state.camera;

    if (!reducedMotion) {
      cam.position.x = Math.sin(t * 0.12) * 5.6;
      cam.position.z = Math.cos(t * 0.12) * 12.6 + 2;
      cam.position.y = 6 + Math.sin(t * 0.3) * 0.3;
    } else {
      cam.position.set(2.2, 6.2, 13.4);
    }
    cam.lookAt(0, 0.5, 0);

    gemRefs.current.forEach((g, i) => {
      if (!g) return;
      g.position.y = GEMS[i][1] + Math.sin(t * 1.5 + i * 2) * 0.18;
      g.rotation.y += 0.04;
    });
    coinRefs.current.forEach((c, i) => {
      if (!c) return;
      c.rotation.y += 0.06;
      c.position.y = COINS[i][1] + Math.sin(t * 2 + i * 1.5) * 0.1;
    });
    if (activeNode.current) {
      const s = 1 + Math.sin(t * 3) * 0.06;
      activeNode.current.scale.setScalar(s);
    }
    if (flame.current) {
      flame.current.scale.y = 1 + Math.sin(t * 6) * 0.08;
      flame.current.scale.x = 1 - Math.sin(t * 5) * 0.04;
      flame.current.rotation.y += 0.02;
    }
    if (house.current) {
      house.current.position.y = Math.sin(t * 0.8) * 0.04;
    }
  });

  return (
    <>
      <ambientLight intensity={1.6} />
      <directionalLight
        position={[8, 14, 6]}
        intensity={2.4}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={40}
        shadow-camera-left={-14}
        shadow-camera-right={14}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.001}
      />
      <directionalLight position={[-6, 4, -4]} intensity={0.6} color="#d1fae5" />

      {/* Island */}
      <mesh position={[0, -0.3, 0]} receiveShadow>
        <cylinderGeometry args={[12, 11, 0.6, 48]} />
        <meshStandardMaterial color="#86efac" roughness={0.85} />
      </mesh>
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[11, 10.5, 0.5, 48]} />
        <meshStandardMaterial color="#a16207" roughness={0.95} />
      </mesh>

      <PathStones />

      {NODES.map((n, i) => (
        <LessonNode
          key={i}
          position={n.pos}
          state={n.state}
          groupRef={n.state === "active" ? activeNode : undefined}
        />
      ))}

      {TREES.map((tr, i) => (
        <Tree key={i} position={tr.pos} scale={tr.s} />
      ))}

      {/* XP gems */}
      {GEMS.map((g, i) => (
        <mesh
          key={`gem-${i}`}
          ref={(el) => {
            gemRefs.current[i] = el;
          }}
          position={g}
          castShadow
        >
          <octahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial color="#8b5cf6" roughness={0.3} emissive="#7c3aed" emissiveIntensity={0.25} />
        </mesh>
      ))}

      {/* Coins */}
      {COINS.map((c, i) => (
        <mesh
          key={`coin-${i}`}
          ref={(el) => {
            coinRefs.current[i] = el;
          }}
          position={c}
          rotation={[Math.PI * 0.1, 0, 0]}
        >
          <cylinderGeometry args={[0.2, 0.2, 0.06, 20]} />
          <meshStandardMaterial color="#fbbf24" roughness={0.4} metalness={0.3} />
        </mesh>
      ))}

      {/* Streak flame above the active node */}
      <group ref={flame} position={[0.5, 1.3, 2]}>
        <mesh position={[0, 0.28, 0]}>
          <sphereGeometry args={[0.18, 12, 12]} />
          <meshStandardMaterial color="#f97316" emissive="#ea580c" emissiveIntensity={0.5} roughness={0.4} />
        </mesh>
        <mesh position={[0, 0.46, 0]}>
          <sphereGeometry args={[0.14, 12, 12]} />
          <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.4} roughness={0.4} />
        </mesh>
        <mesh position={[0, 0.6, 0]}>
          <sphereGeometry args={[0.08, 10, 10]} />
          <meshStandardMaterial color="#fef3c7" emissive="#fde68a" emissiveIntensity={0.3} />
        </mesh>
      </group>

      {/* House goal */}
      <group ref={house} position={[7.5, 0, 1.5]} scale={0.85}>
        <mesh position={[0, 0.7, 0]} castShadow>
          <boxGeometry args={[1.8, 1.4, 1.6]} />
          <meshStandardMaterial color="#dcfce7" roughness={0.7} />
        </mesh>
        <mesh position={[0, 1.85, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
          <coneGeometry args={[1.4, 0.9, 4]} />
          <meshStandardMaterial color="#16a34a" roughness={0.6} />
        </mesh>
        <mesh position={[0, 0.3, 0.83]}>
          <boxGeometry args={[0.35, 0.6, 0.05]} />
          <meshStandardMaterial color="#052e16" roughness={0.6} />
        </mesh>
      </group>
    </>
  );
}

export function IslandScene({ reducedMotion = false }: { reducedMotion?: boolean }) {
  return (
    <Canvas
      className="absolute inset-0"
      shadows
      dpr={[1, 2]}
      frameloop={reducedMotion ? "demand" : "always"}
      camera={{ position: [0, 6, 14], fov: 55, near: 0.1, far: 100 }}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ scene }) => {
        scene.fog = new THREE.Fog(0xecfdf5, 18, 36);
      }}
    >
      <Scene reducedMotion={reducedMotion} />
    </Canvas>
  );
}
