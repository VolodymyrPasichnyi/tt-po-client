/* eslint-disable react/prop-types */
function ResponseDisplay({ responseData }) {
    return (
      <div>
        {responseData && responseData.length > 0 && (
          <div>
            <h2>Response Data</h2>
            {responseData.map((item, index) => (
              <div key={index}>
                <h3>Max Number: <p>{JSON.stringify(item.max_number)}</p></h3>
                <h3>Min Number: <p>{JSON.stringify(item.min_number)}</p></h3>
                <h3>Median Number: <p>{JSON.stringify(item.median_number)}</p></h3>
                <h3>Average Number: <p>{JSON.stringify(item.average_number)}</p></h3>
                <h3>Increasing Numbers: <p>{JSON.stringify(item.increasing_numbers)}</p></h3>
                <h3>Decreasing Numbers: <p>{JSON.stringify(item.decreasing_numbers)}</p></h3>
              </div>
            ))}

          </div>
        )}
      </div>
    );
  }
  
  export default ResponseDisplay;