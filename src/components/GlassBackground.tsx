import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

/**
 * A single flowing 3D ribbon/tube that gently animates.
 */
function Ribbon({
  curve,
  radius = 0.18,
  color = "#FFCC00",
  speed = 0.15,
  phaseOffset = 0,
}: {
  curve: THREE.CatmullRomCurve3;
  radius?: number;
  color?: string;
  speed?: number;
  phaseOffset?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);
  const basePoints = useMemo(() => curve.points.map((p) => p.clone()), [curve]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + phaseOffset;

    // Gently deform control points
    curve.points.forEach((point, i) => {
      const base = basePoints[i];
      point.x = base.x + Math.sin(t + i * 0.7) * 0.3;
      point.y = base.y + Math.cos(t * 0.8 + i * 0.5) * 0.25;
      point.z = base.z + Math.sin(t * 0.6 + i * 1.1) * 0.2;
    });

    if (meshRef.current) {
      const tubeGeo = new THREE.TubeGeometry(curve, 120, radius, 16, false);
      meshRef.current.geometry.dispose();
      meshRef.current.geometry = tubeGeo;
    }
  });

  const geometry = useMemo(
    () => new THREE.TubeGeometry(curve, 120, radius, 16, false),
    [curve, radius]
  );

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshPhysicalMaterial
        ref={materialRef}
        color={color}
        roughness={0.15}
        metalness={0.6}
        clearcoat={1}
        clearcoatRoughness={0.1}
        transmission={0.3}
        thickness={1.5}
        ior={1.5}
        envMapIntensity={1.2}
        transparent
        opacity={0.85}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/**
 * Multiple ribbons forming the abstract background.
 */
function RibbonScene() {
  const ribbons = useMemo(() => {
    return [
      // Large sweeping ribbon — top-right flowing down-left
      {
        points: [
          new THREE.Vector3(4, 3, -2),
          new THREE.Vector3(2.5, 2, -1),
          new THREE.Vector3(0.5, 1.5, 0),
          new THREE.Vector3(-1, 0.5, -1.5),
          new THREE.Vector3(-2.5, -0.5, -0.5),
          new THREE.Vector3(-4, -2, -2),
        ],
        radius: 0.22,
        speed: 0.12,
        color: "#FFCC00",
        phase: 0,
      },
      // Medium ribbon — left side flowing across
      {
        points: [
          new THREE.Vector3(-4, 2, -1),
          new THREE.Vector3(-2, 1, 0.5),
          new THREE.Vector3(0, -0.5, -1),
          new THREE.Vector3(2, -1.5, 0),
          new THREE.Vector3(3.5, -2.5, -1.5),
        ],
        radius: 0.18,
        speed: 0.18,
        color: "#FFD633",
        phase: 2,
      },
      // Thin accent ribbon — center
      {
        points: [
          new THREE.Vector3(-3, -1, 0),
          new THREE.Vector3(-1, 0.5, 1),
          new THREE.Vector3(1, 1, -0.5),
          new THREE.Vector3(3, 0, 0.5),
          new THREE.Vector3(4.5, -1, -1),
        ],
        radius: 0.12,
        speed: 0.22,
        color: "#E6B800",
        phase: 4,
      },
      // Background large ribbon — depth
      {
        points: [
          new THREE.Vector3(3, -3, -3),
          new THREE.Vector3(1, -1.5, -2),
          new THREE.Vector3(-1, 0, -2.5),
          new THREE.Vector3(-3, 1.5, -3),
          new THREE.Vector3(-4, 3, -2.5),
        ],
        radius: 0.25,
        speed: 0.1,
        color: "#CC9900",
        phase: 1,
      },
      // Small foreground accent
      {
        points: [
          new THREE.Vector3(2, 2.5, 1),
          new THREE.Vector3(0.5, 1.5, 0.5),
          new THREE.Vector3(-1, 0, 1),
          new THREE.Vector3(-2.5, -1.5, 0),
        ],
        radius: 0.1,
        speed: 0.25,
        color: "#FFE066",
        phase: 3,
      },
    ];
  }, []);

  return (
    <>
      {/* Lighting for glossy reflections */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-3, 2, 4]} intensity={0.6} color="#FFE599" />
      <pointLight position={[0, 0, 3]} intensity={0.8} color="#FFCC00" distance={12} />
      <pointLight position={[-4, -2, 2]} intensity={0.4} color="#FFD633" distance={10} />

      {ribbons.map((r, i) => (
        <Ribbon
          key={i}
          curve={new THREE.CatmullRomCurve3(r.points)}
          radius={r.radius}
          speed={r.speed}
          color={r.color}
          phaseOffset={r.phase}
        />
      ))}
    </>
  );
}

export const GlassBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Subtle radial glow behind the ribbons */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, hsl(48 100% 50% / 0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, hsl(48 100% 50% / 0.06) 0%, transparent 50%)",
        }}
      />
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <RibbonScene />
      </Canvas>
    </div>
  );
};
