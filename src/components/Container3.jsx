import '../styles/Container3.css'

export default function Container3(){
    return(
        <div className="container-three">
            <h2>Get Started</h2>
           
            <div className="register-container">

                <div className="register">
                    <p>Register</p>
                    <div className ="impcont">
                        <div className="red-color"></div>
                        <p> = </p>
                        <p>Required Information</p>
                    </div>
                </div>

                <p>To apply for jobs on this site you must register</p>

                <div className="application-form">
                <label>
                    Title
                    <div className="red-color"></div>
                    <select name="title-selection">
                        <option value="Mr.">Mr.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Master">Master</option>
                    </select>
                </label>

                <label>
                    FirstName
                    <div className="red-color"></div>
                    <input type="text"/>
                </label>

                <label>
                    Surname
                    <div className="bubble"></div>
                    <div className="red-color"></div>
                    <input type="text"/>
                </label>


                <label>
                    Preferred Name
                    <input type="text"/>
                </label>


                <label>
                    Email
                    <div className="red-color"></div>
                    <input type="text"/>
                </label>

                <label>
                    Mobile Phone
                    <input type="text"/>
                </label>


                <label>
                    <p>Do you agree to the privacy policy</p>
                    <div className="red-color"></div>
                    <select name="privacy-policy-selection">
                        <option value="None">None</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </label>


                <label>
                    <p>Attach Resume</p>
                    <div className="red-color"></div>
                    <input type="file"/>
                </label>

                <div className="grey-border"></div>

                <button className="register-button">Register</button>
              </div>
            </div>

            <div className="login-container">
                <div className="login">
                    <p>Login</p>
                    <div className="impcont">
                        <div className="red-color"></div>
                        <p> = </p>
                        <p>Required Information</p>
                    </div>
                </div>

                <p> Welcome back! Please enter your candidate reference</p>

                <div className="inp-log">
                    <input type="text"/>
                    <button className="login-button">Login</button>
                </div>
            </div>


            <div className="remainder-container">
                <div className="remainder">
                    <p>Remainder</p>
                    <div className="impcont">
                        <div className="red-color"></div>
                        <p> = </p>
                        <p>Required Information</p>
                    </div>
                </div>

                <p>Forgotten your reference? Enter your registration email for remainder</p>

                <div className="inp-rem">
                    <input type="text"/>
                    <button className="remainder-button">Remind</button>
                </div>
            </div>

            <p>Please click here to read and review our privacy policy.</p>

        </div>
    )
}