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

                    <div className="application-details">

                        <div className="labels-all">
                        <label>
                            Title
                        </label>
                        <label>
                            FirstName
                        </label>
                        <label>
                            Surname
                            <div className="bubble"></div>
                        </label>
                        <label>
                            Preferred Name
                        </label>
                        <label>
                            Email
                        </label>
                        <label>
                            Mobile phone
                        </label>
                        <label>
                            <p>Do you agree to the privacy policy</p>
                        </label>
                        <label>
                            <p> Attach Resume</p>
                         </label>
                    </div>

                    <div className='label-details'>


                    <div className="label-one right-details">

                    <div className="red-color-imp"></div>
                    <select name="title-selection">
                        <option value="Mr.">Mr.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Master">Master</option>
                    </select>

                    </div>

                    <div className='label-two right-details'>
                    <div className="red-color-imp"></div>
                    <input type="text"/>
                    </div>
            

               

                     <div className='label-three right-details'>
                    <div className="red-color-imp"></div>
                    <input type="text"/>
                     </div>
                    
                


                    <div className='label-four right-details'>
                        <input type="text"/>
                    </div>
                    
                


                     <div className='label-five right-details'>
                    <div className="red-color-imp"></div>
                    <input type="text"/>
                     </div>
                    
                    <div className='label-six right-details'>
                        <input type="text"/>
                    </div>
                    
               
                    <div className='label-seven right-details'>
                    <div className="red-color-imp"></div>
                    <select name="privacy-policy-selection">
                        <option value="None">None</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    </div>

                    

                       
                     <div className='label-eight right-details'>
                    <div className="red-color-imp"></div>
                    <input type="file"/>
                     </div>


                    </div>

                    
                    </div>


                    


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

            <p>Please click 
                <span>
                    <a href='https://www.solifi.com/trust-center/privacy-policy/'> here</a>
                    </span> to read and review our privacy policy.</p>

        </div>
    )
}