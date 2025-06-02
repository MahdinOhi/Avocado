import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        if (onSearch) {
            onSearch(e.target.value);
        }
    };

    return (
        <div style={{ marginBottom: '2.25rem', width: '50%', position: 'relative', marginLeft: 'auto', marginRight: 'auto', marginTop:'12px' }}>
            <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'gray' }}>
                <SearchIcon />
            </div>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search through your notes, tasks, and projects"
                style={{
                    width: '100%',
                    padding: '0.75rem 0.5rem 0.75rem 40px', // left padding makes space for the icon
                    borderRadius: '12px',
                    border: '3px solid black',
                    fontSize: '0.875rem',
                    outline: 'none',
                    backgroundColor: 'white'
                }}
            />
        </div>
    );
};

export default Searchbar;
