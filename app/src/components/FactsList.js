import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchFacts } from '../store/actions'
import '../App.css';

const FactsList = (props) => {
    useEffect(() => {
        props.fetchFacts();
    }, []);
    
    return (
        <div className="list">
            {props.isLoading && <h4>Loading factssss...</h4>}
            {props.error && <p className="error">error.. sucks, dude.</p>}
            {props.facts.length > 0 && (
            <div>
                {props.facts.map((fact, index) => (
                    <p key={index}>
                        🐱 {fact}
                    </p>
                ))}
            </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        facts: state.facts,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchFacts }
    )(FactsList);