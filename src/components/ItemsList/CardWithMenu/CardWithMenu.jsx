/** @jsxImportSource @emotion/react */

// import { Component } from 'react';
import { useState, useRef } from 'react';
import useOutsideClickDetector from 'hooks/useOutsideClickDetector';
import PropTypes from 'prop-types';
import { cardStyles, menuStyles } from './CardWithMenuStyles';
import { ReactComponent as DotsIcon } from 'images/dots.svg';
import editIcon from 'images/edit.svg';
import deleteIcon from 'images/delete.svg';

const CardWithMenu = ({ text, onEdit, onDelete }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cardRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(prevState => !prevState);

  useOutsideClickDetector(cardRef, toggleMenu, isMenuOpen);

  const handleEdit = () => {
    onEdit();
    toggleMenu();
  };

  const handleDelete = () => {
    onDelete();
    toggleMenu();
  };

  return (
    <div ref={cardRef} css={cardStyles}>
      <p>{text}</p>
      <button onClick={toggleMenu} aria-label="Menu">
        <DotsIcon />
      </button>

      {isMenuOpen && (
        <div css={menuStyles}>
          <div className="menu-item" onClick={handleEdit}>
            <span>
              <img src={editIcon} alt="Edit" />
            </span>
            <span>редактировать</span>
          </div>
          <div className="menu-item" onClick={handleDelete}>
            <span>
              <img src={deleteIcon} alt="Delete" />
            </span>
            <span>удалить</span>
          </div>
        </div>
      )}
    </div>
  );
};

// class CardWithMenu extends Component {
//   state = {
//     isMenuOpen: false,
//   };

//   toggleMenu = () =>
//     this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }));

//   handleEdit = () => {
//     this.props.onEdit();
//     this.toggleMenu();
//   };

//   handleDelete = () => {
//     this.props.onDelete();
//     this.toggleMenu();
//   };

//   render() {
//     const { text } = this.props;
//     const { isMenuOpen } = this.state;

//     return (
//       <div css={cardStyles}>
//         <p>{text}</p>
//         <button onClick={this.toggleMenu} aria-label="Menu">
//           <DotsIcon />
//         </button>

//         {isMenuOpen && (
//           <div css={menuStyles}>
//             <div className="menu-item" onClick={this.handleEdit}>
//               <span>
//                 <img src={editIcon} alt="Edit" />
//               </span>
//               <span>редактировать</span>
//             </div>
//             <div className="menu-item" onClick={this.handleDelete}>
//               <span>
//                 <img src={deleteIcon} alt="Delete" />
//               </span>
//               <span>удалить</span>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

CardWithMenu.propTypes = {
  text: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CardWithMenu;
