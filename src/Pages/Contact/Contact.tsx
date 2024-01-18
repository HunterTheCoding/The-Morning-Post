import { Helmet } from "react-helmet-async";
import ContactFrom from "../../Components/Contact/ContactForm";

import GoogleMap from "../../Components/Contact/GoogleMap";




const Contact = () => {
    return (
        <div className="pt-24">
  
            <ContactFrom></ContactFrom>
            <div className='w-full'>
    <GoogleMap></GoogleMap>
</div>
 </div>
    );
};

export default Contact;