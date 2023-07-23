import Image from "next/image";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Image alt="lojiper" src="/Logo.svg" width={500} height={150} />
    </div>
  );
}
