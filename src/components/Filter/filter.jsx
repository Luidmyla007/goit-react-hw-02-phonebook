import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"       
          value={value}
          onChange={onChange}          
        />
      </label>
    </div>
  );
};


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;