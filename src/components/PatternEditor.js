import React, { Component } from 'react'
import ParameterGroups from './ParameterGroups'
import TrackParameters from './TrackParameters'
import ValueController from './ValueController'
import TriggerController from './TriggerController'
import AppContext from '../AppContext'
import styles from './PatternEditor.module.css'

class PatternEditor extends Component {
  render () {
    return (
      <div className={styles.PatternEditor}>
        <AppContext.Consumer>
          {state => (
            <ParameterGroups
              groups={state.groups}
              setGroup={state.setGroup} />
          )}
        </AppContext.Consumer>
        <div className={styles.sequencer}>
          <AppContext.Consumer>
            {state => (
              <TrackParameters
                parameters={state.parameters[state.group]}
                setParameter={state.setParameter} />
            )}
          </AppContext.Consumer>
          <AppContext.Consumer>
            {state => (
              <ValueController
                values={state.values}
                setValue={state.setValue} />
            )}
          </AppContext.Consumer>
          <AppContext.Consumer>
            {state => (
              <TriggerController
                step={state.step}
                steps={state.steps}
                setStep={state.setStep} />
            )}
          </AppContext.Consumer>
          <div className={styles.subdivision}>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default PatternEditor
