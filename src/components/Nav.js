import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ setLibraryStatus, libraryStatus }) => {
    return (
        <nav>
            <h1>Techill</h1>

            {/* setting the library status to opposite of the current library status*/}
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                <FontAwesomeIcon icon={faMusic} /> Library
            </button>
        </nav>
    );
};

export default Nav;