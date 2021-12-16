import PropTypes from 'prop-types';

import './NavItem.scss';

const NavItem = ({ name, icon }) => {
  // console.log(props);
  const isActive = false;

  const navItemStyles = ['NavItem'];
  isActive && navItemStyles.push('NavItemActive');

  return (
    <div className={navItemStyles.join(' ')}>
      <span className="iconWrapper">{icon}</span>
      <a className="itemName" href="/">
        {name}
      </a>
    </div>
  );
};

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default NavItem;
