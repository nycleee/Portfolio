import '../pages/about.css';
import { motion } from 'framer-motion';
import Profile from './assets/Profile-logo.png';
import './about.css';

function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
        <div className='container'>
            <div className="column-container">
               <div className="content">
                    <div className="left-content">
                        <div className="profile-tab">
                            <img src={Profile} alt="Profile Logo" />
                        </div>  
                    </div>
                    <div className="right-content">
                        <div className="text-content">
                            <h1 style={{textAlign: 'center'}}>ABOUT THE PERSON</h1>
                                <p className='text-graph'>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the 
                                    more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of 
                                    the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
                                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, 
                                    written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
                                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                </p>
                                <div className="line-break"></div>
                        </div>  
                        <div className="button-more">
                            <button>~LEARN MORE~</button>
                        </div>
                    </div>
               </div>
            </div>
        </div>
        </motion.div>
    );
}

export default About;