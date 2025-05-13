import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Shape = () => {
  return (
    <>
        <ambientLight intensity={.25} />
        <directionalLight position={[1, 2, 3]} />
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#90EE90"
          attach="material"
          distort={0.5}
          speed={.5}
        />
      </Sphere>      
    </>
  );
};

export default Shape;