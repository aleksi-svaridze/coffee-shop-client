import { useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();

  return (
    <div>
      <h2>Coffee Details #{id}</h2>
      {/* Fetch by ID */}
    </div>
  );
}
