function Form(){
    return (
        <div className="form">
            <div className="formdata">
                <p> 
                    Before you go, please leave your contact details so we can get back to you... 
                </p>
                <input placeholder="*Your Name" />
                <input placeholder="*Your Email" />
                <div>
                    <input type="checkbox" className="check" id="check" name="check"/>
                    <label for="check"> * [Sample legal text] The personal data you have provided will be processed by XXXXX for purposes of providing you the service. The legal basis of the processing is XXXXX. Your data will not be transferred nor assigned to third parties. You can exercise your right to access, rectify and delete your data, as well as the other rights granted by law by sending an email to XXXXX. For further information, please check our privacy policy XXXXX. </label> 
                </div>
                <button> Send Your Answer &rarr; </button>
            </div>
        </div>
    );
}

export default Form;