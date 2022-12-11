import React from "react";
import "./AtmResult.css";

const AtmResult = (props) => {
  const NotesDetails = props.amountDetails;
  const TotalAmount = props.total;
  return (
    <div id="invoice-POS">
      <center id="top">
        <div className="logo"></div>
        <div className="info">
          <h2>BankName</h2>
        </div>
      </center>

      <div id="mid">
        <div className="info">
          <h2>Amount Reciept</h2>
        </div>
      </div>

      <div id="bot">
        <div id="table">
          <table>
            <thead>
              <tr className="tabletitle">
                <th className="item">
                  <h2>Rupees</h2>
                </th>
                <th className="Rate">
                  <h2>Number of Notes</h2>
                </th>
                <th className="Rate">
                  <h2>total</h2>
                </th>
              </tr>

              {NotesDetails.map((values, index) => (
                <tr key={index} className="tablevalues">
                  <td className="tableitem">
                    <p className="itemtext">{values[0]}</p>
                  </td>
                  <td className="tableitem">
                    <p className="itemtext">{values[1]}</p>
                  </td>
                  <td className="tableitem">
                    <p className="itemtext">{values[0] * values[1]}</p>
                  </td>
                </tr>
              ))}

              <tr className="tabletitle">
                <td className="Rate">
                  <h2>Total Amount</h2>
                </td>
                <td></td>
                <td className="payment">
                  <h2>{TotalAmount}</h2>
                </td>
              </tr>
            </thead>
          </table>
        </div>

        <div id="legalcopy">
          <p className="legal">
            <strong>Thank you for using ATM!</strong>
          </p>
          <p>Sorry for the inconvenience ATM machines cannot store coins.</p>
        </div>
      </div>
    </div>
  );
};

export default AtmResult;
