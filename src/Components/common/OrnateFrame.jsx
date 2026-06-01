/**
 * A gilded glass panel with corner flourishes — the workhorse container
 * for cards and sections across the realm.
 */
export default function OrnateFrame({ children, className = "", hover = false, as: Tag = "div", ...rest }) {
  return (
    <Tag
      className={`gilded gilded-corners ${hover ? "lift" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
