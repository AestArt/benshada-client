import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import headerMenuAnimation from '../../assets/js/headerMenuAnimation.js';

class UserNav extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    list: PropTypes.array
  };

  componentDidMount = () => headerMenuAnimation();

  renderList = (list) => list.map((item, index) => {
    let active;
    let selected;

    if (index === 0) {
      active = 'active';
      selected = 'selected';
    }

    return (
        <li className="nav-item" key={`user-nav-${index}`}>
          <a
            className={`nav-link text-capitalize ${active}`}
            id={`pills-${item.Title}-tab`}
            data-toggle="pill"
            href={`#pills-${item.Title}`}
            role="tab"
            aria-controls={`pills-${item.Title}`}
            aria-selected={selected}
          >
            <FontAwesomeIcon icon={item.icon} />
            <span className="ml-2">{item.Title}</span>
          </a>
        </li>
    );
  });

  render = () => (
    <div
      className={`col-6 col-md-3 col-lg-2 position-fixed h-100 ${this.props.className} px-0 shadow-sm`}
      id="userSide"
    >
      <p className="text-center p-4">
        <Link to="/" className="no-link lead font-weight-bolder">
          benshada
        </Link>
      </p>
      <ul className={'nav nav-pills flex-column my-3 pl-4'} id="userNav" role="tablist">
        {this.renderList(this.props.list)}
        <li className="nav-item text-danger">
          <Link className="nav-link text-capitalize text-danger" to="/logout">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-3 text-danger" />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default UserNav;
