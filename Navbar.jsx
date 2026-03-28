import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../services/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f0f0f0' }}>
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile" style={{ marginLeft: '1rem' }}>Profile</Link>
      </div>
      <div>
        <span>{user.fullName} ({user.role})</span>
        <button onClick={handleLogout} style={{ marginLeft: '1rem' }}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;