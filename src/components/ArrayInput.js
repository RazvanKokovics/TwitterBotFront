import PropTypes from 'prop-types';
import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0288d1',
    },
  },
});

const renderChips = (value, getTagProps, onDelete) => value.map((option, index) => (
  <Chip
    {...getTagProps({ index })}
    label={option}
    size="small" 
    onDelete={() => {
      onDelete(option);
      getTagProps({ index }).onDelete();
    }}
    classes={{ root: 'chip', deleteIconSmall: 'chip-icon' }}
  />
));

function ArrayInput(props) {
  const {
    values, onCreate, onDelete, placeholder,
  } = props;

  return (
    <div className="multiple-values-input">
      <Autocomplete
        multiple
        options={[]}
        value={values || []}
        freeSolo
        disableClearable
        classes={{ input: 'input-field' }}
        onInputChange={event => onCreate(event)}
        renderTags={(value, getTagProps) => renderChips(value, getTagProps, onDelete)}
        renderInput={params => (
          <MuiThemeProvider theme={theme}>
            <TextField
              {...params}
              placeholder={placeholder || 'Add value'}
            />
          </MuiThemeProvider>
        )}
      />
    </div>
  );
}

ArrayInput.propTypes = {
  values: PropTypes.array.isRequired,
  onCreate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default ArrayInput;
