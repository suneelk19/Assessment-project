interface Props {
  title: string;
  url: string;
}

export default function ProjectCard({ title, url }: Props) {
  const isValidUrl = (link: string) => {
    try {
      new URL(link);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="card">
      <h3>{title}</h3>

      {isValidUrl(url) ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {url}
        </a>
      ) : (
        <p>Invalid URL</p>
      )}
    </div>
  );
}