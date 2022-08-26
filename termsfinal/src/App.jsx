import React, { useState } from 'react';

import './App.css';

const App = () => {
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  }

  // When the button is clicked
  const btnHandler = () => {
    alert('The buttion is clickable!');
  };

  return (<div>
    <head>
    <meta charset="utf-8"/>
    <link rel="stylesheet" href="App.css"/>
  </head>
  <body>
  <div class="overflow-auto">
      <h2><strong>TERMS AND CONDITIONS</strong></h2>
      <html>
          <head>
              <title>CodeAmaze.com Text To HTML Converter</title>
          </head>
          <body>
              <p>This Equipment Rental Agreement (the “Agreement”) is made and entered on DATE (the “Effective Date”) by and between     (the “Lessor”) legally conducting business within the State of STATE; and ]   ​ (the “Lessee”); collectively referred to herein as the “Parties.”</p>

      <strong>1. EQUIPMENT SUBJECT TO LEASE.</strong>
    <p>The Lessor shall rent the equipment listed herein to the Lessee whom must adhere to the terms and conditions within this Agreement.
      DESCRIPTION OF EQUIPMENT TO BE LEASED

    </p>

     <strong> 2. PAYMENT TERMS.</strong>
     <p>he rental fee is based on a rate of WRITTEN DOLLAR AMOUNT dollars ($NUMERICAL DOLLAR AMOUNT) per day, plus any additional fees incurred.  Additional charges shall be added in the event the equipment is damaged, missing any parts, or returned later than DATE AND TIME.  All charges shall commence from the Effective Date of this Agreement.  Lessee shall pay to the Lessor an additional service charge of WRITTEN DOLLAR AMOUNT dollars ($NUMERICAL DOLLAR AMOUNT) per day for each day the equipment has not been returned, in addition to the daily rental fee.  Lessor shall invoice the client on a TIME PERIOD basis and all invoices are due upon receipt.</p>  

      <strong>3. RETURNED CHECKS.</strong>
      <p>The Lessee shall be charged WRITTEN DOLLAR AMOUNT dollars ($NUMERICAL DOLLAR AMOUNT) for each check that is returned to the Lessor for insufficient funds.</p>

      <strong>4. SECURITY DEPOSIT. </strong>
      <p>In addition to the rental fee, the Lessee shall pay a security deposit of WRITTEN DOLLAR AMOUNT dollars ($NUMERICAL DOLLAR AMOUNT) prior to receiving any equipment and at the time this Agreement is signed.  This deposit shall be returned to the Lessee upon termination of this Agreement, subject to the option of the Lessor to apply it against any charges or damages incurred.  Any amounts refundable to the Lessee shall be paid at the time this Equipment Rental Agreement is terminated.  The security deposit shall bear interest at an annual rate of PERCENTAGE RATE% from the date paid to the Lessor until the date refunded, based on the total amount of the security deposit.</p>

      <strong>5. LEASE TERM.</strong>
      <p>This Equipment Rental Agreement shall begin on the above Effective Date and shall terminate on DATE, unless otherwise terminated in a manner consistent within these terms.  At the end of the Lease term, the Lessee shall be obligated to return the equipment to the Lessor at the Lessee’s expense.</p>

      <strong>6. LOCATION.</strong>
      <p>The equipment shall be located at CUSTOMER ADDRESS during the term of this Agreement, and shall not be removed from that location without the Lessor’s prior written consent.</p>
     <strong> 7. CARE AND OPERATION.</strong>
     <p>The equipment may only be used and operated in a careful and proper manner.  Its use must comply with all laws, ordinances, and regulations relating to the possession, use, or maintenance of the equipment, including registration and/or licensing requirements, if any.
</p>
<strong>8. INSURANCE.</strong> 
<p>The Lessee shall insure the equipment in an amount of at least WRITTEN DOLLAR AMOUNT dollars ($NUMERICAL DOLLAR AMOUNT).
</p>
<strong>9. TAXES & FEES.</strong> 
<p>During the term of this Equipment Rental Agreement,  the Lessee shall pay all applicable taxes, assessments, and license and registration fees on the equipment.
</p>
<strong>10. ALTERATIONS.</strong> 
<p>Lessee shall make no alterations to the equipment without prior written consent of the Lessor.  All alterations shall be property of the Lessor and subject to the term within.  Lessor shall have the right to inspect the equipment during Lessee’s normal business hours upon request.</p>

<strong>11. MAINTENANCE AND REPAIR.</strong> 
<p>The Lessee shall maintain at the Lessee’s cost, the equipment in good repair and operating condition, allowing for reasonable wear and tear.  Such costs shall include labor, material, parts, and similar items.</p>

<strong>12. OPTION TO RENEW.</strong> 
<p>If the Lessee is not in default upon the expiration of this lease, the Lessee shall the option to renew this Lease for a similar term on such terms as the Parties agree upon.</p>

