const Controls = ({ boat1, boat2, boat3 }) => {
  return (
    <div className="controls">
      <div className="record-panel">
        <button>Start</button>
        <button>Stop</button>
      </div>
      <div className="positions">
        <div className="boat-container">
          <h3>Boat 1</h3>
          <p><strong>Lat:</strong> {boat1.lat}</p>
          <p><strong>Lon:</strong> {boat1.lon}</p>
          <p><strong>Heading:</strong>{boat1.heading}</p>
        </div>

        <div className="boat-container">
          <h3>Boat 2</h3>
          <p><strong>Lat:</strong> {boat2.lat}</p>
          <p><strong>Lon:</strong> {boat2.lon}</p>
          <p><strong>Heading::</strong> {boat2.heading}</p>
        </div>

        <div className="boat-container">
          <h3>Boat 3</h3>
          <p><strong>Lat:</strong> {boat3.lat}</p>
          <p><strong>Lon:</strong> {boat3.lon}</p>
          <p><strong>Heading:</strong> {boat3.heading}</p>
        </div>
      </div>
    </div>
  );
};

export default Controls;
