import PropTypes from 'prop-types';
import React from 'react';
import { reduxForm, Field } from 'redux-form';

function AppComponent(props) {
  const {
    fields: {
      useKeyPhrases
    },
    onCompositionChange,
  } = props;

  return (
    <div className="selector-settings">
      <div className="selector-composition">
        <Field {...useKeyPhrases} onChange={onCompositionChange} />
      </div>
    </div>
  );
}

AppComponent.propTypes = {
  fields: PropTypes.shape({
    useKeyPhrases: PropTypes.object.isRequired,
  }).isRequired,
  onCompositionChange: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'main_form',
  enableReinitialize: true,
  keepDirtyOnReinitialize: false,
})(AppComponent);
