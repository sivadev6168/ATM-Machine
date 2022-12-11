import React, { useState } from "react";
import "./AtmDisplay.css";
import AtmResult from "./AtmResult";
import Alert from "./Alert";

const AtmDisplay = () => {
  const notes = [1000, 500, 200, 100, 50, 20, 10];
  const [amount, setAmount] = useState("");
  const [amountDetail, setAmountDetail] = useState([]);
  const [alert, setAlert] = useState("");

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const buttonHandle = (event) => {
    const amountZeroCheck = amount % 10;
    amountZeroCheck !== 0 ? setAlert("incorrect") : setAlert("correct");
    event.preventDefault();
    let amounts = amount;
    let notes_detail = [];

    function getNoteCount(a, n) {
      let note = Math.floor(a / n);
      amounts = a % n;
      notes_detail.push([n, note]);
    }

    notes.forEach((note) => {
      if (amounts >= note) {
        getNoteCount(amounts, note);
      }
    });
    setAmountDetail(notes_detail);

  };
  return (
    <div className="container">
      <div className="nav-bar">ATM Counter</div>
      <div className="row">
        <div className="column">
          <div className="container-2" id="spacing">
            <div className="card">
              <div className="scroll-text">
                <h3>welcome To ATM</h3>
              </div>
              <div className="form-field">
                <input
                  value={amount}
                  min="0"
                  onChange={handleChange}
                  className="input-1"
                  id="spacing"
                  type="number"
                  name="field1"
                  placeholder="Enter Amount"
                />
                <br />
                <button
                  className="submit-btn"
                  disabled={amount.length === 0}
                  onClick={buttonHandle}
                  type="submit"
                >
                  Get Money
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="column custom-spacing">
          {alert === "incorrect" && <Alert />}
          {alert === "correct" && (
            <AtmResult amountDetails={amountDetail} total={amount} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AtmDisplay;
