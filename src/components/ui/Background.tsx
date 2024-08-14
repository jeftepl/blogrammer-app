import Box from "./Box";

export default function Background() {
  const url = "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2";

  return (
    <Box
      styleSheet={{
        width: "100%",
        height: "400px",
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    />
  );
}
