function EventListners() {
  const handleMouseEnter = () => {
    console.log("Mouse entered!");
  };

  const handleMouseLeave = () => {
    console.log("Mouse left!");
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      Hover over me!
    </div>
  );
}

export default EventListners