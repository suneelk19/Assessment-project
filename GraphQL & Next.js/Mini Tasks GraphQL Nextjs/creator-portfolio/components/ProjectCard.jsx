// File: components/ProjectCard.jsx
// Reusable component to display project information

export default function ProjectCard({ title, description, year }) {
  return (
    <div className="card">

      <h2>{title}</h2>

      <p>{description}</p>

      <h4>Year: {year}</h4>

    </div>
  );
}