<strong>13. DEFAULT.</strong> 
<p>The occurrence of any of the following shall constitute a default under this Agreement:

a. The failure to make a required payment under this Agreement when due.

b. The violation of any other provision or requirement that is not corrected within TIME FRAME day(s) after written notice of the violation is given.

c. The insolvency or bankruptcy of the Lessee.</p>
<strong>14. LIMITATION OF LIABILITY.</strong>
<p>TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, LESSOR SHALL NOT BE LIABLE TO LESSEE, AND LESSEE COVENANTS THAT IT SHALL NOT ASSERT A CLAIM AGAINST LESSOR, UNDER ANY LEGAL THEORY, WHETHER IN AN ACTION BASED ON A CONTRACT, NEGLIGENCE, TORT, STRICT LIABILITY, OR OTHERWISE PROVIDED BY STATUTE OR LAW, (i) FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY, CONSEQUENTIAL, OR STATUTORY DAMAGES, OR ANY DAMAGES RESULTING FROM LOST PROFITS, INTERRUPTION OF BUSINESS, OR LOSS OF GOODWILL, EVEN IF LESSOR HAD BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, OR (ii) FOR DAMAGES RELATED TO OR ARISING OUT OF THIS AGREEMENT IN AN AMOUNT THAT EXCEEDS THE FEES ACTUALLY PAID BY LESSOR UNDER THIS AGREEMENT.  LESSEE HEREBY WAIVES ANY CLAIM THAT THESE EXCLUSIONS DEPRIVE IT OF AN ADEQUATE REMEDY OR CAUSE THIS AGREEMENT TO FAIL OF ITS ESSENTIAL PURPOSE.  PARTIES, HEREBY ACKNOWLEDGE AND AGREE THAT ANY WARRANTY DISCLAIMERS AND LIMITATION OF LIABILITY PROVISIONS SET FORTH ABOVE HAVE BEEN NEGOTIATED AND ARE FUNDAMENTAL ELEMENTS OF BASIS OF THIS AGREEMENT.
</p>
<strong>15. DISPUTE RESOLUTION.</strong> 
<p>This Agreement and any dispute relating to this Agreement shall be governed by and interpreted in accordance within the law and Parties irrevocably agree that the courts within the State of STATE shall have exclusive jurisdiction to settle any dispute which may arise out of, under, or in connection with the Agreement, regardless of individual party location.  Parties irrevocably submit to the exclusive jurisdiction of the federal and state courts located within the State of STATE.</p>

<strong>16. INDEMNITY.</strong> 
<p>Lessee agrees to indemnify and hold Lessor, its subsidiaries, affiliates, and respective officers, agents, partners and employees, harmless from any loss, liability, demand, claim or legal proceedings brought or threatened, including expenses suffered or incurred arising out of Lessee use of the equipment, the functionality of the equipment, or any violation of this Agreement.
</p>
<strong>17. SEVERABILITY.</strong> 
<p>In the event, that any portion of this Agreement is held to be unenforceable, the unenforceable portion shall be amended to reflect, to the greatest extent permitted under applicable law, the original intent of the Parties, and the remainder of the provisions shall remain in full force and effect.</p>
<strong>18. WAIVER.</strong>
<p> Either party’s failure to insist upon strict performance of any provision of this Agreement shall not be construed as a waiver of that or any other of its rights hereunder at any later date or time.</p> 

<strong>19. FORCE MAJEURE.</strong> 
<p>With the exception of any payment obligations, neither Party shall be liable for failing to perform its obligations hereunder (other than payment obligations) were delayed or hindered by war, riots, embargoes, strikes or acts of its vendors or suppliers, accidents, acts of God, or any other event beyond its reasonable control.</p>

<strong>20. SURVIVAL</strong> 
<p>All terms and provisions of this Agreement that should by their nature survive the termination shall so survive.
</p>
<strong>21. ENTIRE AGREEMENT.</strong> 
<p>This Agreement, including any exhibits attached hereto and made part hereof, constitutes the entire agreement between Lessor and Lessee with respect of the subject matter hereof.  This Agreement supersedes any prior agreements, representations, or dealings between the Parties.</p>

<p>
  IN WITNESS WHEREOF, the Parties hereto have executed this Equipment Rental Agreement by a duly authorized representative effective as of the date set forth at the top of this Agreement.
  </p>
</body>

      </html>

  </div>


  </body>
    


  
    <div className="App">
      <div className="container">
        <div>
          <input type="checkbox" id="agree" onChange={checkboxHandler} />
          <label htmlFor="agree"> I agree to <b>terms and conditions</b></label>
        </div>

        {/* Don't miss the exclamation mark* */}
        <button disabled={!agree} className="btn" onClick={btnHandler}>
          Continue
        </button>
      </div>
    </div>
    </div>
  );
};

export default App;