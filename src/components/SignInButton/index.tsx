import styles from './styles.module.scss';
import { FaGithub} from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export function SignInButton() {

    const isUserLoggeIn = true;

    return isUserLoggeIn ? (
        <button className={styles.singInButton} type="button">
            <FaGithub color='#04d361'/>
            Emanuel Moura
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button className={styles.singInButton} type="button">
            <FaGithub color='#eba417'/>
            Sign in with Github
        </button>
    );
}