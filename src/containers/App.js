import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import { connect } from 'react-redux';

//import { getConfig, updateConfig } from 'actions';
import AppComponent from '../components/App';

const fields = {
  useKeyPhrases: {
    name: 'usekeyphrases',
    text: 'Key phrases:',
    component: Switch,
  },
};

const forbiddenNames = {
  class: 'forbiddenClassSubstrings',
  attribute: 'forbiddenAttributeSubstrings',
  id: 'forbiddenIdSubstrings',
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleKeyDown(event, nameFor) {
    const {
      putProjectSettings,
      projectId,
      settings,
    } = this.props;

    if (event.key === 'Enter') {
      const exceptionFieldName = forbiddenNames[nameFor];

      putProjectSettings({
        ...settings,
        exceptions: {
          ...settings.exceptions,
          [exceptionFieldName]: [
            ...(settings.exceptions[exceptionFieldName] || []),
            event.target.value,
          ],
        },
      }, projectId);

      event.target.value = '';
    }
  }

  handleDelete(value, nameFor) {
    const {
      putProjectSettings, projectId, settings,
    } = this.props;
    const exceptionFieldName = forbiddenNames[nameFor];
    const updatedArray = [...settings.exceptions[exceptionFieldName]];

    for (let i = 0; i < updatedArray.length; i += 1) {
      if (updatedArray[i] === value) {
        updatedArray.splice(i, 1);
      }
    }

    putProjectSettings({
      ...settings,
      exceptions: {
        ...settings.exceptions,
        [exceptionFieldName]: updatedArray,
      },
    }, projectId);
  }

  handleCompositionChange(event, newValue) {
    console.log('here')
    console.log(event)
    console.log(newValue)
  }

  handleExcludeRandomSelectorsChange(event, newValue) {
    const {
      form,
      projectId,
      putProjectSettings,
      settings,
    } = this.props;

    putProjectSettings({
      ...settings,
      ...form.values,
      excludeRandomSelectors: newValue,
    }, projectId);
  }

  render() {
    return (
      <AppComponent
        {...{
          fields,
        }}
        onCompositionChange={(event, newValue) => this.handleCompositionChange(event, newValue)}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  
};

const mapDispatchToProps = {
};

App.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

