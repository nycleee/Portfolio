import '../pages/contacts.css';
import { motion } from 'framer-motion';
function Contacts() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
        <div>
            <h1>Contacts</h1>
        </div>
        </motion.div>
    );
}

export default Contacts;