import React from 'react'
import './eligibility.css'
const Eligibility = () => {
    return (
        <React.Fragment>
                <h2 id="heading"> Blood Donors Eligibility </h2>
                <div class="container">
                    <p id="head2"> You should not be suffering from any of the following diseases or taking medicines for them</p>
                    <ul>
                        <li> Hepatitis B,C </li>
                        <li>AIDS # Diabetes (are you under medication currently?) </li>
                        <li> Fits/ Convulsions (are you under medication currently?)</li>
                        <li> Cancer # Leprosy or any other infectious diseases</li>
                        <li> Any allergies (Only if you are suffering from severe symptoms)</li>
                        <li> Hemophilia/ Bleeding problems</li>
                        <li> Kidney disease </li>
                        <li> Heart disease</li>
                        <li>Hormonal disorders</li>
                        <li>Any other type of Jaundice (within 5 years)</li>
                        <li>Chicken Pox (within 1 year)</li>
                        <li>Tuberculosis (within 2 years)</li>
                        <li>Malaria (within 1 year)</li>
                        <li> Organ Transplant (within one year)</li>
                        <li>Blood Transfusion (within the last 6 months)</li>
                        <li>Pregnancy (within the last 6 months)</li>
                        <li>Blood Donation (within the last 3 months)</li>
                        <li> Major Surgery (within the last 3 months)</li>
                        <li>Hemoglobin deficiency / Anemia (recently)</li>
                        <li>Drastic weight loss (recently)</li>
                    </ul>
                    <iframe width="50%" height="315" id="eligibityvedio" src="https://www.youtube.com/embed/SN9NH7mUbls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
        </React.Fragment>
    )
}

export default Eligibility ;