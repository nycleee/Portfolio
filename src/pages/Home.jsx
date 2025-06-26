import '../pages/home.css'; 
import Logo from './assets/Portfolio-logo.png';
import { motion } from 'framer-motion';

function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="main-container">
                <div className="logo-drop">
                    <img src={Logo} alt="Portfolio Logo" />
                </div>
            </div>
        </motion.div>
    );
}

export default Home;
