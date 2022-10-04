import formStyles from '../styles/Form.module.css'
import Link from 'next/link'
const Nav = () => {
  return (
    <nav className={formStyles.nav}>
      <ul>
        <li>
            <Link href='/'>Home</Link>
        </li>
        <li>
            <Link href='/incident'>Incidents</Link>
        </li>
        <li>
            <Link href='/ticket'>Tickets</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
