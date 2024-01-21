import React, { useState } from "react";
import "./feecalculator.css";

const TimeAndPriceCalculator = () => {
  const [time1, setTime1] = useState("");
  const [time2, setTime2] = useState("");
  const [timeDifference, setTimeDifference] = useState(null);
  const [pricePerMinute, setPricePerMinute] = useState(50 / 30);
  const [totalPrice, setTotalPrice] = useState(null);
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [disabled,setDisabled] = useState(false);

  const resetForm =(event)=>{
    event.preventDefault();
    setTime1("");
    setTime2("");
    setTimeDifference(null);
    setDisabled(false);
  }
  const calculateTimeAndPriceDifference = () => {
    const parsedTime1 = Date.parse(`01/01/2000 ${time1}`);
    const parsedTime2 = Date.parse(`01/01/2000 ${time2}`);

    if (
      !isNaN(parsedTime1) &&
      !isNaN(parsedTime2) &&
      time1 < time2
    ) {
      const differenceInMillis = Math.abs(parsedTime2 - parsedTime1);
      const minutes = Math.floor(differenceInMillis / (1000 * 60));

      const calculatedPrice = minutes * pricePerMinute * numberOfPersons;

      setTimeDifference(`${minutes} minutes`);
      setTotalPrice(` Rs. ${Math.round(calculatedPrice*10)/10}`);
      setDisabled(true);
    } else {
      setTimeDifference(null);
      setTotalPrice(null);
      window.alert('Inavlid Entry and Exit Time !')
    }
  };

  return (
    <div id="feeCalculator">
      <h3>Calculate Price</h3>
      <form>
        <label>
          Entry Time: &nbsp;
          <input
            type="time"
            value={time1}
            onChange={(e) => setTime1(e.target.value)}
            required
          />
        </label>

        <label>
          Exit Time: &nbsp;
          <input
            type="time"
            value={time2}
            onChange={(e) => setTime2(e.target.value)}
            required
          />
        </label>

        <label>
          Number of Persons: &nbsp;
          <input
            type="number"
            value={numberOfPersons}
            onChange={(e) => setNumberOfPersons(e.target.value)}
            min="1" max="50"
            required
            id="noOfPersons"
            disabled={disabled}
          />
        </label>
      <div className="btns">
        <button onClick={calculateTimeAndPriceDifference} disabled={disabled}>
          Calculate Price
        </button>
        <button onClick={resetForm}>
          Reset
        </button></div>
      </form>
      {timeDifference !== null && totalPrice !== null && (
        <div className="result">
          <div>
            <p className="result-title">Time of Play:</p>
            <p className="result-op">{timeDifference}</p>
          </div>
          <div>
            <p className="result-title">
              Total Price for {numberOfPersons} persons:
            </p>
            <p className="result-op">{totalPrice}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeAndPriceCalculator;
